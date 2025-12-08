// routes/registerFamily.js
// Called from frontend AFTER Clerk signup verification returns createdUserId.
// Reason: Create Parent + Child documents in Mongo (store hashed child password).

import express from "express";
import bcrypt from "bcryptjs";
import ChildSchema from "../models/ChildSchema.js";
import ParentSchema from "../models/ParentSchema.js";
const router = express.Router();

/*
Expected body:
{
  clerkUserId,      // from Clerk signUp result
  parentId,
  parentEmail,
  parentMobile,
  childId,
  childPassword
}
*/
router.post("/", async (req, res) => {
  try {
    const { clerkUserId, parentId, parentEmail, parentMobile, childId, childPassword } = req.body;

    if (!clerkUserId || !parentId || !parentEmail || !childId || !childPassword) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // ensure uniqueness
    const existingParent = await ParentSchema.findOne({ $or: [{ clerkUserId }, { parentId }, { parentEmail }] });
    if (existingParent) return res.status(400).json({ error: "Parent already exists" });

    const existingChild = await ChildSchema.findOne({ childId });
    if (existingChild) return res.status(400).json({ error: "ChildId already taken" });

    // hash child password
    const hashed = await bcrypt.hash(childPassword, 10);

    // create child record
    const childDoc = new Child({
      childId,
      childPassword: hashed,
      parentClerkId: clerkUserId,
    });
    await childDoc.save();

    // create parent record (single child)
    const parentDoc = new Parent({
      clerkUserId,
      parentId,
      parentEmail,
      parentMobile,
      childId,
    });
    await parentDoc.save();

    return res.json({ message: "Family registered" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Registration failed" });
  }
});

export default router;

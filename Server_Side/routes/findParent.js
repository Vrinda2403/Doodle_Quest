// routes/findParent.js
// Used by Login.jsx parent flow: given parentId return parentEmail (to authenticate with Clerk).
// Reason: Frontend collects parentId but Clerk needs an identifier (we use parentEmail to call signIn.create).

import express from "express";
import ParentSchema from "../models/ParentSchema.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { parentId } = req.body;
    if (!parentId) return res.status(400).json({ error: "parentId required" });

    const parent = await ParentSchema.findOne({ parentId });
    if (!parent) return res.status(404).json({ error: "Parent not found" });

    return res.json({ parentEmail: parent.parentEmail });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
});

export default router;

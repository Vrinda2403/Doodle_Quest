// routes/childLogin.js
// Child authentication: verify child password from Child collection, issue JWT.
// Reason: child accounts are simple DB-backed users (no Clerk), return a JWT.

import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import ChildSchema from "../models/ChildSchema.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { childId, password } = req.body;
    if (!childId || !password) return res.status(400).json({ error: "childId and password required" });

    const child = await ChildSchema.findOne({ childId });
    if (!child) return res.status(400).json({ error: "Invalid childId or password" });

    const match = await bcrypt.compare(password, child.childPassword);
    if (!match) return res.status(400).json({ error: "Invalid childId or password" });

    // Issue JWT containing child's id and parentClerkId for relationship checks later
    const payload = { role: "child", childId: child.childId, parentClerkId: child.parentClerkId };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1d" });

    return res.json({ childToken: token });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Login failed" });
  }
});

export default router;

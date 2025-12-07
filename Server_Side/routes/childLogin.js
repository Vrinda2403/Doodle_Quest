import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { clerkClient } from "@clerk/clerk-sdk-node";

const router = express.Router();

router.post("/child-login", async (req, res) => {
  const { childId, password } = req.body;

  const allUsers = await clerkClient.users.getUserList({ limit: 200 });

  const user = allUsers.find(
    (u) => u.publicMetadata.childId === childId
  );

  if (!user) return res.status(400).json({ error: "Invalid child ID" });

  const match = await bcrypt.compare(password, user.publicMetadata.childPassword);

  if (!match) return res.status(400).json({ error: "Invalid password" });

  const token = jwt.sign(
    {
      mode: "child",
      parentClerkId: user.id,
      childId: childId
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  res.json({ childToken: token });
});

export default router;

import express from "express";
import bcrypt from "bcryptjs";
import { clerkClient } from "@clerk/clerk-sdk-node";

const router = express.Router();

router.post("/register-family", async (req, res) => {
  try {
    const {
      clerkUserId,
      parentId,
      parentEmail,
      parentMobile,
      childId,
      childPassword
    } = req.body;

    const hashedChildPassword = await bcrypt.hash(childPassword, 10);

    await clerkClient.users.updateUser(clerkUserId, {
      publicMetadata: {
        parentId,
        parentEmail,
        parentMobile,
        childId,
        childPassword: hashedChildPassword
      }
    });

    res.json({ message: "Family registered successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Registration failed" });
  }
});

export default router;

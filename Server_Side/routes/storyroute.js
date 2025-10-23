import generateStory from "../controllers/storycontroller.js";

import express from "express";

const router = express.Router();

router.get("/story", generateStory);
export default router;
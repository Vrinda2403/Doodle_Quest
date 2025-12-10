import express from "express";
import {Generatespeech} from "../controllers/speechcontroller.js";
const router = express.Router();

import multer from "multer";

const upload = multer(); // handles multipart/form-data

router.post("/speech", upload.single("audio"), Generatespeech);

export default router;
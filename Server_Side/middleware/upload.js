// import multer from "multer";
// import { v2 as cloudinary } from "cloudinary";
// import cloudinaryStoragePackage from "multer-storage-cloudinary";
// const CloudinaryStorage = cloudinaryStoragePackage.CloudinaryStorage;
// import dotenv from "dotenv";

// dotenv.config();

// // Cloudinary configuration
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// // Create storage
// const storage = new CloudinaryStorage({
//   cloudinary: cloudinary,
//   params: {
//     folder: "doodlequest",
//     allowed_formats: ["jpg", "png", "jpeg"],
//     public_id: (req, file) => {
//       const userId = req.auth?.userId || "guest";
//       return `doodle_${userId}_${Date.now()}`;
//     },
//   },
// });

// // Multer upload middleware
// const upload = multer({ storage });

// export default upload;

import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import streamifier from "streamifier";

dotenv.config();

// Cloudinary Config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Store files temporarily in memory
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Upload buffer to Cloudinary
export const uploadToCloudinary = (buffer, folder) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder },
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    );

    streamifier.createReadStream(buffer).pipe(stream);
  });
};

export default upload;


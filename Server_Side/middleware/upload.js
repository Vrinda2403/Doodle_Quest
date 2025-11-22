import multer from "multer";
import pkg from "multer-storage-cloudinary";
import cloudinaryModule from "cloudinary";

const { v2: cloudinary } = cloudinaryModule;
const { CloudinaryStorage } = pkg;

// Cloudinary Config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Storage Config
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "doodle_uploads",
    allowed_formats: ["jpg", "png", "jpeg"],
  },
});

const upload = multer({ storage });

export default upload;

import multer from 'multer';
import { cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import dotenv from 'dotenv';

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'doodlequest',
    allowed_formats: ['jpg', 'png', 'jpeg'],
    public_id: (req, file) => {
      // --- THIS IS THE CHANGE ---
      // Clerk puts the user ID on 'req.auth.userId'
      const childId = req.auth.userId; 
      // --------------------------
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      return `doodle-${childId}-${uniqueSuffix}`;
    },
  },
});

const upload = multer({ storage: storage });
export default upload;
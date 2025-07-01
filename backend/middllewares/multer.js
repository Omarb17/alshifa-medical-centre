import multer from "multer";

const storage = multer.memoryStorage(); // Use memoryStorage instead of diskStorage to keep the file in memory

const upload = multer({ storage: storage });

export default upload;

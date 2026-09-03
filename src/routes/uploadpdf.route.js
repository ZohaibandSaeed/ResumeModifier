import { Router } from "express";
import { UploadFile } from "../controllers/uploadpdf.controller.js";
import { upload } from "../utils/loadpdf.js";

const router = Router();

router.post("/upload", upload.single("file"), UploadFile);

export default router;
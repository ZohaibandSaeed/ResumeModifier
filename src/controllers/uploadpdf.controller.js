import { PDFParse } from "pdf-parse";
import { analyzeResume } from "../ai/first.ai.js";

async function UploadFile(req, res) {

    try {
        const file = req.file;
        if (!file) {
            return res.status(400).json({
                success: false,
                message: "No file uploaded",
            });
        }

        const parser = new PDFParse({
            data: file.buffer,
        });

        const pdfDATA = await parser.getText();

        await parser.destroy();

        const aiResponse = await analyzeResume(pdfDATA.text);

        res.status(200).json({
            success: true,
            message: "File uploaded successfully",
            data: aiResponse,
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
}


export { UploadFile };
import { PDFParse } from "pdf-parse";
import { AnalyzeResume } from "../ai/first.ai.js";
import { ResumeMaker } from "../ai/second.ai.js";
import { template } from "../services/template.html.js";
import { generatePDF } from "../services/generate.pdf.js";
import fs from "fs";

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

        const aiResponse = await AnalyzeResume(pdfDATA.text);

        const makerResponse = await ResumeMaker(pdfDATA.text, aiResponse);

        const html = template(makerResponse);

        fs.writeFileSync("./resume.html", html);

        const pdfPath = await generatePDF(html);

        fs.writeFileSync("resume.pdf", pdfPath);

        res.status(200).json({
            success: true,
            message: "File uploaded successfully",
            pdf_path: "resume.pdf",
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
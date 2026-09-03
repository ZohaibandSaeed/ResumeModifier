import express from "express";
import dotenv from "dotenv";
import uploadpdfRoute from "./src/routes/uploadpdf.route.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/pdf", uploadpdfRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});
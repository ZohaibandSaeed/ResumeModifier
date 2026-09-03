import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import dotenv from "dotenv";

dotenv.config();

const llm = new ChatGoogleGenerativeAI({
    model: "gemini-3.6-flash",
    apiKey: process.env.GOOGLE_GENAI_API_KEY,
});


async function analyzeResume(resumeText) {
    const prompt = `
    I’m going to share my resume as plain text. 
    Please read it carefully, evaluate it, and give it a score out of 10.
    Keep your response short and to the point.
    Also, briefly highlight the areas where I can improve my resume.
    
    resume: ${resumeText}
    `;

    const response = await llm.invoke(prompt);

    return response.content;
}

export { analyzeResume };
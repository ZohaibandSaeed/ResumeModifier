import { ChatGroq } from "@langchain/groq";
import dotenv from "dotenv";

dotenv.config();

const JSON_Object = {
    type: "object",
    additionalProperties: false,
    properties: {
        name: { type: "string" },

        contact: {
            type: "object",
            additionalProperties: false,
            properties: {
                phone: { type: "string" },
                email: { type: "string" },
                linkedin: { type: "string" },
                github: { type: "string" }
            },
            required: ["phone", "email", "linkedin", "github"]
        },

        summary: { type: "string" },

        skills: {
            type: "array",
            items: { type: "string" }
        },

        experience: {
            type: "array",
            items: {
                type: "object",
                additionalProperties: false,
                properties: {
                    jobTitle: { type: "string" },
                    company: { type: "string" },
                    location: { type: "string" },
                    startDate: { type: "string" },
                    endDate: { type: "string" },
                    bullets: {
                        type: "array",
                        items: { type: "string" }
                    }
                },
                required: [
                    "jobTitle",
                    "company",
                    "location",
                    "startDate",
                    "endDate",
                    "bullets"
                ]
            }
        },

        education: {
            type: "array",
            items: {
                type: "object",
                additionalProperties: false,
                properties: {
                    degree: { type: "string" },
                    institution: { type: "string" },
                    location: { type: "string" },
                    startDate: { type: "string" },
                    endDate: { type: "string" },
                    details: { type: "string" }
                },
                required: [
                    "degree",
                    "institution",
                    "location",
                    "startDate",
                    "endDate",
                    "details"
                ]
            }
        },

        projects: {
            type: "array",
            items: {
                type: "object",
                additionalProperties: false,
                properties: {
                    name: { type: "string" },
                    technologies: { type: "string" },
                    bullets: {
                        type: "array",
                        items: { type: "string" }
                    }
                },
                required: ["name", "technologies", "bullets"]
            }
        },

        certifications: {
            type: "array",
            items: { type: "string" }
        },

        awards: {
            type: "array",
            items: { type: "string" }
        }
    },
    required: ["name", "contact", "summary", "skills", "experience", "education", "projects", "certifications", "awards"]
};

const llm = new ChatGroq({
    model: "openai/gpt-oss-120b",
    apiKey: process.env.GROQ_API_KEY,
    response_format: {
        type: "json_schema",
        json_schema: {
            name: "data",
            strict: true,
            schema: JSON_Object
        }
    },
});

async function ResumeMaker(ORIGINAL_RESUME, RESUME_ANALYSIS) {

    const prompt = `You are an expert professional resume writer and ATS optimization specialist.

Rewrite and improve the resume using the original resume and the analysis provided.

Rules:

Improve grammar, wording, clarity, and professionalism.
Rewrite descriptions and bullet points to be strong, concise, and achievement-focused.
Apply valid corrections identified in the analysis.
Preserve all existing factual information.
Do not invent or assume any facts, dates, metrics, skills, achievements, links, or qualifications.
Preserve existing dates exactly unless the analysis explicitly provides the correct replacement.
If information is missing, leave it empty rather than creating it.
Keep the resume ATS-friendly and well-structured.
Every item inside education, experience, and projects must be a JSON object matching the provided schema.
Never convert a JSON object into a string.
Never put JSON or JSON-encoded objects inside
        
    Input

    Original Resume:
    ${ORIGINAL_RESUME}

    Mistake Highlighted:
    ${RESUME_ANALYSIS}`;

    const structuredLLM = llm.withStructuredOutput(JSON_Object);

    const response = await structuredLLM.invoke(prompt);
    return response;
}

// const dataResponse = await ResumeMaker(originalResume, resumeAnalysis);

// console.log(dataResponse);

export { ResumeMaker };
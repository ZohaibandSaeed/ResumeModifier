# AI Resume Optimizer & Generator

## Overview
The AI Resume Optimizer is an advanced backend system designed to elevate professional resumes. Leveraging cutting-edge Large Language Models (LLMs) via LangChain and the Groq engine, this platform ingests raw resume PDFs, identifies structural and grammatical flaws, and completely rewrites the content into a highly optimized, ATS-friendly format. Finally, it dynamically renders and compiles a new, visually appealing PDF resume using Puppeteer.

## Core Features
*   **Intelligent Text Extraction:** Seamlessly parses uploaded PDF documents to extract raw resume content in real-time.
*   **Deep AI Analysis:** Utilizes state-of-the-art AI models to evaluate the resume, score its effectiveness, and generate actionable improvement insights.
*   **Automated Rewriting:** Intelligently reconstructs bullet points, summaries, and experience sections to maximize professional impact and ATS compatibility.
*   **Dynamic PDF Generation:** Transforms the AI-optimized JSON data into a beautifully structured HTML template and exports it as a pristine PDF document.

## Prerequisites
Before you begin, ensure you have the following installed on your system:
*   Node.js (v18 or higher recommended)
*   NPM (Node Package Manager)
*   A valid Groq API Key (or Google Gemini API Key)

## Installation & Setup

Follow these precise steps to clone the repository and run the project locally.

**1. Clone the Repository**
Open your terminal and run the following command to download the source code:
```bash
git clone https://github.com/ZohaibandSaeed/ResumeModifier.git
```

**2. Navigate to the Project Directory**
```bash
cd ResumeModifier
```

**3. Install Dependencies**
Install all required Node.js packages by executing:
```bash
npm install
```

**4. Configure Environment Variables**
Create a `.env` file in the root directory of the project. You can use the provided `example.env` as a reference. Add your API key to this file:
```env
GROQ_API_KEY=your_actual_api_key_here
```

**5. Start the Application**
Launch the development server by running:
```bash
npm start
```
The server will initialize and begin listening for requests on port 8000 (or the port specified in your environment).

## API Usage
To test the application, you can use an API client like Postman or Insomnia.

*   **Endpoint:** \`/pdf/upload\`
*   **Method:** \`POST\`
*   **Body Type:** \`multipart/form-data\`
*   **Key:** \`file\` (Select a PDF document to upload)

Upon a successful request, the server will analyze the resume, generate an optimized version, and save a new \`resume.pdf\` directly in your project directory.

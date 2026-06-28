# AI Resume Analyzer

An **AI-powered resume analysis platform** that evaluates resumes against job descriptions and generates ATS-optimized resumes.

The system analyzes resumes using **keyword matching, ATS scoring, and AI feedback** to help job seekers improve their chances of passing Applicant Tracking Systems (ATS) used by companies during hiring.

---

# 🚀 Features

• Upload resume (PDF or DOCX)
• Extract resume text automatically
• Analyze resume against job description
• Keyword match analysis
• Missing keyword detection
• ATS compatibility scoring
• AI-powered resume feedback
• Generate ATS-optimized resume
• Download optimized resume (PDF / DOCX)
• Send optimized resume to email
• Google authentication using Supabase

---

# 🧠 How It Works

1. User uploads a resume and job description
2. Backend extracts text from the uploaded resume
3. Job description keywords are extracted using NLP techniques
4. Resume is compared against job requirements
5. ATS score and keyword match analysis are calculated
6. AI generates resume improvement suggestions
7. User can generate an ATS-optimized resume

---

# 🛠 Tech Stack

## Frontend

* React
* TypeScript
* Vite
* TailwindCSS
* Axios

## Backend

* Node.js
* Express.js
* Multer (file upload middleware)
* Mammoth (DOCX parsing)
* PDF.js (PDF parsing)
* Nodemailer (email service)

## AI & NLP

* Puter AI (AI feedback & resume optimization)
* NLP keyword extraction
* Transformers

## Authentication

* Supabase
* Google OAuth

---

# ⚡ Tech Stack Overview

Frontend: React, TypeScript, TailwindCSS
Backend: Node.js, Express
AI: Puter AI
Authentication: Supabase
File Processing: PDF.js, Mammoth
Email Service: Nodemailer

---

# 🏗 Project Architecture

The application follows a **full-stack architecture** where the frontend communicates with a backend API for resume analysis and AI processing.

```
Frontend (React + TypeScript)
        │
        │ REST API
        ▼
Backend (Node.js + Express)
        │
        ├── Resume Parsing
        │      ├─ PDF.js
        │      └─ Mammoth (DOCX)
        │
        ├── Keyword Matching
        │
        ├── ATS Scoring Algorithm
        │
        ├── AI Resume Optimization
        │      └─ Puter AI
        │
        ▼
External Services
   ├── Supabase (Authentication)
   └── Nodemailer (Email Resume Delivery)
```

### Frontend Responsibilities

* Resume upload interface
* Job description input
* Keyword heatmap visualization
* Display ATS score and AI feedback
* Resume download and email features

### Backend Responsibilities

* Resume file processing
* ATS scoring algorithm
* Keyword extraction and matching
* AI resume optimization
* Email delivery service

---

# 📂 Project Structure

## Frontend

```
frontend/
│
├── constants/
├── public/
├── services/
├── src/
│   ├── components/
│   ├── pages/
│   ├── steps/
│   └── lib/
├── types/
│
├── index.html
├── package.json
└── vite.config.ts
```

---

## Backend

```
backend/
│
├── controllers/
├── middlewares/
├── models/
├── routes/
├── services/
├── utils/
│
├── index.js
└── package.json
```

---

# ⚙️ Installation

## Clone Repository

```
git clone https://github.com/Chitranshnigam28/aiResumeAnalyzer.git

cd ai-resume-analyzer
```

---

# Install Frontend

```
cd frontend
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

# Install Backend

```
cd backend
npm install
node index.js
```

Backend runs on:

```
http://localhost:5001
```

---

# 🔑 Environment Variables

Create `.env` inside **backend/**

Example:

```
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
PUTER_API_KEY=your_puter_api_key
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_key
```

---

# 📸 Screenshots

(Screenshots will be added after UI improvements and deployment)

Example:


# 🎯 Future Improvements

• Resume preview editor
• Resume templates
• Improved ATS scoring algorithm
• LinkedIn profile import
• Resume version history
• Job matching suggestions

---

# 👨‍💻 Author

**Chitransh Nigam**

Full Stack Developer
React • TypeScript • Node.js • AI Integration

---

# ⭐ Support

If you found this project useful, please consider **starring the repository**.

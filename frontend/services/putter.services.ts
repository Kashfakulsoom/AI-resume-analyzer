import type { Feedback, Section, Tip } from "../types/feedback"

declare global {
  interface Window {
    puter: {
      ai: {
        chat: (prompt: string) => Promise<{
          message?: {
            content?: string
          }
        }>
      }
    }
  }
}

type ParsedTip = {
  type?: unknown
  tip?: unknown
  explanation?: unknown
}

type ParsedSection = {
  score?: unknown
  tips?: unknown
}

type ParsedFeedback = {
  overallScore?: unknown
  ATS?: unknown
  toneAndStyle?: unknown
  content?: unknown
  structure?: unknown
  skills?: unknown
}

const isObject = (value: unknown): value is Record<string, unknown> => {
  return typeof value === "object" && value !== null
}

const normalizeTipType = (value: unknown): Tip["type"] => {
  if (value === "good" || value === "improve" || value === "missing") {
    return value
  }
  return "improve"
}

const normalizeTip = (tip: unknown): Tip => {
  if (!isObject(tip)) {
    return {
      type: "improve",
      tip: "",
      explanation: "",
    }
  }

  const parsedTip = tip as ParsedTip

  return {
    type: normalizeTipType(parsedTip.type),
    tip: typeof parsedTip.tip === "string" ? parsedTip.tip : "",
    explanation:
      typeof parsedTip.explanation === "string" ? parsedTip.explanation : "",
  }
}

const normalizeSection = (section: unknown): Section => {
  if (!isObject(section)) {
    return {
      score: 0,
      tips: [],
    }
  }

  const parsedSection = section as ParsedSection

  return {
    score: typeof parsedSection.score === "number" ? parsedSection.score : 0,
    tips: Array.isArray(parsedSection.tips)
      ? parsedSection.tips.map(normalizeTip)
      : [],
  }
}

export const analyzeResumeWithPuter = async (
  resumeText: string,
  jobDescription: string,
  matchedKeywords: string[] = [],
  missingKeywords: string[] = [],
  keywordScore: number
): Promise<Feedback> => {
  const prompt = `
You are an expert ATS (Applicant Tracking System) resume analyzer.

Your task is to evaluate how well a resume matches a job description and provide actionable improvement tips.

Use the ATS analysis results below as the MAIN scoring signal.

Important rules:
1. Use the ATS results as the primary basis for the score.
2. Do NOT inflate scores.
3. The final overallScore should stay close to the Keyword Match Score unless the resume clearly shows stronger or weaker evidence.
4. If important keywords are missing, reduce the score realistically.
5. Only count measurable achievements if explicit numbers, percentages, counts, or performance improvements are actually written in the resume.
6. Avoid generic advice unless it directly affects ATS match or role alignment.
7. Be practical and realistic, similar to an ATS optimization tool.
8. Return concise, actionable feedback.

Resume:
${resumeText}

Job Description:
${jobDescription}

ATS Results:
Matched Keywords: ${matchedKeywords.length ? matchedKeywords.join(", ") : "None"}
Missing Keywords: ${missingKeywords.length ? missingKeywords.join(", ") : "None"}
Keyword Match Score: ${keywordScore}%

Scoring guidance:
- overallScore must be between 0 and 100
- overallScore should usually stay within about 8 points of Keyword Match Score
- if the resume clearly proves strong experience, structure, and alignment, it may be slightly higher
- if important evidence is missing, it should be lower
- do not give very high scores unless the resume is clearly an excellent match

Return ONLY valid JSON. No explanation. No markdown.

Use this exact structure:

{
  "overallScore": 0,
  "ATS": {
    "score": 0,
    "tips": [
      {
        "type": "good",
        "tip": "string",
        "explanation": "string"
      }
    ]
  },
  "toneAndStyle": {
    "score": 0,
    "tips": []
  },
  "content": {
    "score": 0,
    "tips": []
  },
  "structure": {
    "score": 0,
    "tips": []
  },
  "skills": {
    "score": 0,
    "tips": []
  }
}

Rules for tip.type:
- "good" = something already strong in the resume
- "improve" = something present but should be improved
- "missing" = something important that is absent or not clearly shown

All scores must be whole numbers from 0 to 100.
Use 2–3 concise tips per section.
`

  const aiResponse = await window.puter.ai.chat(prompt)
  const aiText = aiResponse.message?.content ?? ""

  let parsed: ParsedFeedback = {}

  try {
    const rawParsed: unknown = JSON.parse(aiText)

    if (isObject(rawParsed)) {
      parsed = rawParsed as ParsedFeedback
    }
  } catch (error) {
    console.error("Failed to parse AI response:", error)
    console.error("Raw AI response:", aiText)
  }

  const feedback: Feedback = {
    overallScore:
      typeof parsed.overallScore === "number" ? parsed.overallScore : 0,
    ATS: normalizeSection(parsed.ATS),
    toneAndStyle: normalizeSection(parsed.toneAndStyle),
    content: normalizeSection(parsed.content),
    structure: normalizeSection(parsed.structure),
    skills: normalizeSection(parsed.skills),
  }

  return feedback
}
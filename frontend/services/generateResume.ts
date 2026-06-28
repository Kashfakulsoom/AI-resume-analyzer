import type { Feedback } from "../types/feedback"

declare global {
  interface Window {
    puter: any
  }
}

export const generateOptimizedResume = async (
  resumeText: string,
  jobDescription: string,
  missingKeywords: string[],
  feedback: Feedback
) => {

  const prompt = `
You are a professional resume writer and ATS optimization expert.

Your task is to rewrite the candidate's resume to maximize ATS compatibility for the provided job description.

You must incorporate:

1. Missing keywords
2. ATS feedback suggestions
3. Structure improvements
4. Content improvements
5. Tone improvements

DO NOT fabricate experience. Only improve wording and structure.

------------------------

JOB DESCRIPTION

${jobDescription}

------------------------

ORIGINAL RESUME

${resumeText}

------------------------

MISSING KEYWORDS TO INCLUDE

${missingKeywords.join(", ")}

------------------------

ATS FEEDBACK

ATS Suggestions:
${feedback.ATS.tips.map(t => t.tip).join("\n")}

Tone & Style Suggestions:
${feedback.toneAndStyle.tips.map(t => t.tip).join("\n")}

Content Suggestions:
${feedback.content.tips.map(t => t.tip).join("\n")}

Structure Suggestions:
${feedback.structure.tips.map(t => t.tip).join("\n")}

Skills Suggestions:
${feedback.skills.tips.map(t => t.tip).join("\n")}

------------------------

OPTIMIZATION RULES

1. Add missing keywords naturally.
2. Follow ATS-friendly structure.
3. Use bullet points.
4. Highlight measurable achievements.
5. Maintain truthful experience.

------------------------

FORMAT THE RESUME USING THESE SECTIONS

Professional Summary

Skills

Professional Experience

Projects

Education

------------------------

OUTPUT REQUIREMENTS

Return a fully rewritten ATS-optimized resume.

The resume should:
• Include the missing keywords naturally
• Follow clear ATS structure
• Use bullet points
• Be concise and professional

Do NOT include explanations.

Return ONLY the optimized resume.
`

  const response = await window.puter.ai.chat(prompt)

  return response.message.content
}
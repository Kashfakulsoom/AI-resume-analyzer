declare global {
  interface Window {
    puter: any
  }
}

export const extractJobKeywords = async (
  jobDescription: string
): Promise<string[]> => {

  const prompt = `
You are an ATS keyword extraction system.

Extract the most important technical skills, tools, and technologies from the job description.

Rules:

• Return 15–20 keywords maximum
• Focus on technologies, frameworks, and important skills
• Ignore filler words and company descriptions
• Do NOT include generic words like "team", "work", "company"

Return JSON like:

{
  "keywords": ["React", "JavaScript", "Redux", "CI/CD"]
}

Job Description:
${jobDescription}
`

  const response = await window.puter.ai.chat(prompt)

  const text = response.message.content

  const parsed = JSON.parse(text)

  return parsed.keywords || []

}
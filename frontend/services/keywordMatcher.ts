export const matchKeywords = (
  resumeText: string,
  keywords: string[]
) => {

  const resume = resumeText.toLowerCase()

  const matched: string[] = []
  const missing: string[] = []

  keywords.forEach((keyword) => {

    if (resume.includes(keyword.toLowerCase())) {
      matched.push(keyword)
    } else {
      missing.push(keyword)
    }

  })

  return { matched, missing }

}
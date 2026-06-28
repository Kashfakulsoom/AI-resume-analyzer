export interface Feedback {
  overallScore: number
  ATS: Section
  toneAndStyle: Section
  content: Section
  structure: Section
  skills: Section
}

export interface Section {
  score: number
  tips: Tip[]
}

export interface Tip {
  type: "good" | "improve" | "missing"
  tip: string
  explanation?: string
}

export interface ATSResult {
  skillScore: number
  finalScore: number
  matchedConcepts: string[]
  missingConcepts: string[]
}
export const AIResponseFormat = `

Return ONLY valid JSON. No explanation. No markdown.

All scores MUST be between 0 and 100.

If any score is less than 0 or greater than 100, correct it.

interface Feedback {

  overallScore: number; // 0–100 scale


  ATS: {
    score: number; // 0–100 scale
    tips: {
      type: "good" | "improve";
      tip: string;
    }[];
  };


  toneAndStyle: {
    score: number; // 0–100 scale
    tips: {
      type: "good" | "improve";
      tip: string;
      explanation: string;
    }[];
  };


  content: {
    score: number; // 0–100 scale
    tips: {
      type: "good" | "improve";
      tip: string;
      explanation: string;
    }[];
  };


  structure: {
    score: number; // 0–100 scale
    tips: {
      type: "good" | "improve";
      tip: string;
      explanation: string;
    }[];
  };


  skills: {
    score: number; // 0–100 scale
    tips: {
      type: "good" | "improve";
      tip: string;
      explanation: string;
    }[];
  };

}

DO NOT use 1–10 scale.

DO NOT use decimals.

Example:

overallScore: 78

`;
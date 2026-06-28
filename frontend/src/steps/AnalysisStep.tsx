import ScoreCircle from "../components/ScoreCircle"
import FeedbackCard from "../components/FeedbackCard"
import KeywordHeatmap from "../components/KeywordHeatmap"
import type { Feedback } from "../../types/feedback"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, FileCheck2, Target } from "lucide-react"

interface Props {
  feedback: Feedback
  matchedKeywords: string[]
  missingKeywords: string[]
  setStep: (step: number) => void
}

const AnalysisStep = ({
  feedback,
  matchedKeywords,
  missingKeywords,
  setStep,
}: Props) => {
  return (
    <div className="mt-10 w-full px-6 pb-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col gap-3">
          <Badge variant="secondary" className="w-fit rounded-full px-3 py-1">
            ATS Analysis Complete
          </Badge>
          <h2 className="text-3xl font-bold text-slate-900">
            Resume Analysis Dashboard
          </h2>
          <p className="max-w-2xl text-sm text-slate-500">
            Review your ATS score, content quality, structure, writing style,
            and keyword alignment before generating an optimized resume.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="rounded-3xl border-0 shadow-md">
            <CardContent className="flex h-full flex-col items-center justify-center p-8">
              <ScoreCircle score={feedback.overallScore} />
            </CardContent>
          </Card>

          <Card className="lg:col-span-2 rounded-3xl border-0 shadow-md">
            <CardContent className="p-6 md:p-8">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border bg-slate-50 p-4">
                  <div className="flex items-center gap-2 text-slate-700">
                    <FileCheck2 className="h-4 w-4 text-indigo-600" />
                    <span className="text-sm font-medium">Matched Keywords</span>
                  </div>
                  <p className="mt-3 text-2xl font-bold text-slate-900">
                    {matchedKeywords.length}
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Terms successfully aligned with the job description
                  </p>
                </div>

                <div className="rounded-2xl border bg-slate-50 p-4">
                  <div className="flex items-center gap-2 text-slate-700">
                    <Target className="h-4 w-4 text-indigo-600" />
                    <span className="text-sm font-medium">Missing Keywords</span>
                  </div>
                  <p className="mt-3 text-2xl font-bold text-slate-900">
                    {missingKeywords.length}
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Important terms not yet reflected in your resume
                  </p>
                </div>

                <div className="rounded-2xl border bg-slate-50 p-4">
                  <div className="flex items-center gap-2 text-slate-700">
                    <Sparkles className="h-4 w-4 text-indigo-600" />
                    <span className="text-sm font-medium">AI Insights</span>
                  </div>
                  <p className="mt-3 text-2xl font-bold text-slate-900">5</p>
                  <p className="mt-1 text-sm text-slate-500">
                    Feedback areas generated for optimization
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <Card className="rounded-3xl border-0 shadow-md">
            <CardContent className="p-6 md:p-8">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-slate-900">
                  Detailed Feedback
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  These sections explain how your resume performs in the most important ATS dimensions.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                <FeedbackCard title="ATS" section={feedback.ATS} />
                <FeedbackCard title="Tone & Style" section={feedback.toneAndStyle} />
                <FeedbackCard title="Content" section={feedback.content} />
                <FeedbackCard title="Structure" section={feedback.structure} />
                <FeedbackCard title="Skills" section={feedback.skills} />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <Card className="rounded-3xl border-0 shadow-md">
            <CardContent className="p-6 md:p-8">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-slate-900">
                  Keyword Match Analysis
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Review which keywords are already present and which ones should be added for stronger ATS alignment.
                </p>
              </div>

              <KeywordHeatmap
                matchedKeywords={matchedKeywords}
                missingKeywords={missingKeywords}
              />
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 flex justify-center">
          <Button
            onClick={() => setStep(3)}
            className="rounded-xl bg-indigo-600 px-6 py-3 hover:bg-indigo-700"
          >
            Optimize Resume
          </Button>
        </div>
      </div>
    </div>
  )
}

export default AnalysisStep
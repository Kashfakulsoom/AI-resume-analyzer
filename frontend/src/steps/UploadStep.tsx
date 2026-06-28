import { useMemo, useState } from "react"
import HeroComponent from "../components/HeroComponent"
import type { UploadStepProps } from "../../types/uploadStep"
import ResumeUpload from "../components/ResumeUpload"
import StepSwitcher from "../steps/StepSwitcher"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { FileText, Sparkles, Target } from "lucide-react"

const UploadStep = ({
  setFile,
  jobDescription,
  setJobDescription,
  uploadResume,
  loading,
}: UploadStepProps) => {
  const [step, setStep] = useState(1)

  const progressValue = useMemo(() => {
    if (step === 1) return 50
    return 100
  }, [step])

  return (
    <div className="flex flex-col items-center bg-slate-50">
      <HeroComponent />

      <section className="w-full max-w-6xl px-6 py-12" id="drop">
        <div className="mb-8 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Badge variant="secondary" className="rounded-full px-3 py-1">
              Resume Analysis Flow
            </Badge>
            <span className="text-sm text-muted-foreground">
              Step {step} of 2
            </span>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>Complete your setup before analysis</span>
              <span>{progressValue}%</span>
            </div>
            <Progress value={progressValue} className="h-2" />
          </div>
        </div>

        <Card className="border-0 shadow-md rounded-3xl">
          <CardContent className="p-6 md:p-8">
            <StepSwitcher step={step} setStep={setStep} />

            <div className="mt-8 min-h-[360px]">
              {step === 1 && (
                <ResumeUpload setFile={setFile} />
              )}

              {step === 2 && (
                <Card className="mx-auto w-full max-w-4xl rounded-3xl border shadow-sm">
                  <CardContent className="p-6 md:p-8">
                    <div className="mb-6 flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600">
                        <Target className="h-6 w-6" />
                      </div>

                      <div>
                        <h2 className="text-xl font-semibold text-slate-900">
                          Add Job Description
                        </h2>
                        <p className="mt-1 text-sm text-slate-500">
                          Paste the target role details so the analyzer can compare skills,
                          keywords, and ATS relevance.
                        </p>
                      </div>
                    </div>

                    <div className="grid gap-3">
                      <label className="text-sm font-medium text-slate-700">
                        Job Description
                      </label>

                      <Textarea
                        placeholder="Paste the job description here..."
                        value={jobDescription}
                        onChange={(e) => setJobDescription(e.target.value)}
                        className="min-h-[260px] resize-none rounded-2xl border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-6 shadow-sm focus-visible:ring-2 focus-visible:ring-indigo-500"
                      />

                      <div className="flex flex-wrap gap-2 pt-1">
                        <Badge variant="outline" className="rounded-full">
                          Keywords
                        </Badge>
                        <Badge variant="outline" className="rounded-full">
                          ATS Match
                        </Badge>
                        <Badge variant="outline" className="rounded-full">
                          Skill Alignment
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            <div className="mt-8 flex flex-col gap-4 border-t pt-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  <span>PDF / DOCX supported</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  <span>AI-powered ATS insights</span>
                </div>
              </div>

              <div className="flex gap-3">
                {step === 2 && (
                  <Button
                    variant="outline"
                    onClick={() => setStep(1)}
                    className="rounded-xl"
                  >
                    Back
                  </Button>
                )}

                {step === 1 ? (
                  <Button
                    onClick={() => setStep(2)}
                    className="rounded-xl bg-indigo-600 hover:bg-indigo-700"
                  >
                    Next
                  </Button>
                ) : (
                  <Button
                    onClick={uploadResume}
                    disabled={loading}
                    className="rounded-xl bg-blue-600 hover:bg-blue-700"
                  >
                    {loading ? "Analyzing resume..." : "Analyze Resume"}
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}

export default UploadStep
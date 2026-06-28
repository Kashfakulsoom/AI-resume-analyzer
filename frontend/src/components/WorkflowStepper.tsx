import { Check, UploadCloud, FileSearch, WandSparkles } from "lucide-react"

interface WorkflowStepperProps {
  step: number
  canGoToAnalysis: boolean
  canGoToOptimize: boolean
  onStepChange: (targetStep: number) => void
}

const WorkflowStepper = ({
  step,
  canGoToAnalysis,
  canGoToOptimize,
  onStepChange,
}: WorkflowStepperProps) => {
  return (
    <div className="mx-auto mt-8 mb-10 w-full max-w-7xl px-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center">
          <button
            type="button"
            onClick={() => onStepChange(1)}
            className={`rounded-2xl border p-4 text-left transition ${
              step === 1
                ? "border-indigo-500 bg-indigo-50 shadow-sm"
                : "border-slate-200 bg-white hover:border-slate-300"
            }`}
          >
            <div className="flex items-start gap-3">
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-2xl ${
                  step > 1
                    ? "bg-indigo-600 text-white"
                    : "bg-indigo-100 text-indigo-600"
                }`}
              >
                {step > 1 ? (
                  <Check className="h-5 w-5" />
                ) : (
                  <UploadCloud className="h-5 w-5" />
                )}
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-900">Upload</p>
                <p className="mt-1 text-xs text-slate-500">
                  Add resume and job description
                </p>
              </div>
            </div>
          </button>

          <div className="hidden md:block w-16">
            <div className="h-1 w-full rounded-full bg-slate-200">
              <div
                className={`h-1 rounded-full bg-indigo-600 transition-all duration-300 ${
                  step >= 2 ? "w-full" : "w-0"
                }`}
              />
            </div>
          </div>

          <button
            type="button"
            onClick={() => onStepChange(2)}
            disabled={!canGoToAnalysis}
            className={`rounded-2xl border p-4 text-left transition ${
              !canGoToAnalysis
                ? "cursor-not-allowed border-slate-200 bg-slate-50 opacity-60"
                : step === 2
                ? "border-indigo-500 bg-indigo-50 shadow-sm"
                : "border-slate-200 bg-white hover:border-slate-300"
            }`}
          >
            <div className="flex items-start gap-3">
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-2xl ${
                  step > 2
                    ? "bg-indigo-600 text-white"
                    : step === 2
                    ? "bg-indigo-600 text-white"
                    : "bg-slate-200 text-slate-500"
                }`}
              >
                {step > 2 ? (
                  <Check className="h-5 w-5" />
                ) : (
                  <FileSearch className="h-5 w-5" />
                )}
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-900">Analysis</p>
                <p className="mt-1 text-xs text-slate-500">
                  Review ATS score and feedback
                </p>
              </div>
            </div>
          </button>

          <div className="hidden md:block w-16">
            <div className="h-1 w-full rounded-full bg-slate-200">
              <div
                className={`h-1 rounded-full bg-indigo-600 transition-all duration-300 ${
                  step >= 3 ? "w-full" : "w-0"
                }`}
              />
            </div>
          </div>

          <button
            type="button"
            onClick={() => onStepChange(3)}
            disabled={!canGoToOptimize}
            className={`rounded-2xl border p-4 text-left transition ${
              !canGoToOptimize
                ? "cursor-not-allowed border-slate-200 bg-slate-50 opacity-60"
                : step === 3
                ? "border-indigo-500 bg-indigo-50 shadow-sm"
                : "border-slate-200 bg-white hover:border-slate-300"
            }`}
          >
            <div className="flex items-start gap-3">
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-2xl ${
                  step === 3
                    ? "bg-indigo-600 text-white"
                    : "bg-slate-200 text-slate-500"
                }`}
              >
                <WandSparkles className="h-5 w-5" />
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-900">Optimize</p>
                <p className="mt-1 text-xs text-slate-500">
                  Generate improved resume
                </p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default WorkflowStepper
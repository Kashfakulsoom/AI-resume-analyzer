import { Badge } from "@/components/ui/badge"
import { Check, FileUp, FileSearch } from "lucide-react"

type StepSwitcherProps = {
  step: number
  setStep: (step: number) => void
}

const StepSwitcher = ({ step, setStep }: StepSwitcherProps) => {
  return (
    <div className="mx-auto w-full max-w-4xl">
      <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-center">
        <button
          type="button"
          onClick={() => setStep(1)}
          className={`rounded-2xl border p-4 text-left transition-all ${
            step === 1
              ? "border-indigo-500 bg-indigo-50 shadow-sm"
              : "border-slate-200 bg-white hover:border-slate-300"
          }`}
        >
          <div className="flex items-start gap-3">
            <div
              className={`flex h-11 w-11 items-center justify-center rounded-2xl ${
                step >= 1 ? "bg-indigo-600 text-white" : "bg-slate-200 text-slate-500"
              }`}
            >
              {step > 1 ? <Check className="h-5 w-5" /> : <FileUp className="h-5 w-5" />}
            </div>

            <div>
              <div className="flex items-center gap-2">
                <p className="font-semibold text-slate-900">Resume Upload</p>
                <Badge variant="secondary" className="rounded-full">
                  Step 1
                </Badge>
              </div>
              <p className="mt-1 text-sm text-slate-500">
                Add your resume file to begin analysis
              </p>
            </div>
          </div>
        </button>

        <div className="hidden md:block w-20">
          <div className="h-1 w-full rounded-full bg-slate-200">
            <div
              className={`h-1 rounded-full bg-indigo-600 transition-all duration-300 ${
                step === 2 ? "w-full" : "w-1/2"
              }`}
            />
          </div>
        </div>

        <button
          type="button"
          onClick={() => setStep(2)}
          className={`rounded-2xl border p-4 text-left transition-all ${
            step === 2
              ? "border-indigo-500 bg-indigo-50 shadow-sm"
              : "border-slate-200 bg-white hover:border-slate-300"
          }`}
        >
          <div className="flex items-start gap-3">
            <div
              className={`flex h-11 w-11 items-center justify-center rounded-2xl ${
                step === 2 ? "bg-indigo-600 text-white" : "bg-slate-200 text-slate-500"
              }`}
            >
              <FileSearch className="h-5 w-5" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <p className="font-semibold text-slate-900">Job Description</p>
                <Badge variant="secondary" className="rounded-full">
                  Step 2
                </Badge>
              </div>
              <p className="mt-1 text-sm text-slate-500">
                Paste the target role for keyword matching
              </p>
            </div>
          </div>
        </button>
      </div>
    </div>
  )
}

export default StepSwitcher
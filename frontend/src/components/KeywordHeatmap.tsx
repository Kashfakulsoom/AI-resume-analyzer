import { Badge } from "@/components/ui/badge"
import { CheckCircle2, SearchX } from "lucide-react"

type Props = {
  matchedKeywords: string[]
  missingKeywords: string[]
}

const KeywordHeatmap = ({ matchedKeywords, missingKeywords }: Props) => {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="rounded-3xl border border-green-200 bg-green-50 p-6">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white shadow-sm">
            <CheckCircle2 className="h-5 w-5 text-green-600" />
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">Matched Keywords</h3>
            <p className="text-sm text-slate-500">
              Keywords already present in your resume
            </p>
          </div>
        </div>

        <div className="mb-4">
          <Badge className="rounded-full bg-green-100 px-3 py-1 text-green-700 hover:bg-green-100">
            {matchedKeywords.length} matched
          </Badge>
        </div>

        <div className="flex flex-wrap gap-2">
          {matchedKeywords.length > 0 ? (
            matchedKeywords.map((word, index) => (
              <span
                key={index}
                className="rounded-full border border-green-200 bg-white px-3 py-1.5 text-sm font-medium text-green-700 shadow-sm"
              >
                {word}
              </span>
            ))
          ) : (
            <p className="text-sm text-slate-500">
              No matched keywords found yet.
            </p>
          )}
        </div>
      </div>

      <div className="rounded-3xl border border-red-200 bg-red-50 p-6">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white shadow-sm">
            <SearchX className="h-5 w-5 text-red-600" />
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">Missing Keywords</h3>
            <p className="text-sm text-slate-500">
              Important terms missing from your resume
            </p>
          </div>
        </div>

        <div className="mb-4">
          <Badge className="rounded-full bg-red-100 px-3 py-1 text-red-700 hover:bg-red-100">
            {missingKeywords.length} missing
          </Badge>
        </div>

        <div className="flex flex-wrap gap-2">
          {missingKeywords.length > 0 ? (
            missingKeywords.map((word, index) => (
              <span
                key={index}
                className="rounded-full border border-red-200 bg-white px-3 py-1.5 text-sm font-medium text-red-700 shadow-sm"
              >
                {word}
              </span>
            ))
          ) : (
            <p className="text-sm text-slate-500">
              No missing keywords detected.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default KeywordHeatmap
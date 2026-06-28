import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Badge } from "@/components/ui/badge"
import { Sparkles, FileSearch, Target, CheckCircle2 } from "lucide-react"

const AnalysisLoader = () => {
  return (
    <div className="mt-10 w-full px-6">
      <div className="mx-auto max-w-6xl">
        <Card className="rounded-3xl border-0 shadow-md">
          <CardContent className="p-6 md:p-8">
            <div className="flex flex-col gap-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <Badge variant="secondary" className="rounded-full px-3 py-1">
                    AI Analysis in Progress
                  </Badge>
                  <h2 className="mt-3 text-2xl font-bold text-slate-900">
                    Analyzing your resume against the job description
                  </h2>
                  <p className="mt-2 text-sm text-slate-500">
                    We’re checking ATS compatibility, keyword relevance, structure,
                    and writing quality.
                  </p>
                </div>

                <div className="hidden rounded-2xl bg-indigo-50 p-4 text-indigo-600 md:block">
                  <Sparkles className="h-8 w-8 animate-pulse" />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border bg-slate-50 p-4">
                  <div className="mb-3 flex items-center gap-2 text-slate-700">
                    <FileSearch className="h-4 w-4 text-indigo-600" />
                    <span className="text-sm font-medium">Reading resume</span>
                  </div>
                  <Skeleton className="h-4 w-full rounded-full" />
                  <Skeleton className="mt-2 h-4 w-4/5 rounded-full" />
                </div>

                <div className="rounded-2xl border bg-slate-50 p-4">
                  <div className="mb-3 flex items-center gap-2 text-slate-700">
                    <Target className="h-4 w-4 text-indigo-600" />
                    <span className="text-sm font-medium">Matching keywords</span>
                  </div>
                  <Skeleton className="h-4 w-full rounded-full" />
                  <Skeleton className="mt-2 h-4 w-3/4 rounded-full" />
                </div>

                <div className="rounded-2xl border bg-slate-50 p-4">
                  <div className="mb-3 flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="h-4 w-4 text-indigo-600" />
                    <span className="text-sm font-medium">Generating feedback</span>
                  </div>
                  <Skeleton className="h-4 w-full rounded-full" />
                  <Skeleton className="mt-2 h-4 w-2/3 rounded-full" />
                </div>
              </div>

              <div className="grid gap-6 lg:grid-cols-3">
                <Card className="rounded-3xl border shadow-sm">
                  <CardContent className="p-6">
                    <Skeleton className="mx-auto h-32 w-32 rounded-full" />
                    <Skeleton className="mx-auto mt-4 h-4 w-24" />
                    <Skeleton className="mx-auto mt-2 h-4 w-32" />
                  </CardContent>
                </Card>

                <Card className="lg:col-span-2 rounded-3xl border shadow-sm">
                  <CardContent className="p-6">
                    <Skeleton className="h-5 w-40" />
                    <Skeleton className="mt-4 h-4 w-full" />
                    <Skeleton className="mt-2 h-4 w-full" />
                    <Skeleton className="mt-2 h-4 w-5/6" />

                    <div className="mt-6 grid gap-4 md:grid-cols-2">
                      <Skeleton className="h-28 rounded-2xl" />
                      <Skeleton className="h-28 rounded-2xl" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default AnalysisLoader
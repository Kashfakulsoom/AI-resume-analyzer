import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  FileText,
  FileDown,
  Mail,
  Sparkles,
  CheckCircle2,
  LoaderCircle,
} from "lucide-react"

interface Props {
  generateResumeDocs: () => void
  generateResumePdf: () => void
  generatingResume: boolean
  sendResumeEmail: () => void
}

const OptimizeStep = ({
  generateResumeDocs,
  generateResumePdf,
  generatingResume,
  sendResumeEmail,
}: Props) => {
  return (
    <div className="w-full px-6 pb-12">
      <div className="mx-auto max-w-5xl">
        <Card className="rounded-3xl border-0 shadow-md">
          <CardContent className="p-6 md:p-8">
            <div className="mb-8 flex flex-col gap-3">
              <Badge variant="secondary" className="w-fit rounded-full px-3 py-1">
                Final Step
              </Badge>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600">
                  <Sparkles className="h-6 w-6" />
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    Generate Your ATS-Optimized Resume
                  </h2>
                  <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-500">
                    Create an improved version of your resume based on ATS feedback,
                    keyword gaps, and AI suggestions. Download it as DOCX or PDF,
                    or send it to your email.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-sm">
                  <FileText className="h-5 w-5 text-indigo-600" />
                </div>

                <h3 className="text-lg font-semibold text-slate-900">DOCX Resume</h3>
                <p className="mt-1 text-sm text-slate-500">
                  Best for editing later in Word or Google Docs.
                </p>

                <Button
                  onClick={generateResumeDocs}
                  disabled={generatingResume}
                  className="mt-5 w-full rounded-xl bg-indigo-600 hover:bg-indigo-700"
                >
                  <FileDown className="mr-2 h-4 w-4" />
                  Download DOCX
                </Button>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-sm">
                  <FileDown className="h-5 w-5 text-indigo-600" />
                </div>

                <h3 className="text-lg font-semibold text-slate-900">PDF Resume</h3>
                <p className="mt-1 text-sm text-slate-500">
                  Best for job applications and fixed formatting.
                </p>

                <Button
                  onClick={generateResumePdf}
                  disabled={generatingResume}
                  className="mt-5 w-full rounded-xl bg-indigo-600 hover:bg-indigo-700"
                >
                  <FileDown className="mr-2 h-4 w-4" />
                  Download PDF
                </Button>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-sm">
                  <Mail className="h-5 w-5 text-indigo-600" />
                </div>

                <h3 className="text-lg font-semibold text-slate-900">Send to Email</h3>
                <p className="mt-1 text-sm text-slate-500">
                  Email the optimized resume directly to yourself.
                </p>

                <Button
                  onClick={sendResumeEmail}
                  disabled={generatingResume}
                  variant="outline"
                  className="mt-5 w-full rounded-xl border-slate-300"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Email Resume
                </Button>
              </div>
            </div>

            {generatingResume && (
              <div className="mt-8 rounded-3xl border border-indigo-200 bg-indigo-50 p-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-sm">
                    <LoaderCircle className="h-5 w-5 animate-spin text-indigo-600" />
                  </div>

                  <div className="flex-1">
                    <h4 className="text-base font-semibold text-slate-900">
                      Optimizing your resume with AI
                    </h4>
                    <p className="mt-1 text-sm text-slate-600">
                      We’re rewriting content, improving keyword alignment, and
                      preparing your final export.
                    </p>

                    <div className="mt-4 grid gap-3 md:grid-cols-3">
                      <div className="rounded-2xl border border-indigo-100 bg-white px-4 py-3 text-sm text-slate-700">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-indigo-600" />
                          Parsing current resume
                        </div>
                      </div>

                      <div className="rounded-2xl border border-indigo-100 bg-white px-4 py-3 text-sm text-slate-700">
                        <div className="flex items-center gap-2">
                          <LoaderCircle className="h-4 w-4 animate-spin text-indigo-600" />
                          Applying ATS improvements
                        </div>
                      </div>

                      <div className="rounded-2xl border border-indigo-100 bg-white px-4 py-3 text-sm text-slate-700">
                        <div className="flex items-center gap-2">
                          <Sparkles className="h-4 w-4 text-indigo-600" />
                          Preparing export file
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-indigo-100">
                      <div className="h-full w-2/3 animate-pulse rounded-full bg-indigo-600" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default OptimizeStep
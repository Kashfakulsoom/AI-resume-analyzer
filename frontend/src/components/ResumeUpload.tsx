import { useCallback, useState } from "react"
import Dropzone from "react-dropzone"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { UploadCloud, FileText, CheckCircle2 } from "lucide-react"

interface ResumeUploadProps {
  setFile: (file: File | null) => void
}

const ResumeUpload = ({ setFile }: ResumeUploadProps) => {
  const [localFile, setLocalFile] = useState<File | null>(null)

  const handleDrop = useCallback(
    (acceptedFiles: File[]) => {
      const uploadedFile = acceptedFiles[0]
      if (!uploadedFile) return

      setFile(uploadedFile)
      setLocalFile(uploadedFile)
    },
    [setFile]
  )

  return (
    <Card className="mx-auto w-full max-w-4xl rounded-3xl border shadow-sm">
      <CardContent className="p-6 md:p-8">
        <div className="mb-6 flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600">
            <UploadCloud className="h-6 w-6" />
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              Upload Your Resume
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Drag and drop your file or click to browse. Supported formats are PDF and DOCX.
            </p>
          </div>
        </div>

        <Dropzone
          onDrop={handleDrop}
          accept={{
            "application/pdf": [],
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [],
          }}
          multiple={false}
        >
          {({ getRootProps, getInputProps, isDragActive }) => (
            <div
              {...getRootProps()}
              className={`flex min-h-[260px] w-full cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed px-6 py-10 text-center transition-all ${
                isDragActive
                  ? "border-indigo-500 bg-indigo-50"
                  : "border-slate-200 bg-slate-50 hover:border-indigo-400 hover:bg-slate-100"
              }`}
            >
              <input {...getInputProps()} />

              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm">
                <UploadCloud className="h-8 w-8 text-indigo-600" />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-slate-800">
                Drag & drop your resume here
              </h3>

              <p className="mt-2 max-w-md text-sm text-slate-500">
                Upload your latest resume to get ATS score, keyword insights, and AI suggestions.
              </p>

              <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                <Badge variant="outline" className="rounded-full">
                  PDF
                </Badge>
                <Badge variant="outline" className="rounded-full">
                  DOCX
                </Badge>
                <Badge variant="outline" className="rounded-full">
                  ATS Ready
                </Badge>
              </div>

              <p className="mt-5 text-sm font-medium text-indigo-600">
                or click to browse files
              </p>

              {localFile && (
                <div className="mt-6 flex items-center gap-3 rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-left">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="text-sm font-semibold text-green-700">
                      Resume uploaded successfully
                    </p>
                    <div className="mt-1 flex items-center gap-2 text-sm text-green-600">
                      <FileText className="h-4 w-4" />
                      <span>{localFile.name}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </Dropzone>
      </CardContent>
    </Card>
  )
}

export default ResumeUpload
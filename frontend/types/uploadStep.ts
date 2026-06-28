export interface UploadStepProps {
  setFile: (file: File | null) => void
  jobDescription: string
  setJobDescription: (value: string) => void
  uploadResume: () => void
  loading: boolean
}
import { useState,useEffect } from "react"
import axios from "axios"
import { analyzeResumeWithPuter } from "../../services/putter.services";
import type { Feedback } from "../../types/feedback"
import { extractJobKeywords } from "../../services/keywordExtractor"
import { matchKeywords } from "../../services/keywordMatcher"
import { generateOptimizedResume } from "../../services/generateResume"
import { exportResumeDOCX } from "../../services/resumeExporter"
import { exportResumePDF } from "../../services/pdfExporter"
import UploadStep from "../steps/UploadStep"
import AnalysisStep from "../steps/AnalysisStep";
import OptimizeStep from "../steps/OptimizeStep";
import { supabase } from "../lib/supabase"
import type { User } from "@supabase/supabase-js"
import AnalysisLoader from "../components/AnalysisLoader"
import WorkflowStepper from "../components/WorkflowStepper"



interface HomeProps {
  user: User | null
  setUser: React.Dispatch<React.SetStateAction<User | null>>
}

const Home = ({ user,setUser }: HomeProps) => {
  
  const [file, setFile] = useState<File | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [feedback, setFeedback] = useState<Feedback | null>(null)
  const [jobDescription, setJobDescription] = useState("")
  const [matchedKeywords,setMatchedKeywords]=useState<string[]>([]);
  const [missingKeywords,setMissingKeywords]=useState<string[]>([]);
  const [resumeText, setResumeText] = useState("")
  const [generatingResume, setGeneratingResume] = useState(false)
  const [step, setStep] = useState<number>(1)
  const canGoToUpload = true
  const canGoToAnalysis = !!feedback
  const canGoToOptimize = !!feedback


  useEffect(() => {

  supabase.auth.getUser().then(({ data }) => {
    setUser(data.user)
  })

  const { data: listener } = supabase.auth.onAuthStateChange(
    (_, session) => {
      setUser(session?.user ?? null)
    }
  )
console.log("User:", user);
  return () => listener.subscription.unsubscribe()

}, [setUser, user])

  const uploadResume = async () => {

    if (!file) return

    setLoading(true)

    try {

      const formData = new FormData()

      formData.append("resume", file)
      formData.append("jobDescription", jobDescription)

      const response = await axios.post(
        "http://localhost:5001/api/resume/analyze",
        formData
      )
      const extractedText=response.data.resumeText
      setResumeText(extractedText)

      console.log("Resume text extracted")

      const keywords = await extractJobKeywords(jobDescription)

      const keywordResult = matchKeywords(extractedText, keywords);
      setMatchedKeywords(keywordResult.matched)
      setMissingKeywords(keywordResult.missing)

      const matched = keywordResult.matched
      const missing = keywordResult.missing

      const totalKeywords = matched.length + missing.length

      const keywordScore =totalKeywords === 0? 0: Math.round((matched.length / totalKeywords) * 100);

      console.log("keywordScore "+keywordScore)
      
      const result = await analyzeResumeWithPuter(
        extractedText,
        jobDescription,matched,missing,keywordScore
      )

      setFeedback(result)
      setStep(2);
      console.log("AI result:", result)
    } catch (error) {

      console.error(error)

    } finally {

      setLoading(false)

    }

  }

  const generateResumeDocs = async () => {
  
  
    if (!user) {
    alert("Please sign in first");
    return;
    }

    if (!resumeText || !feedback) {
    alert("Analyze resume first");
    return;
    }

    setGeneratingResume(true);
    try {

      const optimizedResume = await generateOptimizedResume(
        resumeText,
        jobDescription,
        missingKeywords,
        feedback
      )
      if (!optimizedResume) {
      alert("Failed to generate optimized resume")
      return
    }

      console.log("Optimized Resume:", optimizedResume)
      await exportResumeDOCX(optimizedResume)
    } catch (error) {

      console.error("Resume generation failed:", error)

    }finally{
      setGeneratingResume(false);
    }
  }

const generateResumePdf = async () => {
  
  if (!user) {
    alert("Please sign in first");
    return;
  }

  if (!resumeText || !feedback) {
    alert("Analyze resume first")
    return
  }
  setGeneratingResume(true)
  try {

    const optimizedResume = await generateOptimizedResume(
      resumeText,
      jobDescription,
      missingKeywords,
      feedback
    )
    if (!optimizedResume) {
      alert("Failed to generate optimized resume")
      return
    }
    console.log("Optimized Resume:", optimizedResume)
    await exportResumePDF(optimizedResume)
  } catch (error) {

    console.error("Resume generation failed:", error)

  }finally{
    setGeneratingResume(false)
  }
}

const sendResumeEmail = async () => {

  if (!user) {
    alert("Please sign in first")
    return
  }

  const optimizedResume = await generateOptimizedResume(
    resumeText,
    jobDescription,
    missingKeywords,
    feedback!
  )

  await axios.post("http://localhost:5001/api/resume/email", {
    email: user.email,
    resume: optimizedResume
  })

  alert("Resume sent to your email!")
}

const handleStepChange = (targetStep: number) => {
  if (targetStep === 1 && canGoToUpload) {
    setStep(1)
    return
  }

  if (targetStep === 2 && canGoToAnalysis) {
    setStep(2)
    return
  }

  if (targetStep === 3 && canGoToOptimize) {
    setStep(3)
  }
}

  return (
    <div className="pt-24 min-h-screen w-full flex flex-col gap-1 m-auto bg-gray-50">
      

      <WorkflowStepper
        step={step}
        canGoToAnalysis={canGoToAnalysis}
        canGoToOptimize={canGoToOptimize}
        onStepChange={handleStepChange}
      />
      {step === 1 && !loading && (
        <UploadStep
          setFile={setFile}
          jobDescription={jobDescription}
          setJobDescription={setJobDescription}
          uploadResume={uploadResume}
          loading={loading}
        />
      )}

      {step === 1 && loading && <AnalysisLoader />}

      {step === 2 && feedback && (
        <AnalysisStep
          feedback={feedback}
          matchedKeywords={matchedKeywords}
          missingKeywords={missingKeywords}
          setStep={setStep}
        />
      )}

      {step === 3 && (
        <OptimizeStep
          generateResumeDocs={generateResumeDocs}
          generateResumePdf={generateResumePdf}
          generatingResume={generatingResume}
          sendResumeEmail={sendResumeEmail}
        />
      )}
    </div>
  );

}

export default Home
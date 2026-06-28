import { Sparkles, FileText, Target } from "lucide-react"
import heroImage from "../assets/heroImage.svg"

const HeroComponent = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-slate-50 to-white py-28">
      
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-12 px-6">

        {/* LEFT SIDE */}
        <div className="max-w-xl space-y-6">

          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-1 text-sm font-medium text-indigo-600">
            <Sparkles className="h-4 w-4" />
            AI Resume Analyzer
          </div>

          <h1 className="text-5xl font-bold leading-tight text-slate-900">
            Improve Your Resume with{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-sky-500 bg-clip-text text-transparent">
              AI
            </span>
          </h1>

          <p className="text-lg leading-relaxed text-slate-600">
            Upload your resume and instantly receive an ATS score, missing
            keyword insights, and actionable improvements to increase your
            chances of landing interviews.
          </p>

          

          <div className="flex flex-wrap gap-4 pt-2 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <FileText className="h-4 w-4 text-indigo-600" />
              ATS Score
            </div>

            <div className="flex items-center gap-2">
              <Target className="h-4 w-4 text-indigo-600" />
              Keyword Matching
            </div>

            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-indigo-600" />
              AI Suggestions
            </div>
          </div>

          

          <div className="pt-4">
            <a href="#drop">
              <button className="rounded-xl bg-indigo-600 px-6 py-3 text-white font-medium shadow-md transition hover:bg-indigo-700 hover:shadow-lg active:scale-95">
                Scan Your Resume
              </button>
            </a>
          </div>

        </div>

        

        <div className="relative flex w-max justify-center">

          <div className="absolute inset-0 -z-10 rounded-3xl bg-indigo-100 blur-3xl opacity-40"></div>

          <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-lg">
            <img
              src={heroImage}
              alt="hero"
              className="max-w-md w-full object-contain"
            />
          </div>

        </div>

      </div>

    </section>
  )
}

export default HeroComponent
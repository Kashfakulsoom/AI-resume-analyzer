interface Props {
  score: number
}

const ScoreCircle = ({ score }: Props) => {
  const getTone = () => {
    if (score >= 80) {
      return {
        text: "text-green-600",
        soft: "bg-green-50",
        stroke: "#16a34a",
        label: "Strong Match",
        desc: "Your resume aligns well with ATS expectations.",
      }
    }

    if (score >= 65) {
      return {
        text: "text-yellow-600",
        soft: "bg-yellow-50",
        stroke: "#ca8a04",
        label: "Moderate Match",
        desc: "Good foundation, but there is room to improve keyword alignment.",
      }
    }

    return {
      text: "text-red-600",
      soft: "bg-red-50",
      stroke: "#dc2626",
      label: "Needs Work",
      desc: "Your resume may struggle to pass ATS filters for this role.",
    }
  }

  const tone = getTone()
  const radius = 52
  const circumference = 2 * Math.PI * radius
  const progress = circumference - (score / 100) * circumference

  return (
    <div className="flex flex-col items-center gap-4">
      <div className={`relative flex h-36 w-36 items-center justify-center rounded-full ${tone.soft}`}>
        <svg className="absolute h-36 w-36 -rotate-90" viewBox="0 0 120 120">
          <circle
            cx="60"
            cy="60"
            r={radius}
            stroke="#e5e7eb"
            strokeWidth="10"
            fill="none"
          />
          <circle
            cx="60"
            cy="60"
            r={radius}
            stroke={tone.stroke}
            strokeWidth="10"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={progress}
          />
        </svg>

        <div className="z-10 flex flex-col items-center">
          <span className={`text-3xl font-bold ${tone.text}`}>{score}</span>
          <span className="text-xs font-medium text-slate-500">ATS Score</span>
        </div>
      </div>

      <div className="text-center">
        <p className={`text-sm font-semibold ${tone.text}`}>{tone.label}</p>
        <p className="mt-1 max-w-xs text-sm text-slate-500">{tone.desc}</p>
      </div>
    </div>
  )
}

export default ScoreCircle
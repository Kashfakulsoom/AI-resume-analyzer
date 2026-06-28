import type { ReactNode } from "react"
import type { Section, Tip } from "../../types/feedback"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, AlertTriangle, XCircle } from "lucide-react"

interface Props {
  title: string
  section: Section
}

const tipStyles: Record<
  Tip["type"],
  {
    label: string
    wrapper: string
    badge: string
    icon: ReactNode
  }
> = {
  good: {
    label: "Good",
    wrapper: "border-green-200 bg-green-50",
    badge: "bg-green-100 text-green-700 hover:bg-green-100",
    icon: <CheckCircle2 className="h-4 w-4 text-green-600" />,
  },
  improve: {
    label: "Improve",
    wrapper: "border-yellow-200 bg-yellow-50",
    badge: "bg-yellow-100 text-yellow-700 hover:bg-yellow-100",
    icon: <AlertTriangle className="h-4 w-4 text-yellow-600" />,
  },
  missing: {
    label: "Missing",
    wrapper: "border-red-200 bg-red-50",
    badge: "bg-red-100 text-red-700 hover:bg-red-100",
    icon: <XCircle className="h-4 w-4 text-red-600" />,
  },
}

const FeedbackCard = ({ title, section }: Props) => {
  const scoreTone =
    section.score >= 80
      ? "text-green-600"
      : section.score >= 65
      ? "text-yellow-600"
      : "text-red-600"

  return (
    <Card className="rounded-3xl border shadow-sm transition hover:shadow-md">
      <CardContent className="p-6">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
            <p className="mt-1 text-sm text-slate-500">
              Section-level ATS evaluation and improvement suggestions
            </p>
          </div>

          <span className={`text-2xl font-bold ${scoreTone}`}>
            {section.score}
          </span>
        </div>

        <div className="space-y-4">
          {section.tips.map((tip, index) => {
            const style = tipStyles[tip.type]

            return (
              <div
                key={index}
                className={`rounded-2xl border p-4 ${style.wrapper}`}
              >
                <div className="mb-3 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    {style.icon}
                    <span className="text-sm font-semibold text-slate-800">
                      {style.label}
                    </span>
                  </div>

                  <Badge className={`rounded-full px-3 py-1 ${style.badge}`}>
                    {style.label}
                  </Badge>
                </div>

                <p className="font-medium text-slate-800">{tip.tip}</p>

                {tip.explanation && (
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {tip.explanation}
                  </p>
                )}
              </div>
            )
          })}

          {section.tips.length === 0 && (
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-500">
              No detailed suggestions available for this section.
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default FeedbackCard
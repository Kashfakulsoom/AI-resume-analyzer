import {
  Document,
  Packer,
  Paragraph,
  TextRun
} from "docx"
import { saveAs } from "file-saver"

export const exportResumeDOCX = async (resumeText: string) => {

  const lines = resumeText.split("\n")

  const paragraphs = lines.map(line => {

    const text = line.trim()

    if (!text) {
      return new Paragraph({ text: "" })
    }

    const isHeading =
      text === text.toUpperCase() ||
      [
        "PROFESSIONAL SUMMARY",
        "SKILLS",
        "PROFESSIONAL EXPERIENCE",
        "PROJECTS",
        "EDUCATION"
      ].includes(text.toUpperCase())

    if (isHeading) {
      return new Paragraph({
        spacing: { before: 200, after: 100 },
        children: [
          new TextRun({
            text,
            bold: true,
            size: 28,
            font: "Calibri"
          })
        ]
      })
    }

    if (text.startsWith("-")) {
      return new Paragraph({
        bullet: { level: 0 },
        children: [
          new TextRun({
            text: text.replace("-", "").trim(),
            size: 22,
            font: "Calibri"
          })
        ]
      })
    }

    return new Paragraph({
      spacing: { after: 80 },
      children: [
        new TextRun({
          text,
          size: 22,
          font: "Calibri"
        })
      ]
    })

  })

  const doc = new Document({
    sections: [{
      children: paragraphs
    }]
  })

  const blob = await Packer.toBlob(doc)

  saveAs(blob, "ATS_Optimized_Resume.docx")

}
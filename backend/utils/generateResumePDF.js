const { jsPDF } = require("jspdf")

const generateResumePDF = (resume) => {

  const doc = new jsPDF({
    unit: "pt",
    format: "letter"
  })

  doc.setFont("Helvetica")

  const margin = 50
  const pageWidth = doc.internal.pageSize.getWidth() - margin * 2

  let y = margin

  const lines = resume.split("\n")

  lines.forEach(line => {

    const text = line.trim()

    if (!text) {
      y += 8
      return
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
      doc.setFont("Helvetica", "bold")
      doc.setFontSize(14)
    } else {
      doc.setFont("Helvetica", "normal")
      doc.setFontSize(11)
    }

    const wrapped = doc.splitTextToSize(text, pageWidth)

    wrapped.forEach(w => {

      if (y > doc.internal.pageSize.getHeight() - margin) {
        doc.addPage()
        y = margin
      }

      doc.text(w, margin, y)
      y += 14

    })

    y += 4

  })

  
  return Buffer.from(doc.output("arraybuffer"))

}

module.exports = generateResumePDF
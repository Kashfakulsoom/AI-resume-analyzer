const nodemailer=require('nodemailer')
const generateResumePDF = require("../utils/generateResumePDF")

const sendResumeEmail = async (req, res) => {

  try {
    
  const { email, resume } = req.body
  const pdfBuffer = generateResumePDF(resume)

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  })

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Your ATS Optimized Resume",
    text: "Attached is your optimized resume.",
    attachments: [
      {
        filename: "ATS_Optimized_Resume.pdf",
        content: pdfBuffer,
        encoding: "application/pdf"
      }
    ]
  })

  res.json({ success: true })
  }catch(error){
    console.error(error);
  }
  
}

module.exports={sendResumeEmail}
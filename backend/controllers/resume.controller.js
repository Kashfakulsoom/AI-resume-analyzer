const extractResumeText=require('../services/resume.service')
const calculateATSScore = require("../services/atsAlgorithm.service");

const analyzeResume=async (req,res)=>{
    try {
        if(!req.file){
            res.status(400).json({message:"No file uploaded",})
        }
        
        console.log("MIME TYPE:", req.file.mimetype);
        console.log("FILE NAME:", req.file.originalname);

        const jobDescription = req.body.jobDescription;
        const resumeText = await extractResumeText(
            req.file.buffer,
            req.file.mimetype,
            req.file.originalname
        );
        const atsResult = await calculateATSScore(resumeText, jobDescription);
    
        res.status(200).json({
          resumeText,
          atsResult,
        });

    } catch (error) {
           console.error("ERROR:", error); 
           res.status(500).json({

      message: "Error analyzing resume",

    });

    }
}

module.exports={analyzeResume}
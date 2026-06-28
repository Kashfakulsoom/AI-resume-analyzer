const express=require('express');
const upload=require('../middlewares/upload.middleware');
const {analyzeResume}=require('../controllers/resume.controller')
const {sendResumeEmail}=require('../controllers/sendemail.controller')

const router=express.Router();
router.post('/analyze',upload.single("resume"),analyzeResume);
router.post('/email',sendResumeEmail)

module.exports=router; 


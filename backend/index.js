require("dotenv").config();
const express=require('express');
const resumeRoutes=require('./routes/resume.routes');
const app=express();
const cors=require('cors')

app.get("/",(req,res)=>{
    console.log('server is running at port 5001')
    res.send('server is running at port 5001');
    
})
app.use(cors());
app.use(express.json()); 
app.use('/api/resume',resumeRoutes);


app.listen(5001);
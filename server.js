const express = require("express");
const {sendEmail}=require('./utils/sendEmail')
const app = express();
const PORT = 8000;

app.set('view engine','ejs');
app.use(express.urlencoded({extended:false}));
app.use(express.static("public"));

//get form request
app.get("/",(req, res)=>{
   res.render("index");
});


//post request 
app.post("/send-email",(req, res)=>{
    try {
        //destructuring
    const {email , message} = req.body;
    sendEmail(email,message)
    res.render("index",{
        status:"success",
        message:"email sent successfully"
    })
    } catch (error) {
        console.log(error);
        res.status(500).render("index",{
            status:"error",
            message:"error sending email"
        })
    }
    

});

app.listen(PORT,()=>{
    console.log(`listening at port number ${PORT}`);
});
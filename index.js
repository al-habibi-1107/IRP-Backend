const express = require('express')

const app = express()

app.use(express.json())


app.get("/",(req,res)=>{
    res.send("IRP WORKS")
})

app.post("/api/v1/login",(req,res)=>{
    const bodyVal = req.body
    const email = bodyVal.email
    const password = bodyVal.password

    if(email === "test123@gmail.com" && password === "kamil123"){
        res.status(200).json({'token':"AAtdb22v3j1K1j"})
    }else{

        res.status(300).json({"message":"Wrong Email or Password"})
    }
    
})

app.listen(4000,()=>{
    console.log("Server start at port 4000");
})
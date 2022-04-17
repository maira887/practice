const { response } = require("express")
const express=require("express")
const app=express()
const PORT =3000



app.post("/profile",(req,res) => {

    res.send("profile")
  })
  app.post("/home",(req,res) => {

    res.send("home")
  })
  app.post("/about",(req,res) => {

    res.send("about")
  })


app.listen(PORT,()=>{
    console.log("server is running")
})


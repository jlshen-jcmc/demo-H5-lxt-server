const express = require("express");
const {rizhiMF} = require("./middlewares/sz-rizhiM")
const path = require("path");
const {getCurrentDate,getCurrentTime} = require("./tools/dateTime")
const {notFoundMF} = require("./tools/notFound")
const {handleErrorsMF}=require("./tools/handleErrors")

let app = express();



app.use(express.json(),express.urlencoded({extended:true}));

app.use(rizhiMF(path.resolve(__dirname,`./logs/${getCurrentDate()}.txt`)));

app.get("/",(req,resp)=>{
    abc();
    resp.send("get /");
})

app.get("/course",(req,resp)=>{
    resp.send("get /course")
})

app.use(notFoundMF(path.resolve(__dirname,"./defaultPages/404.html")))

app.use(handleErrorsMF(path.resolve(__dirname,`./errors/${getCurrentDate()}.txt`),path.resolve(__dirname,"./defaultPages/500.html")))

app.listen(3000,()=>{
    console.log("启动正常，localhost:3000")
})
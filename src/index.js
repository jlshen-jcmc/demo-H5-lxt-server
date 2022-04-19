const express = require("express");

const mainRouter = require("./routers/mainRouter");

let app = express();




app.use("/",mainRouter);


app.listen(5000,()=>{
    console.log("后端服务启动成功：localhost:5000")
})

// const express = require("express");
//
// const mainRouter = require("./routers/mainRouter");
//
// let app = express();
//
//
//
//
// app.use("/",mainRouter);
//
//
// app.listen(5000,()=>{
//     console.log("后端服务启动成功：localhost:5000")
// })

const express = require("express");
const {rizhiMF} = require("./middlewares/sz-rizhiM")
const path = require("path");
const {getCurrentDate,getCurrentTime} = require("./tools/dateTime")
const {notFoundMF} = require("./tools/notFound")
const {handleErrorsMF}=require("./tools/handleErrors")
const fs = require("fs")

const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

let app = express();



app.use(express.json(),express.urlencoded({extended:true}));

app.use(rizhiMF(path.resolve(__dirname,`./logs/${getCurrentDate()}.txt`)));

// app.use((req,resp,next)=>{
//
//         let fullPath = path.resolve(__dirname,"public","."+req.path);
//
//         if(fs.existsSync(fullPath)){
//             resp.sendFile(fullPath);
//         }else {
//             next();
//         }
//
//
// })

app.use(express.static(path.resolve(__dirname,"./public")))

app.get("/",(req,resp)=>{
    resp.send("get /");
})

app.get("/course",(req,resp)=>{
    resp.send("get /course")
})

app.post("/register",upload.single('userHeader'),(req,resp,next)=>{
    let file = req.file;

    let oldPath = req.file.path;

    let filename = Date.now() + Math.random(Math.random()*1000) + "";
    let extName = path.extname(req.file.originalname);
    let newPath = `public/userHeaders/${filename}${extName}`;

    fs.renameSync(oldPath,newPath)

    let content = req.body
    console.log(file,content)

    resp.send(200)
})

app.use(notFoundMF(path.resolve(__dirname,"./defaultPages/404.html")))

app.use(handleErrorsMF(path.resolve(__dirname,`./errors/${getCurrentDate()}.txt`),path.resolve(__dirname,"./defaultPages/500.html")))



app.listen(3000,()=>{
    console.log("启动正常，localhost:3000")
})
const fs = require("fs");
const {getCurrentTime}=require("../tools/dateTime")
const path = require("path")

let rizhiMF = function (LogPath){

    if (!path.isAbsolute(LogPath)){
        throw Error("请输入一个绝对路径")
    }

        return (req,resp,next)=>{

        let current= getCurrentTime()
        let method = req.method;
        let path =req.path;
        let params = {};
        if (method.toLowerCase() === "get"){
            params = req.query;
        }else if (method.toLowerCase() === "post"){
            params = req.body;
        }

        let ua = req.headers["user-agent"];

        let result = `
    =========================================================
    请求时间：${current}
    请求路径：${path}
    请求方法：${method}
    请求参数：${JSON.stringify(params)}
    请求客户端：${ua}
    =========================================================
    `;

        console.log(result);

        fs.appendFileSync(LogPath,result)

        next();
    }
}



module.exports = {
    rizhiMF
}
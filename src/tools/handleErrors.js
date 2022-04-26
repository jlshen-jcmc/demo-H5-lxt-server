const {getCurrentTime, getCurrentDate} = require("./dateTime");
const fs = require("fs");
const path = require("path");
const {sendmail}=require("./sendEmail")

let handleErrorsMF = function (errfilePath,responseErrFilePath){

    if (!path.isAbsolute(errfilePath) || !path.isAbsolute(responseErrFilePath)){
        throw Error("请输入一个绝对路径")
    }

    return (err,req,resp,next)=>{
        let err_type = err.name;
        let err_msg = err.message;
        let err_stack = err.stack;

        let err_info = `
    发生时间：${getCurrentTime()}
    错误类型：${err_type}
    错误描述：${err_msg}
    错误堆栈：${err_stack}
    `
        fs.appendFile(errfilePath,err_info,()=>{
            sendmail("28384465@qq.com","错误报告",err_info)
        })

        resp.status(500).sendFile(responseErrFilePath)
    }
}

module.exports = {
    handleErrorsMF
}
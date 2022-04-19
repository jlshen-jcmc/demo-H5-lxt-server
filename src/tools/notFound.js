const path = require("path");

let notFoundMF = function (notFoundFilePath){
    if (!path.isAbsolute(notFoundFilePath)){
        throw Error("请输入一个绝对路径")
    }
    return (req,resp)=>{
        resp.status(404).sendFile(notFoundFilePath)
    }
}

module.exports = {
    notFoundMF
}
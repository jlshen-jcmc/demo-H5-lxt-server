const nodemailer = require("nodemailer")

let transperter = nodemailer.createTransport({
    host:'smtp.qq.com',
    secureConnection:true,
    port:465,
    secure:true,
    auth:{
        user:'28384465@qq.com',
        pass:'javtjfofdonkcacg'
    }
})



let sendmail = function (toUser,title,content){
    //设置邮件内容
    let mailOption = {
        from:'"jlshen"<28384465@qq.com>',
        to:toUser,
        subject:title,
        html:content,
        attachments:[
            {
                filename:'错误报告.txt',
                content
            }
        ]
    }

//邮件发送
    transperter.sendMail(mailOption).then(result=>{
        console.log(`Message:${result.messageId}`);
        console.log(`sent:${result.response}`);
    })
}

module.exports = {
    sendmail
}
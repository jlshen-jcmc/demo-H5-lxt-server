const express = require("express");


let router = express.Router();

router.get("/system_config",(req,resp)=>{
    resp.send({
        test:"suuuess"
    })
})


module.exports = router;
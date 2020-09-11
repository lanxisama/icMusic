module.exports = options => {
    const assert = require('http-assert')
    const jwt = require('jsonwebtoken')
    const Match = require('../models/Match')
  
    return async()=>{
        const res = await Match.find()
        let now = new Date()
        for(let item of res){
            let endTime = item.endDate;
            if(endTime<now){
                //清除文件
                //头像 海报 音乐
            }
        }
        //music poster avatar
        //清理垃圾文件
    }
  }
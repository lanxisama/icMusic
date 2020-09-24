module.exports = options => {
    const assert = require('http-assert')
    const jwt = require('jsonwebtoken')
    const Match = require('../models/Match')
    const merge = require('./merge')
    const fs =require('fs')
    return async()=>{
        const res = await Match.find()
        console.log('res',res)
        for(let item of res){
            let now = new Date().getTime()
            let endTime = new Date(item.endDate).getTime();
            if(endTime<now){
                //清除文件
                //头像 海报 音乐
                await Match.findByIdAndDelete(item._id)
                let fileName = merge(item.music,item.poster,item.judges)
                console.log(fileName)
                for(let file of fileName){
                    fs.unlink('uploads/'+file,function(err){
                        if(err){
                            console.log('文件不存在',err)
                        }
                    })
                }
            }
        }
        //music poster avatar
        //清理垃圾文件
    }
  }
const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name:{type:String},   //比赛名
    introduction:{type:String}, //比赛介绍
    status:{type:Boolean},   //状态 开启 结束 
    startDate:{type:String}, //开始时间
    endDate:{type:String},  //结束时间
    poster:{type:Array}, //海报
    judges:{type:Array}, //评委
    // music:{type:Array}, //歌曲
    // musicName:{type:Array}, //歌曲
    music:[{type:Object}] //歌曲
    
})

module.exports = mongoose.model("Match",schema,'match')
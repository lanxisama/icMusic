module.exports=(app)=>{
    const Match = require('../models/Match')
    const express = require('express')
    const router = express.Router({
        mergeParams:true
    })
    router.post('/dispatch',async(rq,rs)=>{
        const data = Match.insertMany(rq.body)
        rs.send(data)
    })

    app.use('/icMusic/api/rest',router)


    const multer = require('multer')

    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, __dirname +'/../../server/uploads')
        },
        // filename: function (req, file, cb) {
        //   cb(null, file.originalname)
        // }
      })
     
    const upload = multer({storage:storage})


      
    // filename:function(req,file,cb){
    //     cb(null,file.originalname)
    // },
    // fileFilter: function (req, file, cb) {
    //     console.log('---->',file,'<---')
    //     // if (file.mimetype !== 'audio/mp3') {
    //     //   return cb(null, false, new Error('I don\'t have a clue!'));
    //     // }
    //     cb(null, true);
    //   }
    app.post('/icMusic/api/upload',upload.array("files"),async(rq,rs)=>{
        const files = rq.files 
        let urls = []
        for(let f in files){
            urls.push(`http://localhost:3000/uploads/${files[f].filename}`)
        }
        rs.send(urls)
    },router)

}
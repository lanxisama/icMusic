module.exports=(app)=>{
    const Match = require('../models/Match')
    const express = require('express')
    const router = express.Router({
        mergeParams:true
    })

    router.get('/fetchMatch',async(rq,rs)=>{
        const res = await Match.find()
        rs.send(res)
    })

    router.get('/fetchMatch/:id',async(rq,rs)=>{
        const res = await Match.findById(rq.params.id)
        rs.send(res)
    })


    app.use('/icMusic/api/rest',router)
}
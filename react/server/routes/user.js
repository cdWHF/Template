let express = require('express');
let router = express.Router();
let data= require('../mock/data');

router.get('/data',function(req,res){
    data.getMessageList(function(item){
        res.send(item)
    })
    
})
module.exports = router;
const express = require('express');
const app = express();

const mockUserData = [
    {name:mark},
    {name:jill}
]

app.get('/users',function(req,res){
    res.json({
        success:true,
        message:'sucessfully got the data',
        users:mockUserData
    })
})

app.listen(8000,function(){
    console.log('server is running');
    
})
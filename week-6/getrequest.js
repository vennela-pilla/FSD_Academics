const express = require('express');
const app=express();
const PORT=3000;
app.get('/',(req,res)=>{
    res.json({
        message:"Welcome to our API!",
        status:"Active",
         timestamp:new Date()
    });
});
app.get('/students',(req,res)=>{
    const studentList=[
        {id:101,name:"Alice",couse:"Mern stack"},
        {id:102,name:"Bob",course:"Data science"},
        {id:103,name:"Charlie",course:"UI/UX"}
    ];
});
app.get('/product/:id',(req,res)=>{
    const productid=req.params.id;
    res.json({
        requested_id:productid,
        category:"Electronics",
        inStock:true,
        tags:["gadget","new-arrival"]
    });
});
app.listen(PORT,()=>{
    console.log('JSON server is running at http://localhost:${PORT}');
});
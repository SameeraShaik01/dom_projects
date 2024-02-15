var a=require("http");
var b=require("url");
var c=require("fs");
a.createServer((req,res)=>{
    // const urlParse=b.parse(req.url,true);
    // if(urlParse.pathname=='/green'&& req.method=="GET")
    // {
        console.log(req.url)
       c.appendFile("./bye.txt","hello sameera",(err,data)=>{
        if(err){
            res.write(err)
            res.end();
        }else{
            res.write(data);
            res.end();
        }
      
       })
        console.log(urlParse)
       
    }
    // else{
    //     res.write("no response request");
    //     res.end();
    // }
   
    
).listen(3001,()=>{
    console.log("server created")
})


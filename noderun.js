var a=require("http");
var b=require("url");
var c=require("fs");
a.createServer((req,res)=>{
    const urlParse=b.parse(req.url,true);
    if(urlParse.pathname=='/green'&& req.method=="GET")
    {
        console.log(req.url)
       c.readFile("./hi.html",(err,data)=>{
        res.write(data);
        console.log()
        res.end();
       })
        console.log(urlParse)
       
    }
    else{
        res.write("no response request");
        res.end();
    }
   
    
}).listen(3000,()=>{
    console.log("server created")
})
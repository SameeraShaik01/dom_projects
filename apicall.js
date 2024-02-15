

const { default: axios } = require("axios")
let express=require("express")

let app=express()
app.use(express.json())

app.post("/match",async(req,res)=>{
    const id=1
    // console.log(title)

    const rawdata=await axios.get('http://jsonplaceholder.typicode.com/posts/1')

    console.log(rawdata)
    if(id==rawdata.data.id){
        res.send("it is matched")
    }
    else{
        res.send("it is not matched")
    }


})

app.listen(3030,()=>console.log("the port is running"))
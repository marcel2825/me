const express = require('express')
const app = express()
app.get('/', (req, res) => {
    let name = req.query.name
    //let fuck = req.query.wifename
    if (name == "admin"){
        res.send(`welcom fucking admin 
        <p style='color: red'>(if you want page number 3 enter your wife nikname in parametr)<p>`)
        
    }else if(name == "totfarangi"){
        res.send("<h1 style='color: blue'>hi bitch its me <p>../.-../---/...-/./-.--/---/..-</p></h1>")
    }
    res.send("<h1 style='color: red'>welcome</h1>")
  })


app.listen(3000, ()=>{
    console.log("server is runing on port 3000")
})
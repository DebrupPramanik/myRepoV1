const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello. My Name is Spider-Man!!! Nice to meet You!!!')
})

app.listen(4000, ()=>{
    console.log("Started server");
}
)

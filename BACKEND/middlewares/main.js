const express = require('express')
const fs = require('fs')
const blog = require('./routes/blog')
const app = express()
const port = 3000

app.use('/blog', blog)
// app.use(express.static("public"));

// middleware 1
app.use((req, res, next) => {
    console.log("m1")
    fs.appendFileSync("pradip2.txt", `${Date.now()} is a ${req.method}\n`)
    req.pradip = "i am pradip"
    // res.send("hacked by middleware 1");
    next()
  })

  // middleware 2
  app.use((req, res, next) => {
    console.log("m2")
    next()
  })

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/about', (req, res) => {
    res.send(`Hello World!` + req.pradip)
})
app.get('/contact', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
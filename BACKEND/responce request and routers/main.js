const express = require('express')
const blog = require('./routes/blog')
const app = express()
const port = 3000
app.use(express.static("public"));
app.use('/blog', blog)

app.get('/', (req, res) => {
    console.log("hay is this request is get")
    res.send('Hello World!2')
})

app.post('/', (req, res) => {
    console.log("hay is this request is get")
    res.send('Hello World!3')
})

app.get('/index', (req, res) => {
    console.log("hay is this request is index")
    res.sendFile('templates/index.html', {root:__dirname})
})

app.get('/api', (req, res) => {
res.json({a:1,b:2});
})
app.put('/', (req, res) => {
    console.log("hay is this request is put")
    res.send('Hello World! put')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
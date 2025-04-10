const express = require('express')
const mongoose = require('mongoose');
const Employee = require('./models/employee.js')
const app = express()
const port = 3000

app.set('view engine', 'ejs');
mongoose.connect('mongodb://127.0.0.1:27017/company');
const GETrn = (arr)=>{
    let rno = Math.floor(Math.random()*(arr.length - 1))
    return arr[rno];
} 

app.get('/', (req, res) => {
    res.render('index', { foo: 'FOO' })
})

app.get('/generate', async (req, res) => {
    await Employee.deleteMany({});
    let rN = ['pradip', 'rohit', 'kishan']
    let rL = ['js', 'python', 'c++']
    let rC = ['keshod', 'junagadh','jetpur']
    for (let index = 0; index < 10; index++) {
        let e = await Employee.create({
            name: GETrn(rN),
            salary:Math.floor(Math.random()*22000) ,
            language: GETrn(rL),
            city: GETrn(rC),
            isManager: (Math.random()>0.5)?true:false
        })
    }
    let sitename = "adidas";

    res.render('index', { sitename: sitename })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
const express = require('express')
const app = express()
const port = 5500
app.use(express.static('public'));

// app.get('/pradip', (req, res) => {
//   res.send('Hello pradip')
// })
// app.get('/rohit', (req, res) => {
//     res.send('Hello rohit')
//   })

// slug parameter

app.get('/pradip/:slug', (req, res) => {
       res.send(`Hello ${req.params.slug}`)
     })

 // query add on url by using ? mark   
 //examole /pradip/home?mode=dark&region=in   

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let sitename = "Adidas"
    let searchtext = "Search now"
    let arr = ["pradip", 56, 57]
  res.render('index',{sitename: sitename, searchtext: searchtext, arr })
})

app.get('/blog/:slug', (req, res) => {
    let blogtitle = "Adidas why"
    let blogcontent = "good brand"
  res.render('blogpost',{blogtitle: blogtitle, blogcontent: blogcontent})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
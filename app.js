const { urlencoded } = require('body-parser')
const express = require('express')
const app = express()
const port = 3000
const staticDir = __dirname + "\\static\\"

app.use(express.static(__dirname + "\\static\\"))
app.use(express.urlencoded())
app.use(express.json())


app.get('/', (req, res) => res.sendFile(staticDir + "html\\main.html"))
app.get('/menu', (req, res) => res.sendFile(staticDir + "html\\menu.html"))
app.get('/book', (req, res) => res.sendFile(staticDir + "html\\booking.html"))



app.post('/book', function (req, res){
    console.log(req.body.fname)
    console.log(req.body.date)

    res.redirect("/")
})














app.listen(port, () => console.log(`Example app listening on port ${port}!`))
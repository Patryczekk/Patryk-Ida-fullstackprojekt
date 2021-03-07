const express = require('express')
const databaseModule = require('2/databaseModule')
const orderModel = require('2/orderModule')

const app = express()
const port = 3000
const clientDir = __dirname + "\\client\\"

app.use(express.json())
app.use(express.urlencoded())
app.use(express.static(clientDir))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render("2/index.ejs", { name: "" })
});

app.post('/', (req, res) => {
  let order = orderModel.newOrder(req.body.date, req.body.note)
  databaseModule.storeElement(order)

  res.render("2/index.ejs", { Order: " " + req.body.order })
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
const express = require('express')
const products = require('./data/products')

const app = express()

app.get('/', (req, res) => {
  res.send('API IS RUNNING')
})

app.get('/api/products', (req, res) => {
  res.json(products)
})
app.get('/api/products/:id', (req, res) => {
  //we need to access :id so req.params.id does this. careful for :id and id  need to match
  const product = product.find((p) => p._id === req.params.id)
  res.json(products)
})
app.listen(5000)

const express = require("express")
const products = require("./data/products")

// initialize express
const app = express()

// routes
app.get("/", (req, res) => {
  res.send("API is running...")
})

// --- get all products
app.get("/api/products", (req, res) => {
  res.json(products)
})

// --- get a single product by its id
app.get("/api/products/:id", (req, res) => {
  const product = products.find(p => p._id === req.params.id)
  res.json(product)
})

app.listen(5000, console.log("Server running on port 5000"))

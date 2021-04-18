import express from "express"
import dotenv from "dotenv"
import products from "./data/products.js"

dotenv.config()

// initialize express
const app = express()

// ### API Routes ###
app.get("/", (req, res) => {
  res.send("API is running....")
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

// PORT Settings
const MODE = process.env.NODE_ENV
const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(`Server is running in ${MODE} mode on port ${PORT}`)
)

import express from "express"
import dotenv from "dotenv"
import color from "colors"
import connectDB from "./config/db.js"

// product routes
import productRoutes from "./routes/productRoutes.js"

// get environment variables
dotenv.config()

// connect to database
connectDB()

// initialize express
const app = express()

// ### API Routes ###
app.get("/", (req, res) => {
  res.send("API is running....")
})

app.use("/api/products", productRoutes)

// PORT Settings
const MODE = process.env.NODE_ENV
const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(`Server is running in ${MODE} mode on port ${PORT}`.yellow)
)

import express from "express"
import dotenv from "dotenv"
import color from "colors"
import { notFound, errorHandler } from "./middleware/errorMiddleware.js"
import connectDB from "./config/db.js"

// routes
import productRoutes from "./routes/productRoutes.js"
import userRoutes from "./routes/userRoutes.js"

// get environment variables
dotenv.config()

// connect to database
connectDB()

// initialize express
const app = express()

app.use(express.json())

// ### API Routes ###
app.get("/", (req, res) => {
  res.send("API is running....")
})

app.use("/api/products", productRoutes)
app.use("/api/users", userRoutes)

// fallback for 404 - Not Found
app.use(notFound)

// error middleware
app.use(errorHandler)

// PORT Settings
const MODE = process.env.NODE_ENV
const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(`Server is running in ${MODE} mode on port ${PORT}`.yellow)
)

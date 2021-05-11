import path from "path"
import express from "express"
import dotenv from "dotenv"
import color from "colors"
import morgan from "morgan"
import { notFound, errorHandler } from "./middleware/errorMiddleware.js"
import connectDB from "./config/db.js"

// routes
import productRoutes from "./routes/productRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import orderRoutes from "./routes/orderRoutes.js"
import uploadRoutes from "./routes/uploadRoutes.js"

// get environment variables
dotenv.config()

// connect to database
connectDB()

// initialize express
const app = express()

// morgan - runs in development only
if (process.env.NODE_ENV === "Development") {
  app.use(morgan("dev"))
}

app.use(express.json())

// ### API Routes ###
app.get("/", (req, res) => {
  res.send("API is running....")
})

app.use("/api/products", productRoutes)
app.use("/api/users", userRoutes)
app.use("/api/orders", orderRoutes)
app.use("/api/upload", uploadRoutes)

app.get("/api/config/paypal", (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
)

// making the uploads folder static
const __dirname = path.resolve()
app.use("/uploads", express.static(path.join(__dirname, "/uploads")))

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

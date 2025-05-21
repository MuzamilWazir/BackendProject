import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";
connectDB()

dotenv.config({
    path:"./env"
})

const App = express()

const PORT = process.env.PORT
App.listen(PORT, () => {
    console.log(`Conneted At PORT : http://localhost:${PORT}`);
    
} )
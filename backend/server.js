import express from "express";
import authRoutes from "./routes/authRoutes.js";
import dotenv from "dotenv";

const app=express();
dotenv.config();
const PORT =process.env.PORT || 5000;


app.get("/",(req,res) => {
    res.send("hello world");
})

app.use("/api/auth",authRoutes)

app.listen(PORT,() => console.log('server rinning on port'+PORT));

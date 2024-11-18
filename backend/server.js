import express from 'express';
import cors from "cors";
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors())

app.get("/products", (req,res) => {
    res.send("Server is maybe ready");
});

app.listen(PORT, ()=>{
    console.log(`Server started at http://localhost:${PORT}`);
});
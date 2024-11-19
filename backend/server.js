import express from 'express';
import cors from "cors";
import dotenv from "dotenv"
import { connectDB } from './config/db.js';
import Product from "./models/Products.js"


dotenv.config()

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors())

app.post("/api/products", async (req, res) => {
    const product = req.body;

    if (!product.name || !product.price || !product.image){
        return res.status(400).json({success:false, message: "Please provide all fields"});
    }

    const newProduct = await Product(product)

    try {
        await newProduct.save()
        res.status(201).json({success: true, data: newProduct})
    } catch (error){
        console.log(`Error in creating product: ${error.message}`)
        res.status(500).json({success: false, message: "Server Error"})
    }
});

app.listen(PORT, ()=>{
    connectDB();
    console.log(`Server started at http://localhost:${PORT}`);
});
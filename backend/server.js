import express from 'express';
import cors from "cors";
import dotenv from "dotenv"
import { connectDB } from './config/db.js';
import Product from "./models/Products.js"


dotenv.config()

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors())

app.use(express.json()) //Allows JSON data in the req.body

app.post("/api/products", async (req, res) => {
    const product = req.body;

    if (!product.name || !product.price || !product.image || !product.jewelryType || !product.material || !product.stock || !product.gender){
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

app.delete("/api/products/:id", async (req, res) => {
    const {id} = req.params
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({success: true, message: `Product ${id} deleted`})
    } catch (error){
        console.log(`Error in Deleting product: ${error.message}`)
        res.status(404).json({success:false, message: "Product not found"})
    }
})

app.listen(PORT, ()=>{
    connectDB();
    console.log(`Server started at http://localhost:${PORT}`);
});
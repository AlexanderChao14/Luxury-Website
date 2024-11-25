import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        reuqired: true
    },
    image: {
        type: String,
        required: true
    },
    jewelryType: {
        type: String,
        required: true
    },
    material: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    gemType: {
        type: String,
        required: false
    },
    ringSize: {
        type: Number,
        required: false
    },
    karat: {
        type: Number,
        required: false
    },
    gender:{
        type: String,
        reuqired: true
    }


}, {
    timestamps: true
});

const Product = mongoose.model('Product', productSchema);

export default Product;
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    id:String,
    title: String,
    short_title: String,
    description:String,
    price:Object,
    discountPercentage:String,
    rating: String,
    stock: String,
    count: String,
    brand: String,
    category: String,
    thumbnail: String,
    imagesURL:  String
});

const Products = new mongoose.model("products",productSchema);

module.exports = Products;


                   
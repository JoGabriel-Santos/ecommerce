import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name: String,
    description: String,
    image: String,
    rating: {
        type: Number,
        default: 0,
    },
    price: {
        type: Number,
        default: 0,
    },
});

let ProductMessage = mongoose.model("ProductMessage", productSchema);

export default ProductMessage;

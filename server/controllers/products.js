import express from "express";
import mongoose from "mongoose";

import ProductMessage from "../models/productMessage.js";

const router = express.Router();

export const getProducts = async (request, response) => {
    try {
        const productMessage = await ProductMessage.find();
        response.status(200).json(productMessage);
    } catch (error) {
        response.status(404).json({ message: error });
    }
};

export const getProduct = async (request, response) => {
    const { id } = request.params;

    try {
        const product = await ProductMessage.findById(id);
        response.status(200).json(product);
    } catch (error) {
        response.status(404).json({ message: error });
    }
};

export const createProduct = async (request, response) => {
    const { name, description, image, rating, price } = request.body;

    const newProductMessage = new ProductMessage({
        name,
        description,
        image,
        rating,
        price,
    });

    try {
        await newProductMessage.save();
        response.status(201).json(newProductMessage);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const updateProduct = async (request, response) => {
    const { id } = request.params;

    const { name, description, image, rating, price } = request.body;

    if (!mongoose.Types.ObjectId.isValid(id))
        return response.status(404).send(`No product with id: ${id}`);

    const updateProduct = { name, description, image, rating, price, _id: id };
    await ProductMessage.findByIdAndUpdate(id, updateProduct, { new: true });

    response.json(updateProduct);
};

export const deleteProduct = async (request, response) => {
    const { id } = request.params;

    if (!mongoose.Types.ObjectId.isValid(id))
        return response.status(404).send(`No product with id: ${id}`);

    await ProductMessage.findByIdAndRemove(id);

    response.json({ message: "Post deleted successfully" });
};

export default router;

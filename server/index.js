import bodyParser from "body-parser";
import mongoose from "mongoose";
import express from "express";
import cors from "cors";

import productRoutes from "./routes/products.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/products", productRoutes);

const CONNECTION_URL =
    "mongodb+srv://ecommerce:FZzXDwo4kHPnBX4v@ecommerce.mkuou8q.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
    .connect(CONNECTION_URL)
    .then(() =>
        app.listen(PORT, () => {
            console.log(`Server running on port: ${PORT}`);
        })
    )
    .catch((error) => {
        console.log(error.message);
    });

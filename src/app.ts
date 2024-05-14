import express from "express";
import ProductsRoutes from "./routes/productRoutes";

const app = express();
app.use(express.json());

app.use("/products", ProductsRoutes);

export default app;

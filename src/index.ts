import express from "express";
import ProductsRoutes from "./routes/productRoutes";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/products", ProductsRoutes);

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

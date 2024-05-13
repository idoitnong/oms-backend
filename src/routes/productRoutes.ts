import express from "express";
import * as ProductController from "../controllers/productController";

const router = express.Router();

router.post("/", ProductController.createProduct);

export default router;

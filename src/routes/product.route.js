import express from "express"
import { createProduct, getProductByBarcode } from "../controller/product.controller.js";

const router= express.Router();

router.post('/create',createProduct);

// Get product by barcode
router.get('/barcode/:barcode', getProductByBarcode);

export default router;
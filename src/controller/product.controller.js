import Product from "../model/product.model.js";



export const createProduct = async (req, res) => {
  try {
    const { name, price, barcode } = req.body;
    console.log(req.body)
    const product = new Product({ name, price, barcode });
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get product by barcode
const productCache = new Map();

export const getProductByBarcode = async (req, res) => {
  try {
    const { barcode } = req.params;
    console.log("barcode detected:",barcode)
    // Check cache first
    if (productCache.has(barcode)) {
      return res.json(productCache.get(barcode));
    }

    const product = await Product.findOne({ barcode });
    console.log("barcode details:",product)
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    // Cache the product
    productCache.set(barcode, product);
    
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  barcode: {
    type: String,
    required: true,
    unique: true
  }
});

 const Product= mongoose.model('Product', productSchema);
 export default Product
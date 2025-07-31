import express from "express"

import  bodyParser from "body-parser"
import cors from "cors"
import  productRoutes from "./src/routes/product.route.js";
import dbConnect from "./src/dbConfig/db.js";
import "dotenv/config"
const app = express();
const port=process.env.PORT||5000
// Middleware
app.use(cors(
  {
    origin:['https://sacnner-app-frontend.vercel.app','http://localhost:5173']
  }
));
app.use(bodyParser.json());

// Routes
app.use('/api/products', productRoutes);

app.get("/", (req, res) => {
  return res.send("Hi! Welcome");
});

// Database connections and server start
dbConnect()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error(`Server startup error: ${error}`);
    process.exit(1);
  });
const Product = require('../models/product.model')

// Get all products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find()
    res.json(products)
  } catch (err) {
    res.status(500).send('Server Error')
  }
}

// Add a new product
exports.addProduct = async (req, res) => {
  try {
    const { name, price } = req.body
    const newProduct = new Product({ name, price })
    await newProduct.save()
    res.json(newProduct)
  } catch (err) {
    res.status(500).send('Server Error')
  }
}

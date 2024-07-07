const express = require('express')
const connectDB = require('./config/database')
require('dotenv').config()

const app = express()

// Connect Database
connectDB()

// Init Middleware
app.use(express.json({ extended: false }))

// Define Routes
app.use('/api/users', require('./routes/user.route'))
app.use('/api/products', require('./routes/product.route'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

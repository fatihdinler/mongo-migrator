const User = require('../models/user.model')

// Get all users
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (err) {
    res.status(500).send('Server Error')
  }
}

// Add a new user
exports.addUser = async (req, res) => {
  try {
    const { name, email } = req.body
    const newUser = new User({ name, email })
    await newUser.save()
    res.json(newUser)
  } catch (err) {
    res.status(500).send('Server Error')
  }
}

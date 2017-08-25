const mongoose = require('mongoose')

const menuSchema = mongoose.Schema({
	url : { type: String, required: true },
	name : { type: String, required: true }
})

module.exports = mongoose.model('menu', menuSchema)
const mongoose = require('mongoose')

const cssSchema = mongoose.Schema({
	value : { type: String, required: true },
	desc : { type: String, required: true }
})

module.exports = mongoose.model('css', cssSchema)
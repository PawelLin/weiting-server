const mongoose = require('mongoose')

const listSchema = mongoose.Schema({
	name: { type:String },
	number: { type: String }
})

module.exports = mongoose.model('list', listSchema)
const mongoose = require('mongoose')
const flexSchema = mongoose.Schema({
	title: { type: String },
	type: { type: String },
	children: { type: Array }
})

module.exports = mongoose.model('flex', flexSchema)
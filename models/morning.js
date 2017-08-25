const mongoose = require('mongoose')

const morningSchema = mongoose.Schema({
	dates: { type: Array }
})

module.exports = mongoose.model('morning', morningSchema)
const mongoose = require('mongoose')
const workSchema = mongoose.Schema({
	normal: { type: Array },
	realx: { type: Array },
	ot: { type: Array },
	sot: { type: Array },
	holiday: { type: Array },
	leave: { type: Array }
})

module.exports = mongoose.model('work', workSchema)
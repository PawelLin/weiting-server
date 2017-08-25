const express = require('express')
const router = express.Router()
const Flex = require('../models/flex')

router.get('/', (req, res) => {
	Flex.find({})
		.then(data => {
			res.send({ data: data })
		})
		.catch(err => {
			res.json(err)
		})
})


module.exports = router
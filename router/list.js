const express = require('express')
const router = express.Router()
const List = require('../models/list')

router.get('/', (req, res) => {
	List.find({})
		.then(data => {
			res.send({ data: data })
		})
		.catch(err => {
			res.json(err)
		})
})

module.exports = router
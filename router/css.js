const express = require('express')
const router = express.Router()
const Css = require('../models/css')

//查询所有的css
router.get('/', (req, res) => {
	Css.find({})
		.then(csses => {
			res.send({ data: csses })
		})
		.catch(err => {
			res.json(err)
		})
})

//新增css
router.post('/list', (req, res) => {
	console.log(req.body);
	Css.find({})
		.then(csses => {
			res.send(csses)
		})
		.catch(err => {
			res.json(err)
		})
})

module.exports = router;
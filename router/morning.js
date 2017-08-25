const express = require('express')
const router = express.Router()
const Morning = require('../models/morning')

router.get('/', (req, res) => {
	Morning.find({})
		.then(data => {
			res.send({ data: data[0].dates})
		})
		.catch(err => {
			res.json(err)
		})
})

router.post('/add', (req, res) => {
	Morning.find({})
		.then(data => {
			if(data.length == 0){
				Morning.create({ dates: req.body.dates })
					   .then(data => {
					   		res.send({code:200,message:"success"})
					   })
					   .catch(err => {
					   		res.json(err);
					   })
			}
			else{
		   		Morning.update(data, {$set: {dates: req.body.dates}})
		   			   .then(data => {
		   			   		res.send({code:200, message: 'success'});
		   			   })
		   			   .catch(err => {
		   			   	res.json(err);
		   			   })
			}
		})
		.catch(err => {
			res.json(err)
		})
})

module.exports = router
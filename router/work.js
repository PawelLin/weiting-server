const express = require('express')
const router = express.Router()
const Work = require('../models/work')

router.get('/', (req, res) => {
	Work.find({})
		.then(data => {
			res.send({ data: data[0] })
			console.log(data);
		})
		.catch(err => {
			res.json(err)
		})
})

router.post('/add', (req, res) => {
	Work.find({})
		.then(data => {
			if(data.length === 0){
				Work.create(req.body)
					.then(data => {
						res.send({code: 200, message: 'success'})
					})
					.catch(err => {
						res.json(err);
					})
			}
			else{
				Work.update(data, {$set: req.body})
					.then(data => {
						res.send({code: 200, message: 'success'});
					})
					.catch(err => {
						res.json(err);
					})
			}
		})
});

module.exports = router
const express = require('express')
const router = express.Router()
const Menu = require('../models/menu')

//查询所有的menu
router.post('/', (req, res) => {
	Menu.find({name:{$regex:req.body.name},url:{$regex:req.body.url}})
		.then(data => {
			res.send({data:data})
		})
		.catch(err => {
			res.json(err)
		})
})

//新增menu
router.post('/add', (req, res) => {
	Menu.create(req.body)
		.then(data => {
			res.send({code:200,message:'success'})
		})
		.catch(err => {
			res.json(err)
		})
})

//删除menu
router.post('/delete', (req, res) => {
	Menu.remove(req.body)
	    .then(data => {
	    	res.send({code:200,message:'success'})
	    })
	    .catch(err => {
	    	res.json(err);
	    })
})

//更新menu
router.post('/update', (req, res) => {
	Menu.update({_id:req.body._id},{name:req.body.name,url:req.body.url})
		.then(data => {
			res.send({code:200,message:'success'});
		})
		.catch(err => {
			res.json(err);
		})
})

module.exports = router;
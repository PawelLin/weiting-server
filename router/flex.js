const express = require('express')
const router = express.Router()
const Flex = require('../models/flex')

router.get('/', (req, res) => {
	// Flex.update({_id:'59a183cfbb28f012342f365a'},{
	// 	title: '决定主轴的方向（即项目的排列方向）',
	// 	type: 'flex-direction',
	// 	children: [{type:'row',title: '主轴为水平方向，起点在左端。'},
	// 				{type:'row-reverse',title: '主轴为水平方向，起点在右端。'},
	// 				{type:'column',title: '主轴为垂直方向，起点在上沿。'},
	// 				{type:'column-reverse',title: '主轴为垂直方向，起点在下沿。'}]
	// }).then(data => {
	// 		res.send({code:200,message:'success'})
	// 	})
	// 	.catch(err => {
	// 		res.json(err)
	// 	});
	Flex.find({})
		.then(data => {
			res.send({ data: data })
		})
		.catch(err => {
			res.json(err)
		});
})


module.exports = router
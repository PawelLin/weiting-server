const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

app.use(bodyParser.json())

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/weiting', {useMongoClient: true})

const css = require('./router/css')
const menu = require('./router/menu')
const morning = require('./router/morning')
const list = require('./router/list')
const work = require('./router/work')
const flex = require('./router/flex')

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use("/", express.static(__dirname.replace('-server','') + "/dist/"));
app.use('/api/css', css)
app.use('/api/menu', menu)
app.use('/api/morning', morning)
app.use('/api/list', list)
app.use('/api/work', work)
app.use('/api/flex', flex)

app.listen(8081, () => {
	console.log('weiting-server listen on port 8081')
})
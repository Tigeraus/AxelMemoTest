var express = require('express');
var router = express.Router();
var word = require('./word');
var machine = require('./machine');
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('test', { title: '测试' });
}).post('/', function(req, res, next) {
	var cookie = req.cookies;
	console.log(req.body);
	if(!req.body.wid) {
		word.getWordsFromRDS(function(ok) {
			if(ok) {
				machine.connect();
				createDir();
				resWord(res);
			} else {
				res.status(400).send('Get words failed!');
			}	
		});
	} else {
		recordData(req.body);
		resWord(res);
	}
});

function resWord(res) {
	var w = word.getWord();
	if(w == undefined) {
		res.send('测试完成！');
		machine.disconnect();
	} else {
		res.json(w);
		machine.start(w.id);
	}
}

function createDir() {
	if(fs.access())
}

function recordData(body) {

}

module.exports = router;

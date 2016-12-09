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
		machine.stop();
		recordData(req.body, machine.getbcidata());
		resWord(res);
	}
});



/**. get datapanel */
router.get('/panel',function(req,res,next){
	res.render('panel', { title: 'Express' });
});




function resWord(res) {
	var w = word.getWord();
	if(w == undefined) {
		res.send('测试完成！');
		machine.disconnect();
	} else {
		res.json(w);
		machine.start();
	}
}

var dirName;

function createDir() {
	try {
		fs.accessSync('./Data/', fs.F_OK);
	} catch(e) {
		fs.mkdirSync('./Data/');
	}
	var d = new Date();
	dirName = './Data/'+d.getMonth()+'-'+d.getDate()+'-'+d.getHours()+'-'+d.getMinutes()+'/';
	try {
		fs.accessSync(dirName, fs.F_OK);
	}  catch(e) {
		fs.mkdirSync(dirName);
	}
}

function recordData(body, data) {
	fs.open(dirName+body.wid+'.rcd', 'w', (err, fd) => {
		//记录用户输入
		fs.writeSync(fd, ''+body.wid+','+body.grade+'\n');
		//记录bci数据
		while(data && data.length > 0) {
			var d = data.shift();
			var dstr = ''+d[0];
			for(var i = 1; i < d.length; i++) 
				dstr += ','+d[i];
			fs.writeSync(fd, dstr+'\n');
		}
		fs.closeSync(fd);
	});
}

module.exports = router;

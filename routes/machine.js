/**
 * 与BCI硬件交互
 * @author: hopeful
 */
//定义变量

var events=require('events');
var util=require('util');



var portName; //端口名
var flowFocusLevel=new Array(10); //注意力水平列表
for (var i=0;i<10;i++){
	flowFocusLevel[i] = 0;
}
var machineListener = new events.EventEmitter();
var flowData=new Array(); //流动记录BCI数据
var rate=0; //采样率
var sampleCount=0; //采样数
var loading = false;

//导出flowFocusLevel变量
module.exports.focuslevel_list = flowFocusLevel;
module.exports.listener = machineListener;

var OpenBCIBoard = require('openbci').OpenBCIBoard;
var ourBoard = new OpenBCIBoard({
	simulate: true
});

//私有函数
//取得bci数据
function getbcidata() {
	return flowData.slice(0);
}

//更新注意了水平，样品每采集rate个执行一次
/*function updateFlowFocusLevel() {
	var focuslevel = calufocus.focuslevel(getbcidata(1), rate);
	flowFocusLevel.push(focuslevel);
	if(flowFocusLevel.length > 10 )
		flowFocusLevel.shift();
}*/

//导出函数
//连接BCI硬件
module.exports.connect = function() {
	ourBoard.listPorts().then(function(portNames) {
		for(var i = 0; i < portNames.length; i ++) {
			if(portNames[i].pnpId == 'usb-Prolific_Technology_Inc._USB-Serial_Controller-if00-port0') {
				portName = portNames[i].comName;
				break;
			}
		}
	})
	.then(function() {
		ourBoard.connect(portName) // Port name is a serial port name, see `.listPorts()`
		.then(function() {
			ourBoard.on('ready',function() {
				rate = ourBoard.sampleRate();
				ourBoard.streamStart();
				ourBoard.on('sample',function(sample) {
					/** Work with sample */
					machineListener.emit('change', sample);
					var data = new Array();
					for (var i = 0; i < ourBoard.numberOfChannels(); i++) {
						data.push(sample.channelData[i].toFixed(8));
					}
					if(loading && sampleCount < 5) {
						flowData.push(data);
						if(sample.sampleNumber == 255)
							sampleCount ++;
					}
				});
			});
		})
		.catch(err => {
			console.log('connect_error:'+err);	
		});
	});
}

//与BCI硬件断开连接
module.exports.disconnect = function() {
	if(ourBoard.isConnected()) {
		if(ourBoard.isStreaming()) {
			ourBoard.streamStop();
		}
		ourBoard.disconnect().then(function() {
			console.log('disconnect!');
		});
	}
}

//导出getbcidata函数
module.exports.getbcidata = getbcidata;

module.exports.start = () => {
	flowData = new Array();
	sampleCount = 0;
	loading = true;
}

module.exports.stop = () => {
	loading = false;
}

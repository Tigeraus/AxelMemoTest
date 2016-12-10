/* 
计算用户的注意力水平
author: 程虎子
*/


var lib = require("ml-fft");
var FFT = lib.FFT;
var FFTUtils = lib.FFTUtils
var ds = require('digitalsignals');

/* 10秒的注意力水平列表
之后将从 machine 里导入

var focuslevel_list = new Array(10)
for (var i=0;i<10;i++){
    focuslevel_list[i] = i/10.0;
} 
*/


//计算当前秒的注意力水平
getfocuslevel = function(dataqueue,sampling_rate){
    // dataqueue的长度必须是2的整数幂
    //sampling_rate=256
    //fft_size = 256
    var focuslevel = 0;
    focuslevel = Math.random();
    //FFT.init(sampling_rate);
    FFT.init(16);
    //var realpart = dataqueue.slice()//实部
    //
    var realpart = new Array(16)
    for(var i=0;i<16;i++){
        realpart[i]=i;
    }
    imaginepart = Array(realpart.length);//虚部
    for (var i=0; i<imaginepart.length; i++){
        imaginepart[i]=0;
    }

    FFT.fft(realpart, imaginepart);
    /*freqlist = realpart.map(function(item){
        return item/sampling_rate;
    })*/
    //得到变换后的实数部分和虚数部分
    
    return focuslevel;
}



function getfft(rawtimeseq){

    //rawtimeseq.length should be256
    //var timeseq = rawtimeseq.slice();
    var timeseq = new Float32Array(rawtimeseq.length)
    for (var i=0;i<rawtimeseq.length;i++){
        timeseq[i]=rawtimeseq[i];
    };

    var fft = new ds.FFT(256,256);
    fft.forward(timeseq);
    var spectrum = fft.spectrum;
    return spectrum

}

var nb = new Array( 0.00128258, 0.00641291, 0.01282581, 0.01282581, 0.00641291, 0.00128258),
	na = new Array(1, -2.97542211, 3.80601812, -2.54525287, 0.88113008,-0.12543062),
	notch50_b = new Array(0.96508099, -1.19328255,  2.29902305, -1.19328255,  0.96508099),
	notch50_a = new Array(1.0       , -1.21449348,  2.29780334, -1.17207163,  0.93138168),
	notch60_b = new Array(9.650809863447347e-001, -2.424683201757643e-001, 1.945391494128786e+000, -2.424683201757643e-001, 9.650809863447347e-001),
	notch60_a = new Array(1.000000000000000e+000, -2.467782611297853e-001, 1.944171784691352e+000, -2.381583792217435e-001, 9.313816821269039e-001),
	filter5_50_b = new Array(1.750876436721012e-001, 0.0, -3.501752873442023e-001, 0.0, 1.750876436721012e-001),
	filter5_50_a = new Array(1.0, -2.299055356038497e+000, 1.967497759984450e+000, -8.748055564494800e-001, 2.196539839136946e-001);

function bandpassFilter(data) {
	for(var i = 0; i < data.length; i ++) {
		filterIIR(notch50_b, notch50_a, data[i]);
		//filterIIR(filter5_50_b, filter5_50_a, data[i]);
		filterIIR(nb, na, data[i]);
	}
}

function filterIIR(filt_b, filt_a, data) {
	var Nback = filt_b.length;
	var	prev_y = new Array();
	var	prev_x = new Array();
	for(var i = 0; i < Nback; i ++) {
		prev_x.push(0);
		prev_y.push(0);
	}
	//step through data points
	for(var i = 0; i < data.length; i ++) {
		//shift the previous outputs
		//prev_y.shift();
		//prev_x.shift();
		for(var j = Nback - 1; j > 0; j --) {
			prev_y[j] = prev_y[j-1];
			prev_x[j] = prev_x[j-1];
		}
		//add in the new point
		prev_x[0] = data[i];
		//compute the new data point
		var out = 0;
		for(var j = 0; j < Nback; j ++) {
			out += filt_b[j]*prev_x[j];
			if(j > 0) {
				out -= filt_a[j]*prev_y[j];
			}
			//console.log([out,filt_b[j]*prev_x[j],filt_a[j]*prev_y[j]]);
		}
		//save output value
		prev_y[0] = out;
		data[i] = out;
	}
}




module.exports.focuslevel = getfocuslevel;
module.exports.getfft = getfft;
module.exports.filter = bandpassFilter;

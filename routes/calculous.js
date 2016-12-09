/* 
计算用户的注意力水平
author: 程虎子
*/


var lib = require("ml-fft");
var FFT = lib.FFT;
var FFTUtils = lib.FFTUtils

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

module.exports.focuslevel = getfocuslevel;



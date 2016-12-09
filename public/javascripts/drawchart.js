        var ctx1 = document.getElementById("realtimeChart1");
        var ctx2 = document.getElementById("realtimeChart2");
        var ctx3 = document.getElementById("realtimeChart3");
        var ctx4 = document.getElementById("realtimeChart4");
        var ctx5 = document.getElementById("realtimeChart5");
        var ctx6 = document.getElementById("realtimeChart6");
        var ctx7 = document.getElementById("realtimeChart7");
        var ctx8 = document.getElementById("realtimeChart8");
        var socket = io('http://localhost');
        var leng = 5*256;
        var dataflow = new Array(8);
        for (var i=0;i<dataflow.length;i++){
            dataflow[i] = new Array(leng);
            for (var j=0;j<leng;j++){
                dataflow[i][j]=0;
            };
        };
        var datalist = new Array(leng);
        var timelist = new Array(leng);
        for (var i=0;i<leng;i++){
            datalist[i]=0;
            timelist[i]=((i+1)/256.0).toString();
        };
        /*var app = new Vue({
            el: '#chart',
            data: {
                realtimedata: datalist
            }
        });*/
         var data1={
                labels: timelist,
                datasets: [{
                    data: dataflow[0],
                    label: 'channel 1',
				    fill: false,
                    lineTension: 0,
                    backgroundColor: "rgba(0,191,255,0.4)",
                    borderColor: "rgba(0,191,255,1)",
                    borderCapStyle: 'butt',
                    borderJoinStyle: 'miter',
                    pointBorderColor: "rgba(0,191,255,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 1,
                    pointHoverBackgroundColor: "rgba(0,191,255,1)",
				    pointHoverBorderColor: "rgba(220,220,220,1)",
				    pointHoverBorderWidth: 1,
				    pointRadius: 1,
				    pointHitRadius: 1
                }]
            };
         
         var data2={
                labels: timelist,
                datasets: [{
                    data: dataflow[1],
                    label: 'channel 1',
				    fill: false,
                    lineTension: 0,
                    backgroundColor: "rgba(0,191,255,0.4)",
                    borderColor: "rgba(0,191,255,1)",
                    borderCapStyle: 'butt',
                    borderJoinStyle: 'miter',
                    pointBorderColor: "rgba(0,191,255,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 1,
                    pointHoverBackgroundColor: "rgba(0,191,255,1)",
				    pointHoverBorderColor: "rgba(220,220,220,1)",
				    pointHoverBorderWidth: 1,
				    pointRadius: 1,
				    pointHitRadius: 1
                }]
            };

         var data3={
                labels: timelist,
                datasets: [{
                    data: dataflow[2],
                    label: 'channel 1',
				    fill: false,
                    lineTension: 0,
                    backgroundColor: "rgba(0,191,255,0.4)",
                    borderColor: "rgba(0,191,255,1)",
                    borderCapStyle: 'butt',
                    borderJoinStyle: 'miter',
                    pointBorderColor: "rgba(0,191,255,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 1,
                    pointHoverBackgroundColor: "rgba(0,191,255,1)",
				    pointHoverBorderColor: "rgba(220,220,220,1)",
				    pointHoverBorderWidth: 1,
				    pointRadius: 1,
				    pointHitRadius: 1
                }]
            };


         var data4={
                labels: timelist,
                datasets: [{
                    data: dataflow[3],
                    label: 'channel 1',
				    fill: false,
                    lineTension: 0,
                    backgroundColor: "rgba(0,191,255,0.4)",
                    borderColor: "rgba(0,191,255,1)",
                    borderCapStyle: 'butt',
                    borderJoinStyle: 'miter',
                    pointBorderColor: "rgba(0,191,255,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 1,
                    pointHoverBackgroundColor: "rgba(0,191,255,1)",
				    pointHoverBorderColor: "rgba(220,220,220,1)",
				    pointHoverBorderWidth: 1,
				    pointRadius: 1,
				    pointHitRadius: 1
                }]
            };


         var data5={
                labels: timelist,
                datasets: [{
                    data: dataflow[4],
                    label: 'channel 1',
				    fill: false,
                    lineTension: 0,
                    backgroundColor: "rgba(0,191,255,0.4)",
                    borderColor: "rgba(0,191,255,1)",
                    borderCapStyle: 'butt',
                    borderJoinStyle: 'miter',
                    pointBorderColor: "rgba(0,191,255,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 1,
                    pointHoverBackgroundColor: "rgba(0,191,255,1)",
				    pointHoverBorderColor: "rgba(220,220,220,1)",
				    pointHoverBorderWidth: 1,
				    pointRadius: 1,
				    pointHitRadius: 1
                }]
            };


         var data6={
                labels: timelist,
                datasets: [{
                    data: dataflow[5],
                    label: 'channel 1',
				    fill: false,
                    lineTension: 0,
                    backgroundColor: "rgba(0,191,255,0.4)",
                    borderColor: "rgba(0,191,255,1)",
                    borderCapStyle: 'butt',
                    borderJoinStyle: 'miter',
                    pointBorderColor: "rgba(0,191,255,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 1,
                    pointHoverBackgroundColor: "rgba(0,191,255,1)",
				    pointHoverBorderColor: "rgba(220,220,220,1)",
				    pointHoverBorderWidth: 1,
				    pointRadius: 1,
				    pointHitRadius: 1
                }]
            };



         var data7={
                labels: timelist,
                datasets: [{
                    data: dataflow[6],
                    label: 'channel 1',
				    fill: false,
                    lineTension: 0,
                    backgroundColor: "rgba(0,191,255,0.4)",
                    borderColor: "rgba(0,191,255,1)",
                    borderCapStyle: 'butt',
                    borderJoinStyle: 'miter',
                    pointBorderColor: "rgba(0,191,255,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 1,
                    pointHoverBackgroundColor: "rgba(0,191,255,1)",
				    pointHoverBorderColor: "rgba(220,220,220,1)",
				    pointHoverBorderWidth: 1,
				    pointRadius: 1,
				    pointHitRadius: 1
                }]
            };



         var data8={
                labels: timelist,
                datasets: [{
                    data: dataflow[7],
                    label: 'channel 1',
				    fill: false,
                    lineTension: 0,
                    backgroundColor: "rgba(0,191,255,0.4)",
                    borderColor: "rgba(0,191,255,1)",
                    borderCapStyle: 'butt',
                    borderJoinStyle: 'miter',
                    pointBorderColor: "rgba(0,191,255,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 1,
                    pointHoverBackgroundColor: "rgba(0,191,255,1)",
				    pointHoverBorderColor: "rgba(220,220,220,1)",
				    pointHoverBorderWidth: 1,
				    pointRadius: 1,
				    pointHitRadius: 1
                }]
            };



        var myLineChart1 = new Chart(ctx1, {
            type: 'line',
            data: data1,
            options: {
					animation: {
						duration: 0
					},
					legend:[{
						display:false
					}],
					responsive: true,
					title:[{
							display: false
						}],
					scales: {
						xAxes: [{
							display: false
						}],
						yAxes: [{
							display: false,
							ticks: {
							max: 0.0003,
							min: -0.0003,
							stepSize: 0.0003
						}
						}]
					}
				}
        });

        var myLineChart2 = new Chart(ctx2, {
            type: 'line',
            data: data2,
            options: {
					animation: {
						duration: 0
					},
					legend:[{
						display:false
					}],
					responsive: true,
					title:[{
							display: false
						}],
					scales: {
						xAxes: [{
							display: false
						}],
						yAxes: [{
							display: false,
							ticks: {
							max: 0.0003,
							min: -0.0003,
							stepSize: 0.0003
						}
						}]
					}
				}
        });




        var myLineChart3 = new Chart(ctx3, {
            type: 'line',
            data: data3,
            options: {
					animation: {
						duration: 0
					},
					legend:[{
						display:false
					}],
					responsive: true,
					title:[{
							display: false
						}],
					scales: {
						xAxes: [{
							display: false
						}],
						yAxes: [{
							display: false,
							ticks: {
							max: 0.0003,
							min: -0.0003,
							stepSize: 0.0003
						}
						}]
					}
				}
        });


        var myLineChart4 = new Chart(ctx4, {
            type: 'line',
            data: data4,
            options: {
					animation: {
						duration: 0
					},
					legend:[{
						display:false
					}],
					responsive: true,
					title:[{
							display: false
						}],
					scales: {
						xAxes: [{
							display: false
						}],
						yAxes: [{
							display: false,
							ticks: {
							max: 0.0003,
							min: -0.0003,
							stepSize: 0.0003
						}
						}]
					}
				}
        });


        var myLineChart5 = new Chart(ctx5, {
            type: 'line',
            data: data5,
            options: {
					animation: {
						duration: 0
					},
					legend:[{
						display:false
					}],
					responsive: true,
					title:[{
							display: false
						}],
					scales: {
						xAxes: [{
							display: false
						}],
						yAxes: [{
							display: false,
							ticks: {
							max: 0.0003,
							min: -0.0003,
							stepSize: 0.0003
						}
						}]
					}
				}
        });




        var myLineChart6 = new Chart(ctx6, {
            type: 'line',
            data: data6,
            options: {
					animation: {
						duration: 0
					},
					legend:[{
						display:false
					}],
					responsive: true,
					title:[{
							display: false
						}],
					scales: {
						xAxes: [{
							display: false
						}],
						yAxes: [{
							display: false,
							ticks: {
							max: 0.0003,
							min: -0.0003,
							stepSize: 0.0003
						}
						}]
					}
				}
        });





        var myLineChart7 = new Chart(ctx7, {
            type: 'line',
            data: data7,
            options: {
					animation: {
						duration: 0
					},
					legend:[{
						display:false
					}],
					responsive: true,
					title:[{
							display: false
						}],
					scales: {
						xAxes: [{
							display: false
						}],
						yAxes: [{
							display: false,
							ticks: {
							max: 0.0003,
							min: -0.0003,
							stepSize: 0.0003
						}
						}]
					}
				}
        });



        var myLineChart8 = new Chart(ctx8, {
            type: 'line',
            data: data8,
            options: {
					animation: {
						duration: 0
					},
					legend:[{
						display:false
					}],
					responsive: true,
					title:[{
							display: false
						}],
					scales: {
						xAxes: [{
							display: false
						}],
						yAxes: [{
							display: false,
							ticks: {
							max: 0.0003,
							min: -0.0003,
							stepSize: 0.0003
						}
						}]
					}
				}
        });







        socket.on('hereur',function(realdataflow){
            myLineChart1.data.datasets[0].data=realdataflow[0];
            myLineChart2.data.datasets[0].data=realdataflow[1];
            myLineChart3.data.datasets[0].data=realdataflow[2];
            myLineChart4.data.datasets[0].data=realdataflow[3];
            myLineChart5.data.datasets[0].data=realdataflow[4];
            myLineChart6.data.datasets[0].data=realdataflow[5];
            myLineChart7.data.datasets[0].data=realdataflow[6];
            myLineChart8.data.datasets[0].data=realdataflow[7];

            myLineChart1.update();
            myLineChart2.update();
            myLineChart3.update();
            myLineChart4.update();
            myLineChart5.update();
            myLineChart6.update();
            myLineChart7.update();
            myLineChart8.update();
        });
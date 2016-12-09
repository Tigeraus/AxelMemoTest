        var ctx = document.getElementById("realtimeChart");
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
         var data={
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

        var myLineChart = new Chart(ctx, {
            type: 'line',
            data: data,
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
							display: true,
							ticks: {
							max: 0.0005,
							min: -0.0005,
							stepSize: 0.0001
						}
						}]
					}
				}
        });

        socket.on('hereur',function(channeldata){
            for (var i=0;i<channeldata.length;i++){
                dataflow[i].push(channeldata[i]);
                dataflow[i].shift();
                //console.log(dataflow)
            };
            myLineChart.data.datasets[0].data=dataflow[0];
            console.log(dataflow[0])
            myLineChart.update();
            console.log('updated');
        });
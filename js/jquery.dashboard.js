var color = ["#5B69BC","#FF8ACC","#FFBCBC","#35B8E0"];
var data1 = [32,23,18,27];

function drawCircle(){
        var canvas = document.getElementById("bingtu");
        var ctx = canvas.getContext("2d");
        var startPoint= 1.5 * Math.PI;
        for(var i=0;i<data1.length;i++){
                ctx.fillStyle = color[i];
                ctx.strokeStyle = color[i];
                ctx.beginPath();
                ctx.moveTo(140,140);
                ctx.arc(140,140,140,startPoint,startPoint-Math.PI*2*(data1[i]/100),true);
                ctx.fill();
                ctx.stroke();
                startPoint -= Math.PI*2*(data1[i]/100);
        }
};

window.onload = drawCircle;

!function($) {
    "use strict";

    var Dashboard1 = function() {
    	this.$realData = []
    };

    //creates Bar chart
    Dashboard1.prototype.createBarChart  = function(element, data, xkey, ykeys, labels, lineColors) {
        Morris.Bar({
            element: element,
            data: data,
            xkey: xkey,
            ykeys: ykeys,
            labels: labels,
            hideHover: 'auto',
            resize: true,
            gridLineColor: '#eeeeee',
            barSizeRatio: 0.2,
            barColors: lineColors
        });
    },

    //creates line chart
    Dashboard1.prototype.createLineChart = function(element, data, xkey, ykeys, labels, opacity, Pfillcolor, Pstockcolor, lineColors) {
        Morris.Line({
          element: element,
          data: data,
          xkey: xkey,
          ykeys: ykeys,
          labels: labels,
          fillOpacity: opacity,
          pointFillColors: Pfillcolor,
          pointStrokeColors: Pstockcolor,
          behaveLikeLine: true,
          gridLineColor: '#eef0f2',
          hideHover: 'auto',
          resize: true,
          pointSize: 0,
          lineColors: lineColors
        });
    },

    //creates Donut chart
    Dashboard1.prototype.createDonutChart = function(element, data, colors) {
        Morris.Donut({
            element: element,
            data: data,
            resize: true,
            colors: colors
        });
    },
    $.Dashboard1 = new Dashboard1, $.Dashboard1.Constructor = Dashboard1
}(window.jQuery);
/*
//initializing 
function($) {
    "use strict";
    $.Dashboard1.init();
}(window.jQuery);*/
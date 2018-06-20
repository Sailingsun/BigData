
    
    $.ajax({
        url:"json/salary.json",
        type:"GET",
        success:function(obj){
            console.log(data);
            if(obj.length > 0){
                for(var i=0;i<obj.length;i++){
                    if(obj[i][0].indexOf("/")){
                        obj[i][0] = obj[i][0].substring(obj[i][0].indexOf("/")+1);
                    }
                    data[i].xAxis = obj[i][0];
                    data[i].value = obj[i][1];
                }
            }
        },
        error:function(obj){
            alert("salary error");
        }
    });

    $.ajax({
        url:"json/city.json",
        type:"GET",
        success:function(obj){
             var sum = 0;
            var perCent = new Array();
            for(var i=0;i<6;i++){
                sum += obj[i][1];
            }
            for(var i=0;i<6;i++){
                perCent[i] = obj[i][1]/sum*200+"%";
            }
            if(obj.length > 0){
                for(var i=0;i<6;i++){
                    document.getElementById("city"+(i+1)).innerHTML = obj[i][0];
                    document.getElementById("nbar"+(i+1)).innerHTML = obj[i][1];
                    document.getElementById("wbar"+(i+1)).style.width = perCent[i];
                }
            }
        },
        error:function(obj){
            alert("error");
        }
    });
    $(window).resize(()=>{
        $("#white-box1").css("height",$("#white-box2").css("height"));
        $("#myCanvas").width($("#white-box1").width()-30);
        $("#myCanvas").height($("#white-box2").height()-92.4);
    });
    $(()=>{
        $("#white-box1").css("height",$("#white-box2").css("height"));
        $("#myCanvas").width($("#white-box1").width()-30);
        $("#myCanvas").height($("#white-box2").height()-92.4);
    });
!function($) {
    "use strict";

    var MorrisCharts = function() {};
    //creates area chart with dotted
    MorrisCharts.prototype.createAreaChartDotted = function(element, pointSize, lineWidth, data, xkey, ykeys, labels, Pfillcolor, Pstockcolor, lineColors) {
        Morris.Area({
            element: element,
            pointSize: 3,
            lineWidth: 1,
            data: data,
            xkey: xkey,
            ykeys: ykeys,
            labels: labels,
            hideHover: 'auto',
            pointFillColors: Pfillcolor,
            pointStrokeColors: Pstockcolor,
            resize: true,
            gridLineColor: '#eef0f2',
            lineColors: lineColors
        });
    },
    //creates Stacked chart
    MorrisCharts.prototype.createStackedChart  = function(element, data, xkey, ykeys, labels, lineColors) {
        Morris.Bar({
            element: element,
            data: data,
            xkey: xkey,
            ykeys: ykeys,
            stacked: true,
            labels: labels,
            hideHover: 'auto',
            resize: true, //defaulted to true
            gridLineColor: '#eeeeee',
            barColors: lineColors
        });
    },
    MorrisCharts.prototype.init = function() {

        //creating Stacked chart
        var $stckedData  = [
            { y: '2005', a: 45, b: 180 },
            { y: '2006', a: 75,  b: 65 },
            { y: '2007', a: 250, b: 90 },
            { y: '2008', a: 75,  b: 65 },
            { y: '2009', a: 250, b: 90 },
            { y: '2010', a: 75,  b: 65 },
            { y: '2011', a: 50,  b: 40 },
            { y: '2012', a: 75,  b: 65 },
            { y: '2013', a: 250,  b: 40 },
            { y: '2014', a: 75,  b: 65 },
            { y: '2015', a: 100, b: 90 }
        ];
        this.createStackedChart('morris-bar-stacked', $stckedData, 'y', ['a', 'b'], ['Series A', 'Series B'], ['#71b6f9', '#ebeff2']);
    },
    //init
    $.MorrisCharts = new MorrisCharts, $.MorrisCharts.Constructor = MorrisCharts
}(window.jQuery),

//initializing 
function($) {
    "use strict";
    $.MorrisCharts.init();
}(window.jQuery);
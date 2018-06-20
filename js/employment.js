
var data = [
        {xAxis:'？？',value:100},
        {xAxis:'？？',value:200},
        {xAxis:'？？',value:300},
        {xAxis:'？？',value:400},
        {xAxis:'？？',value:350},
        {xAxis:'？？',value:500},
        {xAxis:'？？',value:600},
        {xAxis:'？？',value:800},
        {xAxis:'？？',value:700},
        {xAxis:'？？',value:550}
];
        var ynumber = 5;
        var current = 0;
        var yRatio;
        var canvas;
        var ctx;
        var width,height;
        var xlength,ylength;
function draw(){
        canvas = document.getElementById('myCanvas');
        ctx = canvas.getContext('2d');
        width = canvas.width;
        height = canvas.height;
        padding = 50;
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(0,0,0,0.2)';
        ctx.lineWidth = 0.7;
        ctx.moveTo(padding + 0.5, height - padding + 0.5);
        ctx.lineTo(padding + 0.5, padding - 15);
        ctx.stroke();
        ctx.moveTo(padding + 0.5, height - padding + 0.5);
        ctx.lineTo(width - padding + 0.5, height - padding +0.5);
        ctx.stroke();

        ctx.moveTo(padding - 2.5, padding - 9);
        ctx.lineTo(padding + 0.5, padding - 15.5);
        ctx.stroke();
        ctx.moveTo(padding + 3.5, padding - 9);
        ctx.lineTo(padding + 0.5, padding - 15.5);
        ctx.stroke();
        ctx.beginPath();
        ctx.textAlign = "center";
        ctx.fillStyle = "#666666";
        ylength = Math.floor(height - padding*2)/ynumber;
        xlength = Math.floor(width - padding*2)/data.length;
        //x轴坐标点
        for (var i = 0; i < data.length; i++) {
                var xAxis = data[i].xAxis;
                var xlen = xlength * (i+1);
            ctx.moveTo(padding + xlen, height - padding);
            ctx.lineTo(padding + xlen, height - padding + 5);
                ctx.stroke();
                ctx.fillText(xAxis, padding + xlen - xlength/2, height - padding + 15);
        }
        //y轴坐标点
        ctx.beginPath();
        var yvalue = getYFictitious(data);
        for (var j = 0; j < ynumber; j++) {
                var yAxis =  yvalue * (j+1);
                var ylen = ylength * (j+1);
                ctx.fillText(yAxis, padding - 20, height - padding - ylen + 5);
        }
        //y轴对应横线
        ctx.beginPath();
        for (var k = 0; k < ynumber; k++){
                var ylen1 = ylength * (k+1);
                ctx.moveTo(padding, height - padding - ylen1);
                ctx.lineTo(padding + Math.floor(width - padding*2), height - padding - ylen1);
                ctx.strokeStyle = "rgba(0,0,0,0.1)";
                ctx.stroke();
        }
        console.log(ylength);
        yRatio = ylength / yvalue;
        looping();
canvas.addEventListener('mousemove',function(ev){
        ev = ev||window.event;
        for (var i = 0; i<data.length; i++) {
                data[i].flag = 0;
                if(ev.offsetX>data[i].left && ev.offsetX<data[i].right && ev.offsetY>data[i].top && ev.offsetY<data[i].bottom){
                // this.style.cursor = 'pointer';
                data[i].flag = 1;
                drawAnimation();
                console.log(ev.offsetX+"你处于"+i);
                }
                else{
                        data[i].flag = 0;
                        drawAnimation();
                }
        }
});
}
function getYFictitious(data){
        var arr = data.slice();
/*      console.log(data);
        console.log(arr);       */
        arr.sort(function(a,b){
                return -(a.value-b.value);
        });
        var len = Math.ceil(arr[0].value/ynumber);
        var pow = len.toString().length-1;
        pow = pow>2 ? 2:pow;
        return Math.ceil(len / Math.pow(10,pow)) * Math.pow(10,pow);
}
function looping() {
    looped = requestAnimationFrame(looping);
    if(current < 100){
    // current 用来计算当前柱状的高度占最终高度的百分之几，通过不断循环实现柱状上升的动画
        current = (current + 3) > 100 ? 100 : (current + 3);
        drawAnimation();
    }else{
        window.cancelAnimationFrame(looped);
        looped = null;
    }
}
function drawAnimation() {
    for(var i = 0; i < data.length; i++) {
        var x = Math.ceil(data[i].value * current / 100 * yRatio);
        //将真实数据转换为网页内像素
        var y = height - padding - x;
        if(data[i].flag == 1)
                ctx.fillStyle = '#446CFF';
        else
                ctx.fillStyle='#648CFF';
        ctx.fillRect(padding + xlength * (i + 0.25), y, xlength/2, x);
        data[i].left = padding + xlength / 4 + xlength * i;
        data[i].top = y;
        data[i].right = padding + 3 * xlength / 4 + xlength * i;
        data[i].bottom = height - padding;
    }
}
window.onload = draw;
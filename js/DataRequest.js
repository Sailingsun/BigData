
function parseBigNumber(data){
    var num = parseFloat(data);
    if(num > 100000000){
        num = num / 100000000;
        return num.toFixed(2) + "亿";
    }else if(num > 1e4){
        num /= 10000;
        return num.toFixed(2)+"万";
    }else if(num > 1e3){
        num /= 1000;
        return num.toFixed(2)+"千";
    }else{
        return parseInt(num);
    }
}

$.ajax({
	url:"json/count.json",
	type:"GET",
	success:function(obj){
	    if(obj.length > 0){
	        document.getElementById("total_count").innerHTML = parseBigNumber(obj[0][0]);
	    }
	},
	error:function(obj){
	    alert("error");
	}
});

$.ajax({
	url:"json/classify.json",
	type:"GET",
	success:function(obj){
	    if(obj.length > 0){
	        document.getElementById("position_count").innerHTML = parseBigNumber(obj[0][0]);
	    }
	},
	error:function(obj){
	    alert("error");
	}
});

$.ajax({
	url:"json/getLastPosition.json",
	type:"GET",
	success:function(obj){
	    if(obj.length > 0){
	        var barData = [];
	        for(var i in obj){
	            barData[i] = {y:obj[i][0],a:obj[i][1]};
	        }

	        ;(function(barData){
	             setTimeout(function(){
	                document.getElementById("morris-bar-example").innerHTML = "";
	                $.Dashboard1.createBarChart('morris-bar-example', barData, 'y', ['a'], ['需求个数'], ['#188ae2']);
	        },1500);
	        })(barData);

	    }
	},
	error:function(obj){
	    alert("error");
	}
});

$.ajax({
	url:"json/education.json",
	type:"GET",
	success:function(obj){
	    if(obj.length > 0){
	        var barData2 = [];
	        for(var i in obj){
	            barData2[i] = {label:obj[i][0],value:obj[i][1]};
	        }
	        ;(function(barData){
	             setTimeout(function(){
	                document.getElementById("morris-donut-example").innerHTML = "";
	                $.Dashboard1.createDonutChart('morris-donut-example', barData2, ['#ff8acc', '#5b69bc', "#35b8e0",'#ff8acc', '#5b69bc', "#35b8e0"]);
	        },1500);
	        })(barData2);

	    }
	},
	error:function(obj){
	    alert("error");
	}
});

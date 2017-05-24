var value=$(".search_input").value;


$.ajax({
	url:"http://suggestion.baidu.com/su",
	data:{
		wd:value;
	}
	dataType:"jsonp",
	jsonp:"cb",
	success:function(data){
		$(".search_input").input(function(){
				console.log(data);
		})
	}
})
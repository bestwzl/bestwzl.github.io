$(function(){
      $.getJSON('../json/data.json',function(data){
         var html=template('goods_box',data);
         $('.goods_con').html(html);
         });


     $('.M-box').pagination({
     	"pageCount":7,
     	callback:function(api){
     		var data = {
     			page:api.getCurrent()
     		}
     		$.getJSON("../json/data.json",data,function(json){
     			
     			var ht = "";
     			
     			 for(i=(data.page-1)*12;i<=data.page*12;i++){
     			 	if(i>=json.goods.length){
     			 		console.log("没有了");
     			 		i = json.goods.length;
     			 	}
     			      
     			    var box = `<div class="goods_box">
		                    	   <a href="javascript:;" class="goods_pic">
		                    	      <img src="../${json.goods[i].src}">
		                    	   </a>

		                    	   <a href="javascript:;" class="goods_meg">
		                    	   	  <p>${json.goods[i].name},${json.goods[i].note}</p>
		                    	   </a>
		                    	   <div class="danjia">
			                    	   	  <p class="goods_danjia">￥${json.goods[i].price}元</p>
			                    	      <span><p>评论(</p><a href="javascript">${json.goods[i].num}</a><p>)</p>
			                    	   </span>
		                    	   </div>
		                    	   
		                    	   <div class="caozuo">
			                    	   	<a href="javascript:;" class="ljgm">购买</a>
			                    	   	<a href="javascript:;" class="shoucang">收藏</a>
			                    	   	<a href="javascript:;" class="duibi">对比</a>
		                    	   </div>
                    		   </div>`
                    ht += box;
     			}
                $('.goods_con').html(ht);
     			
     		})
     		 
     	}
     });





})
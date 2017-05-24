'use strict'
// 轮播图
	    	var mySwiper = new Swiper ('.swiper-container', {
			    //direction: 'vertical', //横向或者竖向  默认横向
			    loop: true, //是否无限循环
			    autoplay: 1000,
			    speed: 600,
			    pagination: '.swiper-pagination',
			    nextButton: '.swiper-button-next',
			    prevButton: '.swiper-button-prev'
			  })        
//选项卡
          var allCon = $('.all_goods');
				$('.xxk_xx').mouseenter(function(){
					//处理选中状态
					$(this).addClass('active').siblings().removeClass('active');
					allCon.eq( $(this).index() ).show().siblings().hide();
				});
//购物车事件
            
           

		// $('.main_con').on('click','.ljgm' function(e) {
		
		//     var offset = $('#end').offset(), 
		//         flyer = $('<img class="u-flyer" src="images/lanrenzhijia.jpg"/>'),
		//         scrollTop = $(document).scrollTop();
		//     flyer.fly({
		//         start: {
		//             left: e.clientX,
		//             top: e.clientY
		//         },
		//         end: {
		//             left: offset.left,
		//             top: offset.top-scrollTop,
		//             width: 20,
		//             height: 20
		//         }
		//     });
		// });
// 右侧的小选项卡加手风琴
       var allDiv = $('.goods_list_con>div');
       var allList = $('.dfcamera>div');
      
$('.good_list_nav a').mouseenter(function(){
    $(this).addClass('xuanzhong').siblings().removeClass('xuanzhong');
    allDiv.eq($(this).index()).show().siblings().hide();
      var data = $(this).index()+1;
      console.log(data);
        $.getJSON("json/data.json",data,function(json){
		var ht = "";
		  for(var i=data*9;i<=(data+1)*9;i++){
		 	if(i>=json.goods.length){
		 		console.log("没有了");
		 		i = json.goods.length;
		 	}
		    console.log("00000");  
		    var box = `<div class="goods_one">
        			    <b class="hide_me">${json.goods[i].name},${json.goods[i].note}</b>
        			    <div class="show_me">
        			    	 <span class="list_index">1</span>
            				 <img src="${json.goods[i].src}">
            				 <a href="javascript:;">${json.goods[i].note}</a>
            				 <p>${json.goods[i].num}</p>
        			    </div>
			      </div>`
        ht += box;
		}
    $('goods_list_con').find('div').eq(data).html(ht);
		
    })
});
 $('.goods_one').mouseenter(function(){
     $(this).find('div').addClass('show_me').parent().siblings().find('div').removeClass('show_me');
    $(this).find('b').addClass('hide_me').parent().siblings().find('b').removeClass('hide_me');
   
 });
 
  
 // 作品欣赏
  $('.box_demo').on('mouseenter','.pic_item',function(){
    	 
    	 $(this).find('.big').stop();
        $(this).find('.big').animate({
				        	left:-300,
				        	top:-60,
				        	width:300,
				        	height:200,
				        	opacity:1,

				            },'slow')
    });
     $('.box_demo').on('mouseleave','.pic_item',function(){
    	$(this).find('.big').stop();
       $(this).find('.big').animate({
        	left:0,
        	top:0,
        	width:210,
        	height:140,
        	opacity:0
        },'slow')
    });

          

			



		





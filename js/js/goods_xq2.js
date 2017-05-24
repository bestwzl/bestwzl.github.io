



var mid = $('.middle_pic');
var filter = $('.filter');
var lar = $('.big_pic');
var larImg = $('.big_pic img');
var left = mid.offset().left;
var topp = mid.offset().top;


var fangdajing = {
	  
	 init: function(){
		this.enter();
		this.leave();
		this.move();
		this.btnclick();
		this.picclick();
	},
	
	//鼠标进入，显示滤镜和大图
	enter:function(){
		mid.mouseenter(function(){

		 filter.css('display','block');
		 lar.css('display','block');
		});
	},

	//鼠标离开，隐藏滤镜和大图
	leave:function(){
		
		mid.mouseleave(function(){
	
		 filter.css('display','none');
		 lar.css('display','none');
		});
	},
	
//鼠标滑动放大
    move:function(){
       var _this = this;
      
       mid.mousemove(function(e){
   
      var l = e.pageX - left - 100;
      var t = e.pageY - topp - 100;
      l = l<2?2:(l>180?180:l);
      t = t<2?2:(t>140?140:t);
      console.log(topp,l,t);
       filter.css({left:l,top:t});
       larImg.css({left:-1.68*l,top:-2*t});
      
       });
    },

   

	//点击左右按钮
	btnclick:function(){
           var _this = this;
       $('.goods_list>span').click(function(){
//       console.log("按钮点击了");  

       });
	},
	//点击小图片
	picclick:function(){
            var _this = this;
       $('.goods_window img').click(function(){
            $(this).addClass('active').siblings().removeClass('active');
//          console.log("图片点击了");
       });   
	}
};
	fangdajing.init();
$(function(){
      
   var lunbo = {
          i : 0,
         timer1:null, 

       init:function(){
		       	this.autoPlay();
		       	this.btnR();
		       	this.btnL();
		       	this.cicle_click();
		       	this.this_stop();
		       	this.this_start()
      		 },
   

//图片自动轮播 var idInt = setInterval(function(){},2000);
         
		autoPlay:function(){
			var _this = this;
		  timer1 = setInterval(function(){
		     	$('.swiper-wrapper').stop();
	                _this.i++;
	                _this.i %= $('.swiper-slide').size(); 
	                // console.log(_this.i);
	                 //console.log($('.swiper-slide').size());
	                _this.imgSwitch(_this.i);
	            	_this.cicle_follow(_this.i);  
			   },2000);
              
		},

//按钮点击切换
		btnR:function(){
			var _this = this;
		      $('.swiper-button-next').click(function(){
		      	     $('.swiper-wrapper').stop();
		      	        _this.i++;
		      	         _this.i %= $('.swiper-slide').length;
		      	        
		      	         	_this.imgSwitch(_this.i);
                            _this.cicle_follow(_this.i);
		      	         
		            		
		      });  
		     
		},
		btnL:function(){
			var _this = this;
		      $('.swiper-button-prev').click(function(){
		      	     $('.swiper-wrapper').stop();
		      	        _this.i--;
		      	        if(_this.i <= -1){
		      	        	_this.i = $('.swiper-slide').size() - 1;
		      	        }
		            	_this.imgSwitch(_this.i);
		                _this.cicle_follow(_this.i);	
		      });
		     
		},

//小圆点点击时切换
		cicle_click:function(){
			var _this = this;
           $('.swiper-pagination ul').on('click','li',function(){
                 _this.i = $(this).index();
                
                 _this.imgSwitch(_this.i);
                 _this.cicle_follow(_this.i);
         });
		},

//小圆点跟随
		cicle_follow:function(i){
			 // 小圆点的边界处理
			  // if(i >= $('.swiper-slide').length-1){
			  // 	  i = 0;
			  // 	  $('.li_wrap').find("li").eq(i).addClass('this_active').siblings().removeClass('this_active');
                    
			  // }else{
			  // 	$('.li_wrap').find("li").eq(i).addClass('this_active').siblings().removeClass('this_active');
     //          }
			$('.li_wrap').find("li").eq(i).addClass('this_active').siblings().removeClass('this_active');
             
			 // console.log($('.swiper-pagination ul').find("li:eq(i)").index());
			 // console.log($('.li_wrap').find('li').eq(i).index());
		},

//鼠标悬停时停止自动轮播
		this_stop:function(){
            var _this = this;
            $('.swiper-container').mouseenter(function(){
            	// console.log("检测到鼠标进入");
            	clearInterval(timer1);
            });
		},
//鼠标离开时启动自动轮播		
		this_start:function(){
            var _this = this;
            $('.swiper-container').mouseleave(function(){
            	// console.log("检测到鼠标离开");
            	_this.autoPlay();
            });
		},
//封装一个图片转换方法
		imgSwitch:function(a){
			$('.swiper-wrapper').animate({
		        left:-780*a
		     });
		}




}


lunbo.init();



})
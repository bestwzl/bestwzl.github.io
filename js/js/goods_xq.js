'use strict'
window.onload = function(){
	//中盒子
   var mid = document.querySelector('.middle_pic');
 
   //中图
   var midImg = document.querySelector('.middle_pic img');
   //滤镜
   var filter = document.querySelector('.filter');
   //大盒子
   var lar = document.querySelector('.big_pic');
   // 大图
   var larImg = document.querySelector('.big_pic img');
    //小图
   var small = document.querySelectorAll('.goods_window img');
   //右按钮
   var arrR = document.querySelector('.g_right');
   //左按钮
   var arrL = document.querySelector('.g_left');
   //列表窗口
   var p_box = document.querySelector('.goods_window ul');
   //console.log(midImg,larImg);
  
  
   
  
  // 鼠标触及列表图片时，中图对应显示。
   p_box.onmouseover = function(e){
     e = e || window.event;
    var target = e.target || e.srcElement;
    //判断事件是不是图片
    if(target.tagName == 'IMG'){
    	var src = target.getAttribute('data-url');
    	midImg.src = src;
    	larImg.src = src;
    	//改变当前图片的边框颜色
        removeClass(small,'active');
		addClass(target,'active');
    }
   
   }

   //左右点击
	var index = 0;
	arrR.onclick = function(){
		index++;
		if(index > small.length - 5){
			index = small.length - 5;
			return;
		}
		stop(p_box);
		animate(p_box,{
			marginLeft: -index*60
		});
	}
  
	arrL.onclick = function(){
		index--;
		if(index < 0){
			index = 0;
			return;
		}
		stop(p_box);
		animate(p_box,{
			marginLeft: -index*60
		});
	}	






}
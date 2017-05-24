'use strict'
        window.onload = function(){
            var gouwu = document.querySelector('.gouwu2');
            var goods = document.querySelector('.goods');
            var cars = document.querySelector('.cars');
            var sl = document.querySelector('.shuliang');
            var gouwu_num = document.querySelector('.gouwu_num');
            var in_car = document.querySelector('.in_car');

             var i = 0;
             gouwu.onmouseenter = function(){
                         	sl.style.display = 'none';
                         	cars.innerHTML='已选'+i+'件';
                  }
             gouwu.onmouseleave = function(){
             	if(sl.innerHTML>0){
             		           sl.style.display = 'block';
             	           }
               	}
            /*
				抛物线运动

				y = a*x*x + b*x + c
			
				y = -0.001*x*x + b*x;
			*/
			
             document.addEventListener('click',function(e){
				         e = e ||window.event;
//            if(e.className == "ljgm"){
                  
                      i++;
                      sl.style.display = 'block';
                      sl.innerHTML = i;
                      gouwu_num.innerHTML = i;
                    
//                  var div = document.createElement('div');
//                     div.className = 'goumai_goods';
//                  document.body.appendChild(div);//放到body中
//                 
//            //获取鼠标位置（相对坐标）（运动的终点位置）
//                     var x = e.clientX-25 ;
//                     var y = e.clientY-25 ;
//                       //点击时的初始位置。
//                     var cw = document.documentElement.clientWidth-25;
//                        div.style.left = x + 'px';
//                        div.style.top =  y + 'px';
//
//      // //根据点击的位置求b值
//      
//
//                     var x1 = x - cw;
//                     var y1 = 370-y;
//                    
//
//                     var b = (y1 + 0.001*x1*x1)/x1;
//                    // //开定时器 让小方块运动
//                      var w2 = 50;
//                      var h2 = 50;
//              var timer = setInterval(function(){
//                        x1 += 10;
//                        y1 =  -0.001*x1*x1 + b * x1;
//                        
//                        if(x1 >= -10){
//                          x1 = -10;
//                          y1 = -10;
//                          clearInterval(timer);
//                          div.remove();
//                        }
//                                  
//                           w2 -=1;
//                           if(w2<=20){
//                            w2 = 20;
//                           }
//                           h2-=1;
//                           if(h2<=20){
//                            h2 = 20;
//                           }
//                    div.style.left = x1+cw + 'px';
//                    div.style.top = 370-y1 + 'px';
//                    div.style.width =w2 +'px' ;
//                    div.style.height =h2 + 'px';
//                  //console.log(x1,y1);
//                 },13);
//                    } 
                });

              
              
              
              
//-----------搜索框----------------
      //   var input = $('.search_input');
      //   var ul = $('.search_list');
      //   var btn = $('.search_logo');
      //   console.log(input,ul,btn);
      //   console.log("链接成功");
      //   //点击搜索，跳转搜索
      //   btn.onclick = function(e){
      //      console.log("搜索按钮点击有效");
      //     stopPropagation(e);
      //     var value = input.value;
      //     window.location = 'http://www.baidu.com/s?wd=' + value;
      //   }
        
      //   var script;
        
      //   //输入框中内容改变，获取关联词
      //   input.oninput = function(e){
      //      console.log("输入监听有效");
      //     stopPropagation(e);
      //     jsonp();
      //     getData();
      //   }
        
      //   //点击关联词，将关联词写入输入框，并重新获取关联词
      //   ul.onclick = function(e){
           
      //     stopPropagation(e);
      //     e = e || window.event;
      //     var target = e.target || e.srcElement;
      //     if(target.nodeName == 'LI'){
      //       input.value = target.innerText;
      //       jsonp();
      //     }
      //     if(target.nodeName == 'B'){
      //       input.value += target.innerText;
      //     }
      //   }
        
      //   //获取百度关联词方法
      //   function jsonp(){
      //     var value = input.value;
      //     script && document.body.removeChild(script);
      //     script = document.createElement('script');
      //     script.src = 'http://suggestion.baidu.com/su?wd='+value+'&cb=';
      //     document.body.appendChild(script);
      //   }
        
      //   //将关联词放在搜索框下方
       
      // var getData = function(data){
      //     var value = input.value;
      //     var content = '';
      //     for(var i in data){
      //       var ds = data.s[i].substr(value.length)
      //       content += '<li>'+value+'<b>'+ds+'</b></li>'
      //     }
      //     ul.innerHTML = content;
      //     console.log(content);
      //   }

        
      //   //点击空白处，关联词框隐藏
      //   document.body.onclick = function(e){
      //     hide(ul);
      //   }
      //   //搜索框获焦时，关联词框显示
      //   input.onfocus = function(){
      //     show(ul);
      //   }
      //   input.onclick = function(e){
      //     stopPropagation(e);
      //   }
        
       
      //     //按下Enter进行搜索
      //     if(input.value.length != 0 && e.keyCode == 13){
      //       location = 'http://www.baidu.com/s?wd='+input.value;
      //     }
        

}





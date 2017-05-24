/*
 	详情页面js
	
	0、渲染颜色分类(读取数据)
 	1、颜色的切换
 	2、增加数量
 	3、减少数量
 	4、直接修改input
 	5、加入购物车
*/
$(function(){
	var detail = {
		data: {},
		init: function(){
			var _this = this;
			//读取商品数据 (如果json文件格式错误，获取失败)
			$.getJSON('../json/data2.json',function(result){
				//保留数据
				console.log(result);
				_this.data = result;

				var list = template('type-list',result);
				$('.color-content').html( list );

				//选中第一个
				var first = $('.color-content li:first');
				first.addClass('selected');
				//获取第一个分类的编号
				var id = first.data('id');
				$('.goods-price').html( result.color[id].sale_price );
				$('.stock-num').html( result.color[id].stock );
			});

			//颜色切换
			this.colorSwitch();

			//增加
			this.increase();
			this.decrease();
			this.input();
			this.addToCart();
		},
		
		colorSwitch: function(){
			var _this = this;
			$('.color-content').on('click','.tb-con-item',function(){
				$(this).addClass('selected').siblings().removeClass('selected');
				var id = $(this).data('id');
				$('.goods-price').html( _this.data.color[id].sale_price );
				$('.stock-num').html( _this.data.color[id].stock );
			});
		},
		
		//数量增加
		increase: function(){
			$('.amount-increase').click(function(){
				//拿到当前的数量
				var amount = parseInt( $(this).prev().val() );
				//获取库存
				var stock = $('.stock-num').html();
				//判断与库存的关系
				if(amount >= stock) return;
				amount++;
				$(this).prev().val( amount );
			});
		},
		//数量减少
		decrease: function(){
			$('.amount-decrease').click(function(){
				var input = $(this).parent().find('.amount-input');
				//拿到当前的数量
				var amount = parseInt( input.val() );
				if(amount <= 1) return;
				amount--;
				input.val(amount);
			});
		},
		input: function(){
			$('.amount-input').on('input',function(){
				var amount = $(this).val();
				if(amount === '') return;
				// 3d  => 3  parseInt()
				amount = parseInt(amount);
				if( isNaN(amount) ){
					amount = 1;
				}

				//判断库存
				var stock = $('.stock-num').html();
				if(amount >= stock){
					amount = stock;
				}
				$(this).val(amount);
			});
			//失焦之后，如果内容为空，更改为1
			$('.amount-input').blur(function(){
				var amount = $(this).val();
				if(amount === ''){
					 $(this).val(1);
				}
			});
		},
		addToCart: function(){
			$('.option-addCart').click(function(){
				var goods = $('.tb-con-item.selected');
				var id = goods.data('id');
				var amount = parseInt( $('.amount-input').val() );

				//读取cookie  做兼容
				var cart = $.cookie('tm-cart') || '{}';
				cart = JSON.parse(cart);
				
				//判断是否已经存在当前商品
				if(!cart[id]){
					//不存在
					cart[id] = {
						id: id,
						amount: amount
					};
				}else{
					cart[id].amount += amount;
				}

				alert('加入成功');

				//重写cookie
				$.cookie('tm-cart',JSON.stringify(cart),{expires: 365,path: '/'});

				console.log( JSON.parse($.cookie('tm-cart')) );

			});
		}
	};
	detail.init();
});

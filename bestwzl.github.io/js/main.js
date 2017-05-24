requirejs.config({
	paths:{   //paths为文件起别名
		jquery:"lib/jquery-1.11.3"  //被起别名的文件不能包含扩展名
	}
})
//业务逻辑实现
requeryjs(["jquery"],function($){ //使用$代替jquery这个模块
    
})
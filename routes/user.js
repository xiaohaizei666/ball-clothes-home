const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建路由器对象
var router=express.Router();

//添加路由
//1.用户登录 get
router.get('/v1/login/:uname-:upwd',(req,res)=>{
	//获取请求数据
	var $uname=req.params.uname;
	var $upwd=req.params.upwd;
	//查询用户名和密码
	var sql='SELECT * FROM qy_user WHERE uname=? AND upwd=?';
	pool.query(sql,[$uname,$upwd],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send("1");
		}else{
			res.send("0");
		}
	});
});

//2.用户注册post
router.post('/v1/reg',(req,res)=>{
	//获取数据
	var $uname=req.body.uname;
	var $upwd=req.body.upwd;
	var $upwd_confirm=req.body.upwd_confirm;
	var $email=req.body.email;
	var $phone=req.body.phone;
	//插入数据
	var sql="INSERT INTO qy_user SET uname=?,upwd=?,email=?,phone=?";
	pool.query(sql,[$uname,$upwd,$email,$phone],function(err,result){
		if(err) throw err;
		if(result.affectedRows>0){
			res.send('1');
	  }
	});
});


//导出路由器
module.exports=router;





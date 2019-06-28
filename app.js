//引入express模块
const express=require('express');
//引入路由器模块
const userRouter=require('./routes/user.js');
//引入连接池模块
const pool=require('./pool.js');
//引入body-parser模块
const bodyParser=require('body-parser');

//创建服务器
var app=express();
app.listen(8080);

//托管静态资源到public目录下
app.use( express.static('public') );
//使用body-parser中间件
app.use( bodyParser.urlencoded({
	extended:false  //不使用第三方的qs模块，而是使用querystring模块
}) );


//使用路由器
app.use('/user',userRouter);








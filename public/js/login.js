//1.登录接口
function login(){
	//xhr四部曲
	var xhr=new XMLHttpRequest();
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4 && xhr.status==200){
			var result=xhr.responseText;
			if(result==1){
				alert("登录成功");
				window.location.href="http://127.0.0.1:8080/index.html";
			}else{
				alert("用户名或者密码错误");
			}
		}
	}
	//非空验证
	if(uname.value.length==0){
		alert("用户名不能为空");
		document.getElementById("showErrUname").style.display="block";
		return;
	}else{
		document.getElementById("showErrUname").style.display="none";
	}
	if(upwd.value.length==0){
		alert("用户密码不能为空");
		document.getElementById("showErrUpwd").style.display="block";
		return;
	}else{
		document.getElementById("showErrUpwd").style.display="none";
	}
	xhr.open("get","/user/v1/login/"+uname.value+"-"+upwd.value);
	xhr.send();
}

//2.注册接口
function reg(){
	//xhr四部曲
	//1.创建获取xhr异步对象
	var xhr=new XMLHttpRequest();
	//4.绑定监听，获取响应
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4&&xhr.status==200){
			var result=xhr.responseText;
			if(result==1){
				alert("注册成功");
			}
		}
	}
	//非空验证
	//1.验证用户名
	if(!uname.value){
		alert("用户名不能为空");
		document.getElementById("show-err-uname").style.display="inline-block";
		return;
	}else{
		document.getElementById("show-err-uname").style.display="none";
	}
	//2.验证登录密码
	if(!upwd.value){
		alert("登录密码不能为空");
		document.getElementById("show-err-upwd").style.display="inline-block";
		return;
	}else{
		document.getElementById("show-err-upwd").style.display="none";
	}
	//3.验证确认密码
	if(!upwd_confirm.value){
		alert("确认密码不能为空");
		document.getElementById("show-err-upwd_confirm").style.display="inline-block";
		return;
	}else{
		document.getElementById("show-err-upwd_confirm").style.display="none";
	}
	//3.2验证密码是否一致
	if(upwd_confirm.value!=upwd.value){
		alert("两次密码输入不一致");
		return;
	}
	//4.验证邮箱
	if(!email.value){
		alert("邮箱不能为空");
		document.getElementById("show-err-email").style.display="inline-block";
		return;
	}else{
		document.getElementById("show-err-email").style.display="none";
	}
	//5.验证手机号
	if(!phone.value){
		alert("手机号不能为空");
		document.getElementById("show-err-phone").style.display="inline-block";
		return;
	}else{
		document.getElementById("show-err-phone").style.display="none";
	}
	//2.创建请求,打开连接
	xhr.open("post","/user/v1/reg",true);
	//请求主体
	var formdata="uname="+uname.value+"&upwd="+upwd.value+"&email="+email.value+"&phone="+phone.value;
	console.log(formdata);
	//修改消息头
	xhr.setRequestHeader("Content-type","applition/x-www-form-urlencodend");
	//发送请求
	xhr.send(formdata);
}











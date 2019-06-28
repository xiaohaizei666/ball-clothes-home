var wrap=document.querySelector(".wrap");
var next=document.querySelector(".slide_rt");
var prev=document.querySelector(".slide_lf");
next.onclick=function(){
	nextImg();
}
prev.onclick=function(){
	prevImg();
}
//上一张
function prevImg(){
	if(wrap.style.left==="0px"){
		wrap.style.left="-4760px";
	}else{
		var newLeft=parseInt(wrap.style.left)+1190;
		wrap.style.left=newLeft+"px";	
	}
}
//function prevImg(){
//	if(wrap.style.left===0){
//		wrap.style.left=-400%;
//	}else{
//		wrap.style.left=wrap.style.left+100%;	
//	}
//}
//下一张
function nextImg(){
	if(wrap.style.left==="-7140px"){
		wrap.style.left="-2380px";
	}else{
		newLeft=parseInt(wrap.style.left)-1190;	
		wrap.style.left=newLeft+"px";
	}
}











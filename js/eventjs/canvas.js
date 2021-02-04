var c=document.getElementById("MYCanvas"); //获取canvas
var ctx=c.getContext("2d"); // 创建一个2D 对象
ctx.beginPath(); //
ctx.lineWidth="50"; //线条宽度
ctx.strokeStyle="grey"; //设置为红色
ctx.rect(0,0,1800,50); //创建矩形，起始点的x y坐标，和矩形宽高
// ctx.fill();
ctx.stroke(); //绘制矩形（无填充） [有填充用 ctx.fill（）]
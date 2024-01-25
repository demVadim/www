var canvas = document.getElementById("canvasId");
var ctx = canvas.getContext("2d");
canvas.width = 200;
canvas.height = 90;
ctx.strokeStyle = "green";
ctx.fillStyle = "blue";
ctx.shadowBlur = 10;
ctx.shadowColor = "brown";

ctx.rect(10,30,80,40);
ctx.fill();
ctx.stroke();



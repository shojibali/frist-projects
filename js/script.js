const canvas = document.getElementById('tutorial');
const ctx = tutorial.getContext('2d');

ctx.lineWidth = 3
ctx.stokeStyle = 'black';
ctx.strokeRect(10, 10, 362, 260);
ctx.fillStyle = 'green';
ctx.fillRect(12, 12, 358, 258);

let centerX = c.width / 2;
let centerY = c.height / 2;

ctx.beginPath();
ctx.arc(centerX,centerY,70,0,2*Math.PI,false);
ctx.fillStyle = 'red';
ctx.fill()

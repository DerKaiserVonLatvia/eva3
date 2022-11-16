function P1()  // Rectangle
{ 	var c=canvas1.getContext("2d");
	c.strokeStyle="red"; c.lineWidth=5;
	c.strokeRect(20,20,100,60);
				//x, y, Width, Height//
	c.fillStyle="#888800";
	c.fillRect(130,100,60,20);
	c.strokeStyle="red"; c.lineWidth=5;
	c.strokeRect(200,20,60,60);
	
}
function P2() // Ellipse
{ var c=canvas1.getContext("2d");
c.lineWidth=2; c.strokeStyle="red";	
c.beginPath();
c.ellipse(180, 60,    50, 20, Math.PI/3,   0, 2*Math.PI);
	//centra x, y, rx, ry,pagriezens, sākuma un beigu leņki
	c.closePath();c.strokeStyle="blue";c.stroke();
	c.beginPath();
c.ellipse(180, 60,    50, 20, Math.PI/5,   0, 2*Math.PI);

	c.closePath();c.strokeStyle="violet";c.stroke();

c.beginPath();	
c.arc(180, 60, 20, 10, 0, 2*Math.PI); 
c.stroke();
c.fillStyle="#880088"; c.fill();

c.beginPath();
c.ellipse(180, 60,    50, 20, Math.PI/3,   0, 3*Math.PI);
	c.closePath();c.strokeStyle="red";c.stroke();
} 
function P3()  // Arc
{  var c=canvas1.getContext("2d");
c.lineWidth=2;
//...
c.strokeStyle="green";	
c.beginPath();
c.arc(120,140,20,Math.PI/4, 2*Math.PI);
c.stroke();
//...
}

function P4()  // Triangle
{  var c=canvas1.getContext("2d");
	c.lineWidth=2;
	//...
	
	c.strokeStyle="red";	
	c.beginPath();
	c.moveTo(330, 30); c.lineTo(300, 70);
	c.lineTo(360, 70); c.closePath();
	c.stroke();
		c.fillStyle="#880088"; c.fill();
	c.beginPath();
	c.moveTo(330, 100); c.lineTo(300, 70);
	c.lineTo(360, 70); c.closePath();
	c.stroke();
}
function setup () {
	createCanvas(400, 400);
	background('black');
	frameRate(10);  // kadru frekvence
}
 
function draw () {
	translate(random(0,width), random(0,height));	
	rotate(random(1, 360));
	fill('#white'); rect(0, 0, 50, 50);
	fill('red'); ellipse(25, 0, 50, 50, 0, 50);
	fill('#red'); ellipse(25, 35, 25, 25);	 	
}
function f1() {
  noLoop();  // stop
}
  
function f2() {
  loop();  // continue
}



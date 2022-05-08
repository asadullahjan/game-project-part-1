/*

The Game Project

1 - Background Scenery

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the scenery as set out in the code comments. The items
should appear next to the text titles.

Each bit of scenery is worth two marks:

0 marks = not a reasonable attempt
1 mark = attempted but it's messy or lacks detail
2 marks = you've used several shape functions to create the scenery

I've given titles and chosen some base colours, but feel free to
imaginatively modify these and interpret the scenery titles loosely to
match your game theme.


WARNING: Do not get too carried away. If you're shape takes more than 5 lines
of code to draw then you've probably over done it.


*/

function setup()
{
	createCanvas(1024, 576);
}

function draw()
{
	//fill the sky blue
	background(100, 155, 255); 



	//draw some GREEN GROUND
	noStroke();
	fill(0,155,0);
	rect(0, 432, 1024, 144); 



	//1. a cloud in the SKY
	//... add your code here
	noStroke();
	fill(255);
	ellipse(180,100,60);
	ellipse(210,90,60,80);
	ellipse(240,95,50,60);
	ellipse(270,100,50);



	//2. a MOUNTAIN in the distance
	//... add your code here
	noStroke();
	fill(121,99,66);
	triangle(550,256,450,432,650,432);
	fill(255);
	triangle(550,256,497,350,603,350);

	
	
	//3. a TREE
	//... add your code here
	noStroke();
	fill(255);
	text("tree", 800, 346);
	fill(128,113,83);
	rect(800,330,40,105);
	fill(58, 95, 11 );
	ellipse(780,320,70);
	ellipse(820,340,70);
	ellipse(860,320,70);
	ellipse(820,290,70);




	//4. a CANYON
	//NB. the canyon should go from ground-level to the bottom of the screen
	//... add your code here
	noStroke();
	fill(154,101,80);
	beginShape();
	vertex(100,432);
	vertex(140,460);
	vertex(100,575);
	vertex(200,575);
	vertex(240,460);
	vertex(200,432);
	endShape();
	fill(255,0,0);
	beginShape();
	vertex(100,575);
	vertex(115,560);
	vertex(130,575);
	vertex(145,560);
	vertex(160,575);
	vertex(175,560);
	vertex(190,575);
	endShape();




	//5. a COLLECTABLE TOKEN - eg. a jewel, fruit, coins
	//... add your code here
	strokeWeight(2);
	stroke(0,255,0);
	line(403,375,407,360);
	noStroke();
	fill(255,0,0);
	ellipse(400,380,15,20);
	ellipse(407,380,15,20);
	
}

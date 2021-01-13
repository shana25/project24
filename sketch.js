const Engine= Matter.Engine;
const World= Matter.World; 
const Bodies= Matter.Bodies; 
var world, myengine;
var paper,ground;
var bin1,bin2,bin3;


function setup()
 { 
   createCanvas(1200,600);
	myengine=Engine.create();
	world=myengine.world; 
	 
   ground=new Ground(600,480,1200,15);
   bin1=new Bin (700,395,20,150);
   bin2=new Bin (850,460,320,20);
   bin3=new Bin (1000,395,20,150)
   paper=new Paper(100,100,15);
 }
	  
function draw()
 { 
   background(0); 
   Engine.update(myengine);
	
   ground.display();
   bin1.display();
   bin2.display();
   bin3.display();
   paper.display();
 }

 function keyPressed()
 {
   if(keyCode === UP_ARROW)
   {
     console.log(keyCode)
     Matter.Body.applyForce(paper.body,paper.body.position,{x:45,y:-45});
   }
 }


const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var wall, ball, string;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    
    var wallOpt = {
        isStatic : true
    }

    wall = Bodies.rectangle(200,100,300,10,wallOpt);

    var ballOpt = {
        restitution : 0.1,
        density : 0.1
    }
    ball = Bodies.circle(200,300,40,ballOpt)
    World.add(world,ball);

    var opt = {
        bodyA : wall,
        bodyB : ball,
        stiffness : 0.1,
        lenght : 50
    }
    
    string = Constraint.create(opt)
    World.add(world,string)
}


function draw(){
    background("cyan");
    Engine.update(engine);
    rectMode(CENTER);
    rect(wall.position.x,wall.position.y,300,10);
    
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,40);

    strokeWeight(4);
    line(wall.position.x,wall.position.y,ball.position.x,ball.position.y-35);
    

    if (keyCode === 32){
        ball.position.x = mouseX;
        ball.position.y = mouseY;
    } else if (keyCode === ENTER){
        ball.position.x = 200;
        ball.position.y = 300;
    }
    
    textSize(15);
    text("Press SPACE to control the ball with your mouse",35,20);
    text("Press any other KEY to realse the ball",35,45);
    text("Press ENTER to reset the Pendulum",35,70)
}
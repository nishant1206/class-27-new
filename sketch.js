const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;
var backgroundImg, platform;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(width / 2, height, windowWidth, 20);
    platform = new Ground(150, height - 140, 440, 260);

    box1 = new Box(850, height - 80, 70, 70);
    box2 = new Box(1070, height - 80, 70, 70);
    pig1 = new Pig(960, height - 50);
    log1 = new Log(960, height - 140, 300, PI / 2);

    box3 = new Box(850, height - 160, 70, 70);
    box4 = new Box(1070, height - 160, 70, 70);
    pig3 = new Pig(960, height - 180);

    log3 = new Log(960, height - 220, 300, PI / 2);

    box5 = new Box(960, height - 240, 70, 70);
    log4 = new Log(910, height - 280, 150, PI / 7);
    log5 = new Log(1020, height - 280, 150, -PI / 7);

    bird = new Bird(100, 100);

    log6 = new Log(150, 100, 100, PI / 2);
    rope = new Rope(bird.body, log6.body);

}

function draw() {
    background(backgroundImg);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();
    log6.display();
    rope.display();

    bird.display();
    platform.display();
}
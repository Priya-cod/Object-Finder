img = "";

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}

function preload(){
ing = loadImage('dogcat.jpg');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw() {
    image(img, 0, 0, 640, 420);
    text("Dog", 45, 75);
    stroke("FF0000");
    Rect(30, 60, 450, 350 );
}
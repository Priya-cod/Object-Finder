img = "";
status = "";

function preload(){
    img = loadImage('dogcat.jpg');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Object";
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    }
    console.log(results);
}

function draw() {
    image(img, 0, 0, 640, 420);
    text("Dog", 45, 75);
    stroke("FF0000");
    rect(30, 60, 450, 350 );

    text("Cat", 320, 120);
    stroke("#FF0000");
    rect(300, 90, 270, 320 );
}

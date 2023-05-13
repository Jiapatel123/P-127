function setup() {
    canvas = createCanvas(600, 400);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(600, 500);
    video.hide();

}

function draw() {
    image(video, 0, 0, 600, 500);
}

function preload() {
    song = loadSound("music.mp3");
    song = loadSound("music2.mp3");

}
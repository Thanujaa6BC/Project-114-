mustacheX = 0;
mustacheY = 0;

function preload() {
    mustache = loadImage("https://i.postimg.cc/NfN2mfCc/png-transparent-man-s-mustache-moustache-beard-product-object-thumbnail-removebg-preview.png")
}

function setup() {
    canvas = createCanvas(400,400);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(400,400);
    video.hide();

    posenet = ml5.poseNet(video, modalLoaded);
    posenet.on('pose',gotPoses);

}

function draw() {
    image(video, 0, 0, 400, 400);
    image(mustache, mustacheX, mustacheY, 45, 45);
}

function take_snapshot() {
save("mustache_filter.png");
}

function modalLoaded() {
    console.log("PoseNet Initialized");
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        mustacheX = results[0].pose.nose.x - 15;
        mustacheY = results[0].pose.nose.y - 15;
        console.log("nose x position is" + results[0].pose.nose.x);
        console.log("nose y position is" + results[0].pose.nose.y);
    }
}
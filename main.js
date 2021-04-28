leftwristX = 0;
leftwristY = 0;
rightwristX = 0;
rightwristY = 0;
noseX = 0;
noseY = 0;
difference = 100;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 410);
    canvas = createCanvas(550, 410);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded(){
    console.log("poseNet Is Initialized!");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + " noseY = " + noseY);
        leftwristX = results[0].pose.leftWrist.x;
        leftwristY = results[0].pose.rightWrist.y;
        rightwristX = results[0].pose.rightWrist.x;
        rightwristY = results[0].pose.rightWrist.y
        difference = round(leftwristX - rightwristX);
        if(difference > 200){
            difference = 200;
        }
        console.log("leftWristX = " + leftwristX + " rightWristX = " + rightwristX + " difference = " + difference);
    }
}

function draw(){
    background("#DC143C");
    fill("#23EBC3");
    stroke("#23EBC3");
    textSize(difference);
    text("Aditya", noseX - width / 2, noseY );
}
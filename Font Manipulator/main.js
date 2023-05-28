function setup()
{
 canvas = createCanvas(550,550);
 canvas.position(560,150);
 video = createCapture(VIDEO);
 video.size(550,550);

    poseNet = ml5.poseNet(video,modelLoaded);
   

}
function modelLoaded()
{
    console.log('PoseNet is Initialized')
}
function gotPoses(results)

if(results.length > 0)
{
console.log(results);
leftWristX = results[0].pose.leftWrist.x;
rightWristX = results[0].pose.rightWrist.x;
difference = floor(leftWristX - rightWristX);
}

function draw()
{
    background(difference);
    textSize(10);
    fill('#FFE787');
    text('Aayush', 50,400);
}
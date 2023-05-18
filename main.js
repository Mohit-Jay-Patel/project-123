var canvas;
var video,posenet;
var nosex=0;
var nosey=0;
var rightwrist=0;
var leftwrist=0;
var difference=0;
function preload(){

}
function setup(){
canvas=createCanvas(550,450);
canvas.position(560,120);

video = createCapture(VIDEO);
video.size(550,500);

posenet=ml5.poseNet(video , modelload);
posenet.on("pose", gotposes);
}
function modelload(){
    console.log("Model has been loaded");
}
function draw(){
background("grey");
document.getElementById("square_side").innerHTML="Width and Height of a text will be "+difference+ "px";
fill("blue");
stroke("darkblue");
textSize(difference)
text("MOHIT",nosex,nosey);

}
function gotposes(results){
    if(results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        console.log("Nose_X - "+nosex +" Nose_Y - "+nosey);

        rightwrist=results[0].pose.rightWrist.x;
        leftwrist=results[0].pose.leftWrist.x;
        difference=floor(leftwrist-rightwrist);
        console.log("RightWrist - "+rightwrist +" LeftWrist - "+leftwrist +" Difference - " +difference);
    }
}
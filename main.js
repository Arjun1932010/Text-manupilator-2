function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,500);
    canvas.position(600,100);
    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on("pose",gotPoses);

}
function modelloaded(){
    console.log("PoseNet is initialized");
}
function gotPoses(result){
    if(result.length>0){
        console.log(result);
    }
}
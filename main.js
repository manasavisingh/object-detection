img="";
modelstatus="";
function preload(){
    img=loadImage('dog_cat.jpg');
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="status:detecting objects";
}
function modelLoaded(){
    console.log("model Loaded!");
    modelstatus=true;
    objectDetector.detect(img,gotResult);
}
function draw(){
    image(img,0,0,640,420);
    fill("#f50505");
    text("dog",45,80);
    noFill();
    stroke("#f50505");
    rect(30,60,450,350);
    fill("#033280");
    text("cat",320,120);
    noFill();
    stroke("#033280");
    rect(300, 90, 250,300);
}
function gotResult(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
}
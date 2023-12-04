function setup() {
    createCanvas(640, 480);
    video = createCapture(VIDEO);
    video.size(640, 480);
    video.hide();
  
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
  }
  function draw() {
    background(220);
    image(video, 0, 0);

    textSize(32);
  fill(255, 0, 0);
  text("Mehreen", 10, 100);
  }
  function modelLoaded() {
    console.log('PoseNet model loaded!');
  }
  function gotPoses(results) {
    if (results.length > 0) {
      leftWristX = results[0].pose.leftWrist.x;
      rightWristX = results[0].pose.rightWrist.x;
      
      let difference = floor(leftWristX - rightWristX);
      textSize(difference);
    }
  }
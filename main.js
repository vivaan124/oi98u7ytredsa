function preload () {
  classifier = ml5.imageClassifier("DoodleNet");
}

function setup () {
  canvas = createCanvas(300, 300);
  canvas.center();
  canvas.mouseReleased(classifyCanvas) 
}

function draw () {
  stroke("black");
  strokeWeight(8);
  if(mouseIsPressed) {
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}

function clearCanvas () {
    background("white")
}

function classifyCanvas () {
  classifier.classify(canvas, gotResult);
}

function gotResult (error, results) {
  if(error) console.error(error);
  if(results) {
    console.log(results)
    document.getElementById("label").innerHTML = "Label: " + results[0].label;
    document.getElementById("confidence").innerHTML = "Confidence: " + (results[0].confidence * 100).toFixed(2) + "%";
  }
}
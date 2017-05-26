var circles;
var currentDragged;
var clickRadius = 50;
var veggies;
var proteins;
var fruits;
var dairyfats;
var carbs;
var showCheckmark = false;
var showXmark = false;
var myCorrectsound;
var myWrongsound;
var score = 0;

function setup() {
  createCanvas(2000, 800);
  background(255);
  myWrongsound.setVolume(0.3);
  myCorrectsound.setVolume(0.2);

  imageMode(CENTER);

  veggies = ["Asparagus.svg", "Eggplant.svg", "Zucchini.svg", "Carrot.svg", "Broccoli.svg"]
  proteins = ["Egg.svg", "Meat.svg"]
  fruits = ["Banana.svg", "Strawberry.svg", "Apple.svg"]
  dairyfats = ["Milk.svg", "Cheese.svg", "Avocado.svg"]
  carbs = ["Potato.svg", "Bread.svg", "Noodle.svg"]

  circles = [];
  circles.push(new DraggableImage("Egg.svg", 1200, 200, clickRadius, 100, 200, (0, 50, 0, 50)));
  circles.push(new DraggableImage("Asparagus.svg", 1000, 650, clickRadius, 300, 500, (0, 0, 100, 150)));
  circles.push(new DraggableImage("Cheese.svg", 1200, 500, clickRadius, (255, 0, 255, 150)));
  circles.push(new DraggableImage("Eggplant.svg", 1200, 350, clickRadius, (255, 0, 255, 150)));
  circles.push(new DraggableImage("Milk.svg", 1200, 75, clickRadius, 200, 200, (255, 0, 255, 150)));
  circles.push(new DraggableImage("Strawberry.svg", 1000, 500, clickRadius, 200, 200, (255, 0, 255, 150)));
  circles.push(new DraggableImage("Potato.svg", 1000, 350, clickRadius, 200, 200, (255, 0, 255, 150)));
  circles.push(new DraggableImage("Banana.svg", 1000, 75, clickRadius, 400, 200, (255, 0, 255, 150)));
  circles.push(new DraggableImage("Apple.svg", 1400, 350, clickRadius, 400, 400, (200, 0, 150, 150)));
  circles.push(new DraggableImage("Zucchini.svg", 1000, 200, clickRadius, 400, 200, (255, 0, 255, 250)));
  circles.push(new DraggableImage("Bread.svg", 1450, 200, clickRadius, 400, 200, (255, 0, 255, 250)));
  circles.push(new DraggableImage("Broccoli.svg", 1200, 650, clickRadius, 400, 200, (255, 0, 255, 250)));
  circles.push(new DraggableImage("Meat.svg", 1400, 650, clickRadius, 400, 200, (255, 0, 255, 250)));
  circles.push(new DraggableImage("Noodle.svg", 1400, 500, clickRadius, 400, 200, (255, 0, 255, 250)));
  circles.push(new DraggableImage("Carrot.svg", 1400, 75, clickRadius, 400, 200, (255, 0, 255, 250)));
  circles.push(new DraggableImage("Avocado.svg", 1600, 75, clickRadius, 400, 200, (255, 0, 255, 250)));
}



function draw() {


  background(255);
  fill(232, 230, 192);
  ellipse(500, 400, 700, 700);
  strokeWeight(2);
  line(500, 400, 500, 50);
  line(500, 400, 837, 500); //vegetables
  line(500, 400, 500, 750); //protein
  line(500, 400, 175, 525); //fruit
  line(500, 400, 370, 75); //carbs

  //fill in sections 
  fill(30, 102, 24); //veggies
  arc(500, 400, 700, 700, PI + HALF_PI, PI / 11);
  fill(116, 26, 132); //proteins
  arc(500, 400, 700, 700, PI / 11, PI / 2);
  fill(242, 101, 183); //fruit
  arc(500, 400, 700, 700, PI / 2, HALF_PI + PI / 2.62);
  fill(102, 72, 24) //carbs
  arc(500, 400, 700, 700, HALF_PI + PI / 2.62, 3 * PI / 2 - PI / 8.2);
  fill(255) //dairy/fats
  arc(500, 400, 700, 700, 3 * PI / 2 - PI / 8.2, 3 * PI / 2);


  //text for portion of plate
  fill(0);
  textSize(50);
  text('Vegetables', 510, 325);
  fill(0);
  text('Proteins', 525, 550);
  fill(0);
  text('Fruits', 350, 550);
  fill(0);
  text('Carbs', 300, 350);

  push();
  fill(0);
  textSize(40);
  rotate(PI / 2.5);
  translate(-50, -650);
  text('Dairy/Fats', 300, 300);
  pop();

  //text for score 
  fill(0);
  textSize(40);
  text('Score: ' + score, 50, 100);


  for (var i = 0; i < circles.length; i++) {
    circles[i].update();
  }

  for (var i = circles.length - 1; i >= 0; i--) //draw backwards so first will be on top
  {
    circles[i].display();
  }

  if (showCheckmark === true) {
    image(checkmark, 500, 400, 600, 500);
  }

  if (showXmark === true) {
    image(xmark, 500, 400, 600, 500);
  }
}

function preload() {
  checkmark = loadImage("checkmark.svg");
  xmark = loadImage("xmark.svg");
  myWrongsound = loadSound('wrongsound.wav');
  myCorrectsound = loadSound('correctsound.mp3');
}

function DraggableImage(filename, centerX, centerY, tempRadius, w, h) {

  this.center = createVector(centerX, centerY);
  this.dragged = false;
  this.clickOffset = createVector(0, 0);
  this.img = loadImage(filename);
  this.filename = filename;
  this.radius = tempRadius;
  this.w = 200
  this.h = 130

  this.display = function() {
    image(this.img, this.center.x, this.center.y, this.w, this.h);
  }

  this.isOver = function(x, y) {
    //return true if distance between point and center is smaller than radius
    if (dist(this.center.x, this.center.y, x, y) <= this.radius) {
      return true;
    } else {
      return false;
    }
  }

  this.update = function() { //move with mouse
    if (this.dragged === true) {
      if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) //don't let it get away!
      {
        this.center.set(p5.Vector.add(createVector(mouseX, mouseY), this.clickOffset));
      }
    }
  }

  this.setDragged = function(fromX, fromY) {
    this.dragged = true;
    this.clickOffset = p5.Vector.sub(this.center, createVector(fromX, fromY));
  }

  this.releaseDragged = function() {
    this.dragged = false;
  }
}

function mousePressed() {
  if (currentDragged == null) {
    for (var i = 0; i < circles.length; i++) {
      if (circles[i].isOver(mouseX, mouseY)) {
        currentDragged = circles[i];
        currentDragged.setDragged(mouseX, mouseY);
      }
    }
  }
}

function mouseReleased() {
  //VEGETABLES 
  if (currentDragged != null) {
    currentDragged.releaseDragged();
    var p = createVector(mouseX, mouseY);
    var c = createVector(500, 400);
    p.sub(c).mult(-1);
    console.log(degrees(p.heading()));
    if (degrees(p.heading()) > (90) && degrees(p.heading()) < (180)) {
      console.log("veggies");
      //this second part of veggies code is deactivated 
      if (degrees(p.heading()) > (-180) && degrees(p.heading()) < (-163.64)) {
        console.log("veggies2");
        flashCheckmark();

      }
      if (veggies.indexOf(currentDragged.filename) != -1) {
        console.log("it's a match!");
        score++;
        flashCheckmark();
        myCorrectsound.play();
      } else {
        score--;
        flashXmark();
        myWrongsound.play();
      }

      //PROTEINS 
    } else if (degrees(p.heading()) > (-163.64) && degrees(p.heading()) < (-90)) {
      console.log("proteins");
      if (proteins.indexOf(currentDragged.filename) != -1) {
        console.log("it's a match!");
        score++;
        flashCheckmark();
        myCorrectsound.play();
      } else {
        score--;
        flashXmark();
        myWrongsound.play();
      }
      //FRUIT
    } else if (degrees(p.heading()) > (-90) && degrees(p.heading()) < (-21.3)) {
      console.log("fruit");
      if (fruits.indexOf(currentDragged.filename) != -1) {
        console.log("it's a match!");
        score++;
        flashCheckmark();
        myCorrectsound.play();
      } else {
        score--;
        flashXmark();
        myWrongsound.play();
      }

      //CARBS
    } else if (degrees(p.heading()) > (-21.3) && degrees(p.heading()) < (68.04)) {
      console.log("carbs");
      if (carbs.indexOf(currentDragged.filename) != -1) {
        console.log("it's a match!");
        score++;
        flashCheckmark();
        myCorrectsound.play();
      } else {
        score--;
        flashXmark();
        myWrongsound.play();
      }
      //DAIRY/FATS
    } else if (degrees(p.heading()) > (68.04) && degrees(p.heading()) < (90)) {
      console.log("dairy/fats");
      if (dairyfats.indexOf(currentDragged.filename) != -1) {
        console.log("it's a match!");
        score++;
        flashCheckmark();
        myCorrectsound.play();
      } else {
        score--;
        flashXmark();
        myWrongsound.play();
      }
    }

    currentDragged = null;
  }
}

function flashCheckmark() {
  showCheckmark = true;
  setTimeout(function() {
    showCheckmark = false;
  }, 1000);
}

function flashXmark() {
  showXmark = true;
  setTimeout(function() {
    showXmark = false;
  }, 1000);
}
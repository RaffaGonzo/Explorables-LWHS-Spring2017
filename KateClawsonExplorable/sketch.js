//Code adapted from The Marshmallow Game by Ms. Freed
//Game based on the "Spent" game

var canvas;

var button1;
var button2;

var gameState = "one";
var myP;

var money;

//photo variables
var amusement;
var uber;
var bus;
var junk;
var organic;
var netflix;
var theater;
var goodwill;
var mall;
var friend;
var salon;
var oldShoes;
var newShoes;
var sick;
var medicine;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style("z-index", "-1");

  //button styling
  button1 = createButton("continue");
  button1.position(width / 2 - 25, height / 1.35);
  button2 = createButton("yes");
  button2.position(width / 2 - 50, height / 1.35);

  button1.style("font-family: 'Open Sans', sans-serif;");
  button2.style("font-family: 'Open Sans', sans-serif;");

  button2.hide();
  button1.mousePressed(button1Action);
  button2.mousePressed(button2Action);

  //text styling
  myP = createP("Welcome to this budgeting exhibit!");
  myP.style("font-family: 'Open Sans', sans-serif;");
  myP.style("margin-top: 130px");
  myP.style("margin-left: 10px");
  myP.style("margin-right: 10px");
  myP.style("text-align: center");

  money = 300;

  //photo loading
  amusement = loadImage("amusement-park.jpg"); //http://www.ravepubs.com/wp-content/uploads/2015/08/park.jpg
  uber = loadImage("uber.jpg"); //http://www.wtjohnson.com/blog/assets/rainyroads.jpg
  bus = loadImage("bus.jpg"); //http://www.exploringlouisville.com/wp-content/uploads/2013/04/MP900399383.jpg
  junk = loadImage("junk.jpg"); //http://riffsburgersblues.com/wp-content/uploads/2014/12/Riffs-New-Burger4.jpg
  organic = loadImage("organic.jpg"); //http://www.themiragebanquets.com/images/soup_salad_buffet.jpg
  netflix = loadImage("netflix.jpg"); //http://sev.h-cdn.co/assets/16/20/980x490/landscape-1463496169-gettyimages-128083247.jpg
  theater = loadImage("theater.jpg"); //http://www.reddinsirishsetters.com/file/2017/02/the_advantages_of_having_more_than_123movies_to_watch.jpg
  goodwill = loadImage("goodwill.jpg"); //https://www.goodwillaz.org/wordpress/wp-content/uploads/2016/01/MEK_1058-1.jpg
  mall = loadImage("mall.jpg"); //https://cdn.enginethemes.com/directoryengine/2017/02/1.4.The-Dubai-Mall.jpg?device=tablet
  friend = loadImage("haircut-friend.png"); //https://pbs.twimg.com/media/B7GdWsBCQAEKYzu.png
  salon = loadImage("hair-salon.jpg"); //http://az616578.vo.msecnd.net/files/2016/08/26/6360777268006843011450578074_89-hair_salon7.jpg 
  oldShoes = loadImage("old-converse.JPG"); //http://imgur.com/kuPIzc4
  newShoes = loadImage("new-converse.jpg"); //https://dtpmhvbsmffsz.cloudfront.net/posts/2015/12/11/566b421499086ac14c0069e0/m_566b421499086ac14c0069e1.jpg
  sick = loadImage("sick.jpg"); //https://media.mnn.com/assets/images/2013/01/SpreadingFlu_m_0102.jpg.560x0_q80_crop-smart.jpg
  medicine = loadImage("medicine.jpg"); //http://assets.reviews.com/uploads/2017/02/24133601/REVW0406.jpg
}

function draw() {
  background(225, 236, 242);
  if (gameState != "one") {
    wallet();
  }

  //photo styling
  if (gameState == "five") {
    image(amusement, width / 2 - amusement.width / 6, height / 2, amusement.width / 3.25, amusement.height / 3.25);
  }
  if (gameState == "seven") {
    image(bus, width / 4, height / 2, bus.width / 11, bus.height / 11);
    image(uber, width / 1.85, height / 2, uber.width / 8, uber.height / 8);
  }
  if (gameState == "nine") {
    image(junk, width / 6.5, height / 2, junk.width / 20, junk.height / 20);
    image(organic, width / 1.75, height / 2, organic.width / 3, organic.height / 3);
  }
  if (gameState == "eleven") {
    image(netflix, width / 7, height / 2, netflix.width / 5.5, netflix.height / 5.5);
    image(theater, width / 1.75, height / 2, theater.width / 4, theater.height / 4);
  }
  if (gameState == "thirteen") {
    image(goodwill, width / 6, height / 2, goodwill.width / 5.5, goodwill.height / 5.5);
    image(mall, width / 1.85, height / 2, mall.width / 14, mall.height / 14);
  }
  if (gameState == "fifteen") {
    image(friend, width / 4.5, height / 2, friend.width / 4.75, friend.height / 4.75);
    image(salon, width / 1.75, height / 2, salon.width / 8, salon.height / 8);
  }
  if (gameState == "seventeen") {
    image(oldShoes, width / 5, height / 2, oldShoes.width / 12.5, oldShoes.height / 12.5);
    image(newShoes, width / 1.75, height / 2, newShoes.width / 6, newShoes.height / 6);
  }
  if (gameState == "nineteen") {
    image(sick, width / 8.5, height / 2, sick.width / 3, sick.height / 3);
    image(medicine, width / 1.85, height / 2, medicine.width / 4.5, medicine.height / 4.5);
  }
}

function button1Action() {
  if (gameState === "one") { //pressed "continue" once
    gameState = "two";
    money = money;
    myP.html("Let's say you have $300");
  } else if (gameState === "two") { //pressed "continue" twice
    gameState = "three";
    myP.html("Do you want to put $50 into a savings account?");
    button1.html("no");
    button1.position(width / 2 + 50, height / 1.35);
    button2.show();
    button2.html("yes");
    button2.position(width / 2 - 75, height / 1.35);
  } else if (gameState === "three") { //pressed "no"
    gameState = "four";
    money = money - 0;
    myP.html("You still have $" + money + ". <br/> In the future, you should consider saving money, so if something happens or you really want to buy something, you have something to fall back on.");
    button1.hide();
    button2.hide();
    button1.html("continue");
    button1.position(width / 2 - 25, height / 1.35);
    button1.show();
  } else if (gameState === "four") { //pressed "continue" three times
    gameState = "five";
    myP.html("Your friends are going to an amusement park. Admission is $70. Do you want to join them or stay home?");
    button1.html("amusement park");
    button1.position(width / 2 + 50, height / 1.35);
    button2.show();
    button2.html("stay home");
    button2.position(width / 2 - 75, height / 1.35);
  } else if (gameState === "five") { //pressed "amusement park"
    gameState = "six";
    money = money - 70;
    myP.html("You now have $" + money + ". <br/> You had a great time with your friends. However, while creating a budget, it's important to consider where your priorities are, and what you want to spend money on.");
    button1.hide();
    button2.hide();
    button1.html("continue");
    button1.position(width / 2 - 25, height / 1.35);
    button1.show();
  } else if (gameState === "six") { //pressed "continue" four times
    gameState = "seven";
    myP.html("You need to get across town, but it's raining. You can take an uber for $25 or take the bus then walk for $5.");
    button1.html("uber");
    button1.position(width / 2 + 50, height / 1.35);
    button2.show();
    button2.html("bus and walk");
    button2.position(width / 2 - 75, height / 1.35);
  } else if (gameState === "seven") { //pressed "uber"
    gameState = "eight";
    money = money - 25;
    myP.html("You now have $" + money + ". <br/> Sometimes it's nice to go the more expensive route if it means staying out of the rain or avoiding a long walk. However, make sure not to do it too often.");
    button1.hide();
    button2.hide();
    button1.html("continue");
    button1.position(width / 2 - 25, height / 1.35);
    button1.show();
  } else if (gameState === "eight") { //pressed "continue" five times
    gameState = "nine";
    myP.html("It's lunch time, and you're hungry. Do you buy a salad and soup for $15 or a burger, fries, and chips for $5?");
    button1.html("salad and soup");
    button1.position(width / 2 + 50, height / 1.35);
    button2.show();
    button2.html("burger and chips");
    button2.position(width / 2 - 75, height / 1.35);
  } else if (gameState === "nine") { //pressed "salad and soup"
    gameState = "ten";
    money = money - 15;
    myP.html("You now have $" + money + ". <br/> Although more expensive, organic food is much healthier – it may be a good idea to consider spending more money, if it means keeping you more healthy.");
    button1.hide();
    button2.hide();
    button1.html("continue");
    button1.position(width / 2 - 25, height / 1.35);
    button1.show();
  } else if (gameState === "ten") { //pressed "continue" six times
    gameState = "eleven";
    myP.html("A new movie just came out that you really want to see. Do you see it in the theater for $14 or watch netflix instead?");
    button1.html("theater");
    button1.position(width / 2 + 50, height / 1.35)
    button2.show();
    button2.html("netflix");
    button2.position(width / 2 - 75, height / 1.35);
  } else if (gameState === "eleven") { //pressed "theater"
    gameState = "twelve";
    money = money - 14;
    myP.html("You now have $" + money + ". <br/> Although it's nice to go out sometimes, when trying to save money, it may be a good idea to limit unnecessary spending, like going out to a movie.")
    button1.hide();
    button2.hide();
    button1.html("continue");
    button1.position(width / 2 - 25, height / 1.35);
    button1.show();
  } else if (gameState === "twelve") { //pressed "continue" seven times
    gameState = "thirteen";
    myP.html("You need an outfit for a job interview. Do you go to the mall and spend $100 or go to a second hand store and spend $50?");
    button1.html("mall");
    button1.position(width / 2 + 50, height / 1.35)
    button2.show();
    button2.html("second hand");
    button2.position(width / 2 - 75, height / 1.35);
  } else if (gameState === "thirteen") { //pressed "mall"
    gameState = "fourteen";
    money = money - 100;
    myP.html("You now have $" + money + ". <br/> Although the mall often has more options and can be less time consuming, it is often much more expensive than shopping second hand. When saving money, second hand stores are a great resource.")
    button1.hide();
    button2.hide();
    button1.html("continue");
    button1.position(width / 2 - 25, height / 1.35);
    button1.show();
  } else if (gameState === "fourteen") { //pressed "continue" eight times
    gameState = "fifteen";
    myP.html("You <i>really</i> need a haircut. Do you go to the salon and pay $30 or ask a friend?");
    button1.html("salon");
    button1.position(width / 2 + 50, height / 1.35)
    button2.show();
    button2.html("friend");
    button2.position(width / 2 - 75, height / 1.35);
  } else if (gameState === "fifteen") { //pressed "salon"
    gameState = "sixteen";
    money = money - 30;
    myP.html("You now have $" + money + ". <br/> Sometimes haircuts are necessary, but how nice it needs to be done is up to you and where your economic priorities lay.")
    button1.hide();
    button2.hide();
    button1.html("continue");
    button1.position(width / 2 - 25, height / 1.35);
    button1.show();
  } else if (gameState === "sixteen") { //pressed "continue" nine times
    gameState = "seventeen";
    myP.html("Your shoes are falling apart, so you need new ones. Do you buy new ones for $50 or try to make them last a little longer?");
    button1.html("new ones");
    button1.position(width / 2 + 50, height / 1.35)
    button2.show();
    button2.html("wait");
    button2.position(width / 2 - 75, height / 1.35);
  } else if (gameState === "seventeen") { //pressed "new ones"
    gameState = "eighteen";
    money = money - 50;
    myP.html("You now have $" + money + ". <br/> Although cheaper to keep your shoes for as long as possible, shoes are necessary and wearing ones that are broken can be potentially harmful to your feet.")
    button1.hide();
    button2.hide();
    button1.html("continue");
    button1.position(width / 2 - 25, height / 1.35);
    button1.show();
  } else if (gameState === "eighteen") { //pressed "continue" ten times
    gameState = "nineteen";
    myP.html("You come down with a cold and should get medicine. Do you go the pharmacy and buy medicine for $15 or wait it out?")
    button1.html("medicine");
    button1.position(width / 2 + 50, height / 1.35)
    button2.show();
    button2.html("wait");
    button2.position(width / 2 - 75, height / 1.35);
  } else if (gameState === "nineteen") { //pressed "medicine"
    gameState = "twenty";
    money = money - 15;
    myP.html("You now have $" + money + ".<br/> Keeping yourself healthy should be a priority above everything else, so budgeting in money for health purposes is necessary – especially so you can go to school/work and continue to make money, instead of wait out your cold at home.")
    button1.hide();
    button2.hide();
    button1.html("continue");
    button1.position(width / 2 - 25, height / 1.35);
    button1.show;
  } else if (gameState === "twenty") { //pressed "continue" eleven times
    gameState = "twentyOne";
    money = money;
    button1.hide();
    myP.style("margin-top: 80px");
    myP.html("Congratulations, you have made it through this budgeting simulation! <br/> You ended up with $" + money + ". <br/> <br/> An interesting thought to keep in mind while budgeting is not only thinking about where your priorities lay in terms of how you spend money, but also how consistent you are with your money-spending habits. Notice if you are often making certain types of decisions, and see if you really need to be making those decisions – maybe that money can be put toward savings, spending time with friends, or some other personal priority instead.")
  }
}

//scenario = new glasses/shoes? medicine/doctor?

function button2Action() {
  if (gameState === "three") { //pressed "yes"
    gameState = "four";
    money = money - 50;
    myP.html("You now have $" + money + ". <br/> Starting to save early and periodically is a great idea. \n You never know when you'll need it!");
    button2.hide();
    button1.html("continue");
    button1.position(width / 2 - 25, height / 1.35);
  } else if (gameState === "five") { //pressed "stay home"
    gameState = "six";
    money = money - 0;
    myP.html("You still have $" + money + ". <br/> But, you missed out hanging with your friends. While creating a budget, it's important to consider where your priorities are, and what you want to spend money on.");
    button2.hide();
    button1.html("continue");
    button1.position(width / 2 - 25, height / 1.35);
  } else if (gameState === "seven") { //pressed "bus and walk"
    gameState = "eight";
    money = money - 5;
    myP.html("You now have $" + money + ". <br/> When tight on money or trying to start good budgeting habits, it's a good idea to take the less expensive transportation option.");
    button2.hide();
    button1.html("continue");
    button1.position(width / 2 - 25, height / 1.35);
  } else if (gameState === "nine") { //pressed "burger and chips"
    gameState = "ten";
    money = money - 5;
    myP.html("You now have $" + money + ". <br/> Although junk food is cheaper, it is still important to watch what you eat, even when trying to save money.");
    button2.hide();
    button1.html("continue");
    button1.position(width / 2 - 25, height / 1.35);
  } else if (gameState === "eleven") { //pressed "netflix"
    gameState = "twelve";
    money = money - 0;
    myP.html("You still have $" + money + ". <br/> Although it's fun to go out, investing in a relatively low-cost monthly service like netflix can ultimatley decrease your spending if you find yourself staying in and watching movies or TV often.");
    button2.hide();
    button1.html("continue");
    button1.position(width / 2 - 25, height / 1.35);
  } else if (gameState === "thirteen") { //pressed "second hand"
    gameState = "fourteen";
    money = money - 50;
    myP.html("You now have $" + money + ". <br/> When saving money, it's a good idea to do shopping at a second hand store if possible. However, it can often be time consuming to find the exact thing that you want, so weighing your priorities beforehand is important.");
    button2.hide();
    button1.html("continue");
    button1.position(width / 2 - 25, height / 1.35);
  } else if (gameState === "fifteen") { //pressed "friend"
    gameState = "sixteen";
    money = money - 0;
    myP.html("You still have $" + money + ". <br/> Getting a friend to cut your hair can be a good way to save money, as long as you don't expect or need a super fancy haircut.");
    button2.hide();
    button1.html("continue");
    button1.position(width / 2 - 25, height / 1.35);
  } else if (gameState === "seventeen") { //pressed "wait"
    gameState = "eighteen";
    money = money - 0;
    myP.html("You still have $" + money + ". <br/> Although cheaper to keep your shoes for as long as possible, shoes are necessary and wearing ones that are broken can be potentially harmful to your feet.")
    button2.hide();
    button1.html("continue");
    button1.position(width / 2 - 25, height / 1.35);
  } else if (gameState === "nineteen") {
    gameState = "twenty";
    money = money - 0;
    myP.html("You still have $" + money + ". <br/> Keeping yourself healthy should be a priority above everything else, so budgeting in money for health purposes is necessary – especially so you can go to school/work and continue to make money, instead of wait out your cold at home.")
    button2.hide();
    button1.html("continue");
    button1.position(width / 2 - 25, height / 1.35);
  }
}

function wallet() {
  money = money
  textSize(16);
  rect(46, 32, 43, 23);
  text("$" + money, 50, 50);
}
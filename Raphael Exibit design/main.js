var v = 0;
var bg = 255;
var time = 2000//423000;
var baseUrl = 'https://www.youtube.com/embed/mg6-SnUl0A0';
var d = 0;
var points = 0;
var points2 = 0;
function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  background(bg);
  startButton();
}

function startButton() {
  var start = createButton('START');
  start.position(windowWidth/2, 20);
  start.mousePressed(onClick);
  start.class('start');
  start.id('play-video');
  start.attribute('href', '#');
}
//things to append to the use of the button

function onClick() {
    newVal();
    dispArt1();
    myVid();
    quiz();
}
// article came from http://downloads.ivyglobal.com/ISEE/MIDDLE_LEVEL_TEST_1/isee_middle_level_test_reading_comprehension.pdf as did questions
var articles = {
  a1: "The Great Library of Alexandria was a\r\ marvel of ancient Egypt and of human\r\ achievement. Established during the Hellenistic\r\ period sometime between 324 and 246 BCE,\r\ under Ptolemy I or perhaps Ptolemy II, the\r\ Library was reputedly an architectural wonder.\r\ More importantly, the Library housed a vast\r\ collection of works from all across the ancient\r\ world and was a major center of scholarship.\r\ The Library was charged with the ambitious\r\ mission of collecting all of the world’s books,\r\ and it employed numerous methods to acquire\r\ new works. A well-funded acquisitions\r\ department scoured the book fairs of Rhodes\r\ and Athens, purchasing individual texts or even\r\ whole libraries. Ships that landed at the harbor\r\ of Alexandria were searched for books, and the\r\ books were confiscated and copied. The copies\r\ were returned to the owners of the originals,\r\ but the originals were kept in the library. The\r\
Library also employed a number of scholars\r\ who produced original works on Astronomy,\r\ Mathematics, Physics, and many other subjects.\r\ The scribes and scholars of the Great\r\ Library not only collected books and conducted\r\ research; they also assembled collections and\r\ translated texts from around the word into\r\ Greek. Many of the works translated or\r\ assembled at Alexandria survive to this day:\r\ some of the first translations of Biblical texts '\r\ into Greek may have occurred in the time of\r\ Ptolemy I at the Library of Alexandria, although\r\ the canonical (official) versions would not be created for\r\ some hundreds of years more. In addition,\r\ much work was done to compile and edit\r\ authoritative versions of the Homeric myths\r\ for which the Greeks are so well known today.\r\ These texts have played a fundamental role in\r\ shaping our culture for hundreds of years, and\r\ were only a few of the great works of\r\ translation and editing that took place in\r\
 Alexandria in the Hellenistic period.\r\ It is ironic that the fate of the Great\r\ Library—an institution dedicated to the\r\ collection and preservation of knowledge— is\r\ shrouded in myth and mystery. Many sources\r\ say it burned down, but they cannot agree\r\ upon a date. It may have been burned more\r\ than once, either by accident or intentionally.\r\ Smaller sister institutions may have survived\r\ the original library, only to be destroyed later.\r\ The Great Library, or some version of it, could\r\ have survived for anywhere from 300 to 1,000\r\ years. Though the Library no longer stands,\r\ there is little doubt that the scholarship of the\r\ Great Library has had a great and lasting\r\ impact on history. The works that were kept,\r\ translated, or created there have had a\r\ profound influence on our culture even to the\r\ present day.",
  a2: 'Oceans cover most of Earth’s surface,\r\ and in their depths dwells most of the planet’s\r\ life. We are drawn to certain aspects of the\r\ ocean, yet most of the marine world is alien to\r\ us. Just offshore, coral reefs dazzle us with rich\r\ colors and complex ecosystems. Reef fish are\r\ often quite beautiful, displaying a stunning\r\ variety of colors and patterns, and are a\r\ favorite choice for fish tanks. However, some\r\ parts of the ocean are less familiar to us. Kelp\r\ forests—thick, dizzying mazes of life—provide\r\ food for snails and urchins, which in turn are a\r\ source of food for otters, rockfish, and other\r\ predatory animals. Far out beyond the coast,\r\ where waves tower over ships, whales and\r\ massive fish graze on microscopic plankton,\r\ extracting their sustenance (nourishment) from what appears\r\ to the naked eye to be nothing but water. \r\
  And\r\ deep down, beyond the continental shelf,\r\ beyond the warming rays of the sun, lie the\r\ abyssal plains.\r\
  Here flat grey plains of ooze stretch over\r\ incredible distances, shrouded in darkness, fed\r\ by a constant rain of decaying matter from the\r\ seas above. At first glance, these appear to be\r\ dead, empty places, but in truth they teem with\r\ life. Most of the life on the abyssal plains is\r\ bacterial, but there are larger creatures there\r\ too. Deep sea corrals grow in the abyssal\r\ plains, anchoring themselves to the sea floor.\r\ There are also less familiar forms of life, like\r\ the giant isopod and the sea pig. The giant\r\ isopod is a crustacean, like a shrimp or lobster,\r\ but it resembles a pill-bug, and can grow to be\r\ more than a foot long. The sea pig is a kind of\r\ sea cucumber. Most sea cucumbers resemble\r\ slugs, but the sea pig has developed small\r\ tubular legs and walks along the sea floor. It\r\ gets its name from these legs and from its soft\r\ pink flesh. There are fish, too, like the tripod\r\ fish which uses long thin fins to perch on top of\r\
  the ooze, or the anglerfish which uses a\r\ glowing rod-like appendage to lure prey into\r\ its hungry jaws. And there must be much more\r\ than we yet know; although this vast region\r\ covers more than half of the entire solid\r\ surface of the planet, it is one of the most\r\ poorly explored places on Earth.\r\ We have explored less than 1% of the\r\ area covered by the abyssal plains, and most of\r\ that exploration has been conducted by\r\ remotely operated vehicles. Although we do\r\ have small submarines capable of carrying\r\ people to the depths of the ocean, fewer people\r\ have gone to the abyssal plains than have gone\r\ into space. This deep frontier, vast and\r\ mysterious, will surely yield many new\r\ discoveries in years to come if we only go and\r\ look for them.'
}
// displays article
function newVal() {
 v += 1;
}
function dispArt1() {
  var art1 = createP(articles.a1)
  art1.position(20, 20);
  art1.size((windowWidth/3)*1.5, 600);//here
  art1.hide();
  if (v > 0) {
    art1.show();
  }
  setTimeout(function () {
    art1.hide();
  }, time);
}


//video function
function myVid() {
    video = createElement('iframe');
    video.size(windowWidth/3, windowHeight/2);
    video.position(windowWidth*0.6, 50);
    video.attribute('src', baseUrl+'?rel=0&autoplay=1');
    video.id('video');
    setTimeout(function () {
      video.hide();
      video.attribute('src', baseUrl+'?rel=0&autoplay=0');
    }, time);
}
// test uppon completion
  //constructor of false check box
function False_check(v) {
  this.v = v;
  this.fbox = createCheckbox(v, false);
  // fbox.attribute('margin-left', '20px');
  this.fbox.class('box');
  this.fbox.style('margin-left', '40px')
  this.fbox.changed(function (){
    if (this.checked()) {
      points -= 0.34;
      points2 -= 0.34;
    }
  });
}
  //constructor of true check box
function True_check(v) {
  this.v
  this.tbox = createCheckbox(v, false);
  this.tbox.class('box');
  this.tbox.style('margin-left', '40px');
  // tbox.attribute('margin-left', '20px');
  this.tbox.changed(function() {
    if (this.checked()) {
      points +=1;
      points2 +=1;
    }
    if (d > 0) {
      this.hide();
    }
  })
}
function quiz() {
  setTimeout(function () {
    var openingP = createP('In this section you will answer questions about the reading from memory. Once you click "NEXT" you cannot change your answer.');
    openingP.position(20, 20);
    openingP.class('openP');
    //questionP1.position(right after openingP)
    var newArtButton = createButton ('NEXT');
    newArtButton.mousePressed(function (){
      quiz2();
      var disp_points = createP('you got '+points+'/6 points on the last quiz.');
      disp_points.position(20, 5);
      var art2 = createP(articles.a2)
      art2.position(20, 40);
      art2.size((windowWidth/3)*2, 600);
      var allBoxes = selectAll('.box');
      var all_Qs = selectAll('.q');
      var openP = selectAll('.openP');
      var startB = selectAll('.start');
      for (var i = 0; i < allBoxes.length; i++) {
      allBoxes[i].hide();
      }
      for (var a = 0; a < all_Qs.length; a++) {
        all_Qs[a].hide()
      }
      for (var b = 0; b < openP.length; b++) {
        openP[b].hide();
      }
      for (var i = 0; i < startB.length; i++) {
        startB[i].hide();
      }
      this.hide();
      setTimeout(function () {
        disp_points.hide();
        art2.hide();
        points2 = 0;
      }, time);
    });
    newArtButton.position((windowWidth/2)+5,windowHeight-40);
    newArtButton.style('position', 'float');

    var questionP1 = createP('Which sentence best expresses the main idea of the passage?')
    questionP1.class('q');
    var fCheck1 = new False_check('The mysterious demise of the Great Library should serve as a warning to future generations.');
    var fCheck2 = new False_check('As the history of the Great Library shows, the confiscation of private property can sometimes be justified if it serves the common good.');
    var tCheck1 = new True_check('The Great Library was an impressive institution, which played an important role in shaping history and culture.');
    var fCheck3 = new False_check('The translation of existing works into a familiar language can be just as important as creating original works');
    var questionP2 = createP('The author of this passage would most likely agree that...');
    questionP2.class('q');
    var fCheck4 = new False_check('The ultimate fate of the Great Library should always remain a mystery.');
    var tCheck2 = new True_check('The Great Library most likely survived for only about 300 years.');
    var fCheck5 = new False_check('The preservation and advancement of knowledge is very important.');
    var fCheck6 = new False_check(' It is very surprising that ancient people were concerned about preserving books.');
    var questionP3 = createP('In line 33, “canonical” most nearly means...');
    questionP3.class('q');
    var fCheck7 = new False_check(' original.');
    var fCheck8 = new False_check('translated.');
    var fCheck9 = new False_check('ancient.');
    var tCheck3 = new True_check('official.');
    var questionP4 = createP('Which best states the main point of the second paragraph? (you will have to use your memory)');
    questionP4.class('q');
    var fCheck10 = new False_check('Ancient books were usually based on oral history');
    var fCheck11 = new False_check('Even historically important texts are only useful once they’ve been translated into a familiar language.');
    var tCheck4 = new True_check('In addition to their other activities, the scholars of the Great Library translated and edited many important texts.');
    var fCheck12 = new False_check('The scholars of the Great Library were more interested in editing existing works than in creating new ones.');
    var questionP5 = createP('What does the author suggest is the main problem with theories about the destruction of the Great Library?');
    questionP5.class('q');
    var fCheck13 = new False_check(' There are no surviving eye-witnesses to give an account of the Great Library’s destruction.');
    var fCheck14 = new False_check('All of the historical records are in Ancient Greek, which it is difficult for modern researches to translate.');
    var fCheck15 = new False_check('There is some reason to believe that the Great Library may still exist somewhere in Alexandria.');
    var tCheck5 = new True_check('There are many conflicting stories, and the details vary widely among accounts.');
    var questionP6 = createP('Which best describes the organization of the passage?');
    questionP6.class('q');
    var fCheck16 = new False_check('The author relates a personal story about his experience with a real place, and describes the historical context.');
    var tCheck6 = new True_check('The author describes the founding of a historical institution, its role in ancient society, and its decline or destruction.');
    var fCheck17 = new False_check('The author describes a theory, discusses the evidence, and examines opposing viewpoints.');
    var fCheck18 = new False_check('The author relates a story about the ancient world, and discusses its origins.');

    var all_Qs = selectAll('.q');
    for (var i = 0; i < all_Qs.length; i++) {
      all_Qs[i].style('margin-left', '40px');
      all_Qs[i].style('margin-top', '100px')
    }
  }, time);
}
function final_points_button(){
  var quiz2_score_button = createButton('YOUR SCORE');
  quiz2_score_button.position(200, 600);
  quiz2_score_button.mousePressed(function() {
    var quiz1_score = createP('You got '+points+'/6 points on your first try with the distraction.');
    quiz1_score.position(200, 100);
    var quiz2_score = createP('you got '+points2+'/6 on your second try.');
    quiz2_score.position(200, 150);
  })
}
function quiz2() {
  setTimeout(function () {
    var openingP2 = createP('This is the second quiz you should do better on this one, good luck!');
    openingP2.class('openP2')
    openingP2.position(20, 20);
    final_points_button();
    //=============================
    var questionP1 = createP('Which sentence best summarizes the author’s main idea in this passage?')
    questionP1.class('q');
    var fCheck1 = new False_check('Plankton are an essential part ofocean food chains even in the deepestareas.');
    var tCheck1 = new True_check('The ocean is a strange and wonderful place which is not yet fully explored.');
    var fCheck2 = new False_check('We should invest more in exploring the ocean than in exploring space.');
    var fCheck3 = new False_check('We don’t know very much about space and the oceans.');
    var questionP2 = createP('Which best states the main point of the first part? (use your memory)');
    questionP2.class('q');
    var fCheck4 = new False_check('People should spend more time in the ocean so that it will seem less alien.');
    var fCheck5 = new False_check('Coral reefs are probably the most beautiful part of the ocean');
    var tCheck2 = new True_check('The earth’s oceans contain a great variety of organisms and environments.');
    var fCheck6 = new False_check(') The abyssal plains are the deepest parts of the ocean.');
    var questionP3 = createP('“sustenance” most nearly means...');
    questionP3.class('q');
    var fCheck7 = new False_check('activity.');
    var fCheck8 = new False_check(' reproduction.');
    var fCheck9 = new False_check('body size.');
    var tCheck3 = new True_check('nourishment.');
    var questionP4 = createP('What is the author’s purpose in pointing out that “fewer people have gone to the abyssal plains than have gone into space”?');
    questionP4.class('q');
    var fCheck10 = new False_check('To highlight how dangerous the abyssal plains are for human beings.');
    var fCheck11 = new False_check('To imply that it is more difficult to reach the ocean floor than it is to get into space.');
    var fCheck12 = new False_check('To suggest that there is an unfair lack of funding for marine exploration compared to space exploration.');
    var tCheck4 = new True_check('To support the idea that there is a great deal of exploration left to be done in the abyssal plains.');
    var questionP5 = createP('The author’s attitude toward the ocean could best be described as...');
    questionP5.class('q');
    var tCheck5 = new True_check('fascinated.');
    var fCheck13 = new False_check('ambivalent');
    var fCheck14 = new False_check('stern.');
    var fCheck15 = new False_check('indifferent');
    var questionP6 = createP('The passage implies that rockfish and otters...');
    questionP6.class('q');
    var fCheck16 = new False_check('only feed on snails.');
    var fCheck17 = new False_check('feed on the kelp that grows in kelp forests.');
    var fCheck18 = new False_check('are more familiar than most sea creatures');
    var tCheck6 = new True_check('are both predators.');

    var all_Qs = selectAll('.q');
    for (var i = 0; i < all_Qs.length; i++) {
      all_Qs[i].style('margin-left', '40px');
      all_Qs[i].style('margin-top', '100px')
    }
  //  final_points_button();
  }, time);
}

function draw() {
  // text('you have '+points+' out of 6', 20, 90);
  background(bg)
}

var v = 0;
var bg = 255;
var time = 423000;
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
  a1: "1The Great Library of Alexandria was a\
2 marvel of ancient Egypt and of human\
3 achievement. Established during the Hellenistic\
4 period sometime between 324 and 246 BCE,\
5 under Ptolemy I or perhaps Ptolemy II, the\
6 Library was reputedly an architectural wonder.\
7 More importantly, the Library housed a vast\
8 collection of works from all across the ancient\
9 world and was a major center of scholarship.\
10 The Library was charged with the ambitious\
11 mission of collecting all of the world’s books,\
12 and it employed numerous methods to acquire\
13 new works. A well-funded acquisitions\
14 department scoured the book fairs of Rhodes\
15 and Athens, purchasing individual texts or even\
16 whole libraries. Ships that landed at the harbor\
17 of Alexandria were searched for books, and the\
18 books were confiscated and copied. The copies\
19 were returned to the owners of the originals,\
20 but the originals were kept in the library. The\
21 Library also employed a number of scholars\
22 who produced original works on Astronomy,\
23 Mathematics, Physics, and many other subjects.\
#24 The scribes and scholars of the Great\
25 Library not only collected books and conducted\
26 research; they also assembled collections and\
27 translated texts from around the word into\
28 Greek. Many of the works translated or\
29 assembled at Alexandria survive to this day:\
30 some of the first translations of Biblical texts '\
31 into Greek may have occurred in the time of\
32 Ptolemy I at the Library of Alexandria, although\
>33 the canonical versions would not be created for\
34 some hundreds of years more. In addition,\
35 much work was done to compile and edit\
36 authoritative versions of the Homeric myths\
37 for which the Greeks are so well known today.\
38 These texts have played a fundamental role in\
39 shaping our culture for hundreds of years, and\
40 were only a few of the great works of\
41 translation and editing that took place in\
#42 Alexandria in the Hellenistic period.\
43 It is ironic that the fate of the Great\
44 Library—an institution dedicated to the\
45 collection and preservation of knowledge— is\
46 shrouded in myth and mystery. Many sources\
47 say it burned down, but they cannot agree\
48 upon a date. It may have been burned more\
49 than once, either by accident or intentionally.\
50 Smaller sister institutions may have survived\
51 the original library, only to be destroyed later.\
52 The Great Library, or some version of it, could\
53 have survived for anywhere from 300 to 1,000\
54 years. Though the Library no longer stands,\
55 there is little doubt that the scholarship of the\
56 Great Library has had a great and lasting\
57 impact on history. The works that were kept,\
58 translated, or created there have had a\
59 profound influence on our culture even to the\
60 present day",
  a2: '1 Oceans cover most of Earth’s surface,\
2 and in their depths dwells most of the planet’s\
3 life. We are drawn to certain aspects of the\
4 ocean, yet most of the marine world is alien to\
5 us. Just offshore, coral reefs dazzle us with rich\
6 colors and complex ecosystems. Reef fish are\
7 often quite beautiful, displaying a stunning\
8 variety of colors and patterns, and are a\
9 favorite choice for fish tanks. However, some\
10 parts of the ocean are less familiar to us. Kelp\
11 forests—thick, dizzying mazes of life—provide\
12 food for snails and urchins, which in turn are a\
13 source of food for otters, rockfish, and other\
14 predatory animals. Far out beyond the coast,\
15 where waves tower over ships, whales and\
16 massive fish graze on microscopic plankton,\
17 extracting their sustenance from what appears\
18 to the naked eye to be nothing but water. And\
19 deep down, beyond the continental shelf,\
20 beyond the warming rays of the sun, lie the\
21 abyssal plains.\
22 Here flat grey plains of ooze stretch over\
23 incredible distances, shrouded in darkness, fed\
24 by a constant rain of decaying matter from the\
25 seas above. At first glance, these appear to be\
26 dead, empty places, but in truth they teem with\
27 life. Most of the life on the abyssal plains is\
28 bacterial, but there are larger creatures there\
29 too. Deep sea corrals grow in the abyssal\
30 plains, anchoring themselves to the sea floor.\
31 There are also less familiar forms of life, like\
32 the giant isopod and the sea pig. The giant\
33 isopod is a crustacean, like a shrimp or lobster,\
34 but it resembles a pill-bug, and can grow to be\
35 more than a foot long. The sea pig is a kind of\
36 sea cucumber. Most sea cucumbers resemble\
37 slugs, but the sea pig has developed small\
38 tubular legs and walks along the sea floor. It\
39 gets its name from these legs and from its soft\
40 pink flesh. There are fish, too, like the tripod\
41 fish which uses long thin fins to perch on top of\
42 the ooze, or the anglerfish which uses a\
43 glowing rod-like appendage to lure prey into\
44 its hungry jaws. And there must be much more\
45 than we yet know; although this vast region\
46 covers more than half of the entire solid\
47 surface of the planet, it is one of the most\
48 poorly explored places on Earth.\
49 We have explored less than 1% of the\
50 area covered by the abyssal plains, and most of\
51 that exploration has been conducted by\
52 remotely operated vehicles. Although we do\
53 have small submarines capable of carrying\
54 people to the depths of the ocean, fewer people\
55 have gone to the abyssal plains than have gone\
56 into space. This deep frontier, vast and\
57 mysterious, will surely yield many new\
58 discoveries in years to come if we only go and\
59 look for them.'
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
    var fCheck4 = new False_check('The Great Library most likely survived for only about 300 years.');
    var tCheck2 = new True_check('The ultimate fate of the Great Library should always remain a mystery.');
    var fCheck5 = new False_check('The preservation and advancement of knowledge is very important.');
    var fCheck6 = new False_check(' It is very surprising that ancient people were concerned about preserving books.');
    var questionP3 = createP('In line 33, “canonical” most nearly means');
    questionP3.class('q');
    var fCheck7 = new False_check(' original.');
    var fCheck8 = new False_check('translated.');
    var fCheck9 = new False_check('ancient.');
    var tCheck3 = new True_check('official.');
    var questionP4 = createP('Which best states the main point of the second paragraph (lines 24-42)? (you will have to use your memory)');
    questionP4.class('q');
    var fCheck10 = new False_check('Ancient books were usually based on oral history');
    var fCheck11 = new False_check('Even historically important texts are only useful once they’ve been translated into a familiar language.');
    var tCheck4 = new True_check(' The scholars of the Great Library were more interested in editing existing works than in creating new ones.');
    var fCheck12 = new False_check('In addition to their other activities, the scholars of the Great Library translated and edited many important texts.');
    var questionP5 = createP('What does the author suggest is the main problem with theories about the destruction of the Great Library?');
    questionP5.class('q');
    var fCheck13 = new False_check(' There are no surviving eye-witnesses to give an account of the Great Library’s destruction.');
    var fCheck14 = new False_check('All of the historical records are in Ancient Greek, which it is difficult for modern researches to translate.');
    var fCheck15 = new False_check('There is some reason to believe that the Great Library may still exist somewhere in Alexandria.');
    var tCheck5 = new True_check('There are many conflicting stories, and the details vary widely among accounts.');
    var questionP6 = createP('Which best describes the organization of the passage?');
    questionP6.class('q');
    var fCheck16 = new False_check('The author relates a personal story about his experience with a real place, and describes the historical context.');
    var tCheck6 = new True_check('The author describes a theory, discusses the evidence, and examines opposing viewpoints.');
    var fCheck17 = new False_check('The author describes the founding of a historical institution, its role in ancient society, and its decline or destruction.');
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
    var questionP1 = createP('question1')
    questionP1.class('q');
    var fCheck1 = new False_check('val');
    var tCheck1 = new True_check('val');
    var fCheck2 = new False_check('val');
    var fCheck3 = new False_check('val');
    var questionP2 = createP('question2');
    questionP2.class('q');
    var fCheck4 = new False_check('val');
    var fCheck5 = new False_check('val');
    var tCheck2 = new True_check('val');
    var fCheck6 = new False_check('val');
    var questionP3 = createP('question3');
    questionP3.class('q');
    var fCheck7 = new False_check('val');
    var fCheck8 = new False_check('val');
    var fCheck9 = new False_check('val');
    var tCheck3 = new True_check('val');
    var questionP4 = createP('question4');
    questionP4.class('q');
    var fCheck10 = new False_check('val');
    var fCheck11 = new False_check('val');
    var fCheck12 = new False_check('val');
    var tCheck4 = new True_check('val');
    var questionP5 = createP('question5');
    questionP5.class('q');
    var tCheck5 = new True_check('val');
    var fCheck13 = new False_check('val');
    var fCheck14 = new False_check('val');
    var fCheck15 = new False_check('val');
    var questionP6 = createP('question6');
    questionP6.class('q');
    var fCheck16 = new False_check('val');
    var fCheck17 = new False_check('val');
    var fCheck18 = new False_check('val');
    var tCheck6 = new True_check('val');

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

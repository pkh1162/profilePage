
$(function(){
  
$('[data-toggle="tooltip"]').tooltip({
  "placement" : "auto right",
  "title" : "Use the wheel at the top of the page to navigate the profile. If you see me at any point, I might provide some witty insight into the great Creator's mind at the time of its making."
}); 


//Draggable variables///////
var canDrag = false;
//Draggable variables///////


//Element Dimension variables///////
var initialBoxW = $(".svgContainer").width();
var $box = $(".svgContainer");
$sprite = $(".sprite");

var boxH;
var boxW;
var boxOffset;  
 
var spriteH;
var spriteW;
var spriteOffset;

//Element Dimension variables///////


//Function to update dimensions before animation///////

var update = function(){

boxH = $box.height();
boxW = $box.width();
boxOffset = $box.offset();  
  
var fract = boxW/initialBoxW;
spriteH = $sprite.height();
spriteW = $sprite.width()*fract;
spriteOffset = $sprite.offset(); 

 // initialBoxW = boxW;
}

update();


//Function to update dimensions before animation///////


//Svg variables//////////////////////////////////////

var $svg1 = $(".set1");
var $svg2 = $(".set2");

var svg1H = $svg1.height();
var svg2H = $svg2.height();
var svg1W = $svg1.width();
var svg2W = $svg2.width();
var svgOffset = boxH/4;

circleSVG = "M18.961235761642456,31.31782555580139 C18.961235761642456,19.715615611050012 28.13526891081373,10.317825555801392 39.461235761642456,10.317825555801392 C50.787202612471184,10.317825555801392 59.961235761642456,19.715615611050012 59.961235761642456,31.31782555580139 C59.961235761642456,42.92003550055277 50.787202612471184,52.31782555580139 39.461235761642456,52.31782555580139 C28.13526891081373,52.31782555580139 18.961235761642456,42.92003550055277 18.961235761642456,31.31782555580139 z";


//Svg variables//////////////////////////////////////




//Sprite text variables/////////////////////////////////////// 

var $spriteHome = $(".text").html();
var $spriteAnswer = $(".text .spriteText");
var $spriteOptions = $(".spriteOptions");
var q0Opts = $spriteOptions.html();
var q0Ans = $spriteAnswer.text();

var q1Ans = "Your will be done. Just drag me into the middle of the screen to get going.";

var q2Ans = "The floating fragments you see to the right are what will be used to construct the Creator's profile. They are my siblings, and I am honoured that the Creator destined me to be the final piece. At least, that is the conceit. In reality, I exist because the Creator got a bit carried away while designing the animation to your right. Anyway, just place me in the center of the screen to get to the profile.";

var q3Ans = "That is quite an unfortunate affair. They had to be disposed of due to, what the Great Creator would describe as, excessive creepiness. Google Zelda moon for some kind of idea of what they looked like. I am proud to say that I am the least creepy design which the Creator had time to make. To get to the profile, place me in the center of the abstract mess to my right.";

//Sprite text variables/////////////////////////////////////// 




var t0 = new TimelineMax(); //Controls sprite and sprites text animations
var t1 = new TimelineMax(); //Controls svg rotation animations
var t2 = new TimelineMax(); //Controls animation after sprite is moved to center.
var t3 = new TimelineMax(); //Controls sprite animation moving to center of page after drag and drop 



t0.from(".sprite", 3, {opacity:0}, 0)
.from(".triangle, .text", 3, {opacity:0}, 2);



t1
  .staggerTo(".set1, .set2", 7, {opacity: 1}, 0.8, 0)
  .fromTo(".set1, .set2", 6, {scale: 1}, {scale:1.5, yoyo:true,repeat:-1}, 0)
  .staggerTo(".set1", 4, {bezier:{curviness: 1.5, values:[{x:(boxW/4), y:(boxH/3)}, {x:0, y:(boxH-(svg1H))}, {x:-(boxW/4), y:(boxH/3)}, {x:0, y:0}], autoRotate:true}, ease:Linear.easeNone, repeat: -1}, 0.8, 0)
  .staggerTo(".set2", 7, {bezier:{curviness: 1.75, values:[{x:(-boxW/3)-svgOffset, y:(boxH/4)+svgOffset}, {x:0, y:boxH + svgOffset +svg2H/2}, {x:(boxW/3)+svgOffset, y:(boxH/4)+svgOffset}, {x:0, y:0}], autoRotate:true},ease:Linear.easeNone, repeat: -1}, 1.5, -7);
 



/*
$(window).on("resize", function(event){
update();
  
  $(".data").text("SVGOff: Top: " + boxOffset.top+ " Left: " + boxOffset.left);
  $(".spritePos").text("Sprite: Top: " + y.top+ " Left: " + y.left + "spriteWidth: " + $(".set2").width() + "sprH: " + $(".set2").height());

})
*/

  
  
  if ($(window).width() < 758){
    console.log("the width is: " + $(window).width());
   // $("*").css("backgroundColor", "red");
    
    $(".introRow").remove();
    $(".introRow, .footer").css("display", "none");
        $("body, html").css("backgroundColor", "white");

    $("#spriteMe").fadeIn(200);
    $("#pieBox").css("display", "block").css("opacity", 1).css("position", "absolute");
    $("#pieRotate").css("display", "block").css("opacity", 1);
  
    
  }

  
  
  

//Sprite text functions//////////////////////////
  
  $("label").hover(function(){
  $(this).css("backgroundColor", "red");
},
 function(){
  $(this).css("backgroundColor", "white");
})

 
$(".text").on("click", function(event){
  var choice = $(event.target).attr("class");
  
  if ($(event.target).hasClass("goBack")) {
    $(".goBack").hide();    
    replaceSpriteText("q0", true);
    replaceAnswers("q0");
   
    
  }
  else if(choice!=="spriteText"){
    if(canDrag==false){
      dragNow();  
    }
    
    
    $(".goBack").show();
    console.log("choice is: " + choice);
    replaceSpriteText(choice, true);
   
  }
  
})  


function replaceAnswers(ans) {
  switch (ans) {
    case "q0" : 
      $($spriteOptions).show();
      break;
  }
}

function replaceSpriteText (spriteChoice, empty){
  
  if(empty==true){
    $spriteOptions.hide();
  }

  switch (spriteChoice) {
    case "q0" : 
      $spriteAnswer.text(q0Ans);
      break;
    case "q1" : 
      $spriteAnswer.text(q1Ans);
      break;     
    case "q2" :   
      $spriteAnswer.text(q2Ans);
      break;
    case "q3" : 
      $spriteAnswer.text(q3Ans);
      break;
    
  }
}



//$(".blob").on("click", function(){
  
  function blobIt(){
    update();
    var pie = $("#pieRotate").offset().top;
    var sphereOff = $(".sphere").offset().top;  
    
    var svg1YMove = (boxH - svg1H)/2;
    var svg2YMove = svg1YMove + 100;

    t2
      .staggerTo(".set1", 1, {opacity:1, scale: 0,x:0,delay:1, y:svg1YMove, timescale:2, ease:Power4.easeOut} , 0, 0)
      .staggerTo(".set2", 1, {opacity:1, scale: 0, x:0,delay:1, y:svg2YMove, timescale:2}, 0, 0)
      .to(".sphere", 3, {borderRadius: 100, scale:1, opacity:1, rotation: "360deg", zIndex:1000},1)
      .to(".sphere", 5, {y:-165, opacity:0}, 4.5)
      .to("body", 5, {"backgroundColor": "white"}, 6)
      .to("#pieBox", 1, {"display": "block", "position":"absolute", opacity:1, onComplete:function(){
       $(".wheel").prop("disabled", "true");
      }}, 6)
      .to("#pieRotate, #pieBox", 3, {"zIndex":555, opacity:1, onComplete:function(){
        $(".introRow").hide();
      //  TweenMax.from("#spriteMe", 3, {opacity:0,               delay:0.2});
      
      $("#spriteMe").fadeIn(500);
        $(".wheel").prop("disabled", false);
      }}, 8);
    
   
    t2.timeScale(1);
  
  }

  
//})



/*
$(".test").on("click", function(){
  console.log("class added");
  TweenMax.set(".test", {className: '+=pop'});
  var newTween = TweenMax.to(".test", 2, {scale:3})
  .to(".test", 1, {backgroundColor:red});
})
*/




/*
$("svg").hover(
 function() {
   thisPath = $(this).find("path").attr("d");
  $(this).find("path").attr("d", circleSVG);
 TweenMax.to($(this), 0.6, {skewX:"20deg", opacity: 0.1, delay:0, borderRadius: 50, scale:1.5});
  
 },
 function() {
   $(this).find("path").attr("d", thisPath);
 TweenMax.to($(this), 0.4, {skewX: "0deg", opacity: 1, borderRadius: 0, scale:1});
 });


*/





function dragNow(){
  
canDrag = true;

var dragSprite = Draggable.create($sprite, {
  bounds:window,
  onDrag: function(){
    $(".text, .triangle").css("display", "none");
   
  },
  onDragEnd:function(e) {
    
     
    
			if (this.hitTest($box, "100%")) {
				
        update();
        
        boxW = $box.width();
     
        var centerSpriteX = boxOffset.left + boxW/2-spriteW/1.75;  
        var centerSpriteY = boxOffset.top -200;
 
       
        t3.to($sprite, 3, {y:centerSpriteY, x:centerSpriteX, scale:1}, 0)
        .to($sprite, 2, {scale:2, opacity:0, onComplete:function(){
          t1.timeScale(3);
          blobIt();
          dragSprite[0].disable();
        }},2.8);
       
        //onDrop(this.target, droppables[i]);
      }
		}
	
});	
  
   
}      


  });
  





  
  $(document).ready(function () {
  //your code here



var n = 0;
var currentPosition = 0;
var rotate180 = 0;
var rotatePieBy = 0;
var rotateTitleBy = 0;

//$("#pieBox").hide();

$("#pie-upper-left").on("click", function(){
  rotate("about" , this.id, -30, -30);
  // n += 90;
 // $(this).css("transform", "rotate(" + n + "deg)");
 // console.log(this.id);
  
}); 

$("#pie-upper-right").on("click", function(){
 rotate("portfolio" ,this.id, 30, -30);
}); 

$("#pie-lower-left").on("click", function(){
  rotate("contact" ,this.id, -30, 30);

  
}); 

$("#pie-lower-right").on("click", function(){
  rotate("blog" ,this.id, 30, 30);

  
}); 

var y = 0;
$("#spin").on("click", function(){

  if(y ==360){
    currentPosition= 0;
    y= 0;
  }
  y += 45;
  currentPosition += 45;
  
  $("#y").text(y);
  
  $("#pieRotate").css("transform", "rotate(" + y + "deg)")
  
  if (currentPosition == 135){
    rotate180 += 225;
  $("#pie-lower-left p").css("transform", "rotate(" + rotate180 + "deg)");
}
else if (currentPosition == 225){
  
}
  
  
})





/*
 $('#pie-upper-left').click(function() {
      $(this).animate({
        left: "-=50px",
       // fontSize: "+=2px"
      }, function(){
        //animate complete
      });
    });
*/


function aboutMeEffects (){
  TweenMax.from("#aboutMe .icons, #aboutMe h3", 3, {opacity:0, delay:1.2});
  TweenMax.from("#bio p", 3, {opacity:0, x:-200});
  TweenMax.from("#hobbies p", 3, {opacity:0, y:200});
  TweenMax.from("#education p", 3, {opacity:0, x:200});
}
    
function contactMeEffects (){
  TweenMax.from("#contactMe h2", 3, {opacity:0, delay:1.2});
  TweenMax.from("#contactMe #faceAndEmail, #friendly, #contactPlaces", 3, {opacity:0, y:200});
  $("#contactMe").css("display", "block");
}
    
function portfolioMeEffects (){
  TweenMax.from("#portfolioMe h2", 3, {opacity:0, delay:1.2});
  TweenMax.from("#portfolioMe #portfolioDesc", 3, {opacity:0, y:200});
  TweenMax.staggerFrom("#portfolioMe .row>div", 3, {opacity:0, y:200}, 0.1);

}    



function rotate(pick, sectionToRotate, x, y) {
  
  $("button").prop("disabled",true);
 
 setTimeout(function(){
 $("button").prop("disabled",false);
   
 }, 3000)
 
  removeActive();  
  fadeOuts();
  
  var block = "#" + sectionToRotate;
  var moveXBy = x;
  var moveYBy = y;
  if (pick == "about"){
    addActive(block);
    rotateBy(45, -45);
    $("#aboutMe").fadeIn(2500);
    
    aboutMeEffects();
    
  }
  else if (pick == "portfolio"){ 
    addActive(block);
    rotateBy(315, 45);
    $("#portfolioMe").fadeIn(2500);
    portfolioMeEffects();
  }
  else if (pick == "contact"){
    addActive(block);
    rotateBy(135, +225);
    $("#contactMe").fadeIn(2500);
    contactMeEffects();
    
  }
  else if (pick == "blog"){
    addActive(block);
    rotateBy(225, 135);
    $("#blogMe").fadeIn(2500);
  }
  else{
    rotateBy(0, 0);
  }
  
  $("#pieRotate").css("transform", "rotate(" + rotatePieBy + "deg)");
  console.log(rotateTitleBy);
  $(block + " p").css("transform", "rotate(" + rotateTitleBy + "deg)");
  
    
  
  
  $("#pieRotate").on('transitionend',   
    function(e) {
    console.log(this);
    // code to execute after animation ends
    // $(block + " p").css("color", "red").css("color", "black").css("color", "red");
     
   
   // $(block).css("transform", "scale(1,1)");
    
   //   $(block).css("transform", "translate(" + x + "px, " + y + "px)")
   // $(block).animate({left: x, top: y});
    
    
   
  
  
    });
  
  
  rotatePieBy = 0;
    rotateTitleBy = 0;


  
}

 




function rotateBy(a, b){
  rotatePieBy += a;
    rotateTitleBy += b;
}


function removeActive() { 
  $("#pie-upper-left").removeClass("picked");
  $("#pie-upper-right").removeClass("picked");
  $("#pie-lower-left").removeClass("picked");
  $("#pie-lower-right").removeClass("picked");  
}

function addActive(nowActive){
  $(nowActive).addClass("picked");
}

function fadeOuts() {
  //TweenMax.to("#aboutMe", 3, {opacity:0});
  $("#aboutMe").fadeOut(500);
   $("#contactMe").fadeOut(500);
  $("#portfolioMe").fadeOut(500);
  $("#blogMe").fadeOut(500);
  $("#spriteMe").fadeOut(500);
}







//Modal code////////////////////

//Row 1
$("#wiki").on("click", function(){
  var title = "Wiki Viewer";
  var image ="https://res.cloudinary.com/dxqcxsull/image/upload/v1471624863/wiki2_bhoyak.png";
  var description = "Search application which uses the wikipedia search api. Made using HTML, CSS and JQuery.";
  
  initModal(title, image, description);
})

$("#tic-tac-toe").on("click", function(){
  var title = "tic-tac-toe";
  var image = "https://res.cloudinary.com/dxqcxsull/image/upload/v1471628454/tictactoe1_lw43qv.png";
  var description = "Simple game of tic-tac-toe. Made using HTML, CSS and JQuery.";
  
  initModal(title, image, description);
 
})

$("#twitch").on("click", function(){
  var title = "Twitch Center";
  var image = "https://res.cloudinary.com/dxqcxsull/image/upload/v1471629446/twitch3_xvkczp.png";
  var description = "Center for chosen twitch tv streams. Made using HTML, CSS and JQuery. Embedded videos do not work on Edge.";
  
  initModal(title, image, description);    
})

$("#simon-says").on("click", function(){
  var title = "Zelda Says";
  var image = "https://res.cloudinary.com/dxqcxsull/image/upload/v1476650922/https_zelda_says.herokuapp.com_akqkrs.png";
  var description = "Zelda inspired Simon Says game. Made using HTML, CSS and JQuery.";
  
  initModal(title, image, description);
})

//End of Row 1///////////////

//Row 2///////////////////

$("#timestamp").on("click", function(){
 var title = "Twitch Center";
  var image = "https://res.cloudinary.com/dxqcxsull/image/upload/v1471866573/Url_Time_Stamp_Application_tjaphh.png";
  var description = "Simple unix timestamp application. Made using HTML, CSS and Node/Express.";
  
  initModal(title, image, description);
})

$("#bubbles").on("click", function(){
  var title = "D3 Bubble Chart App";
  var image = "http://res.cloudinary.com/dxqcxsull/image/upload/v1489419195/screenshot-pkh1162.github.io-2017-03-13-15-31-09_gixba7.png";
  var description = "Application which allows you to view and sort through user coding projects using bubble charts. Created with React/Redux, d3, Express and Mongoose ";
  
  initModal(title, image, description);
})

$("#image-abstraction").on("click", function(){
  var title = "Image Abstraction Layer";
  var image = "https://res.cloudinary.com/dxqcxsull/image/upload/v1471866573/Image_Abstraction_Layer_revm3y.png";
  var description = "Image search application. Made using HTML, CSS, Node/Express and Mongodb.";
  
  initModal(title, image, description);
})

$("#voting-app").on("click", function(){
  var title = "Voting Application";
  var image = "https://res.cloudinary.com/dxqcxsull/image/upload/v1477908826/Public_Poll_dhzeb4.png";
  var description = "Voting application. Created using HTML, CSS, Node/Express, Clementine.js and Mongoose";
  
  initModal(title, image, description);
})

//End of Row 2/////////////////

//Row 3///////////////////

$("#calculator").on("click", function(){
  var title = "Simple Calculator";
  var image = "https://res.cloudinary.com/dxqcxsull/image/upload/c_scale,h_606,w_1349/v1476652795/CodePen_FreeCodeCamp_Calculator_saokls.png";
  var description = "Simple calculator. Made using HTML, CSS and JQuery.";
  
  initModal(title, image, description);
})

$("#quoteGen").on("click", function(){
  var title = "Random Quote Generator";
  var image = "https://res.cloudinary.com/dxqcxsull/image/upload/v1471870140/CodePen_Quote_Generator_pduxzl.png";
  var description = "Simple quote generator with tweeting functionality. Made using HTML, CSS and JQuery.";
  
  initModal(title, image, description);
})

$("#weatherApp").on("click", function(){
 var title = "Weather Application";
  var image = "https://res.cloudinary.com/dxqcxsull/image/upload/v1471870968/weatherApp_vdhtzy.png";
  var description = "Weather Application. Made using HTML, CSS and Jquery.";
  
  initModal(title, image, description);
})

//End of Row 3 ////////////

function initModal(title, image, description) {
 // $(".modal-heading").html(title);
  
  $(".modal-body").html('<img class="img-responsive" src="' + image + '">');
  
  $(".modal-footer").html("<p>" + description + "<p><button type='button' class='btn btn-default' data-dismiss='modal'>Close</button>");  
}


///End of modal code//////////////



});

  




  

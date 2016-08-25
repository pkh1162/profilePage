$(document).ready(function () {
  //your code here



var n = 0;
var currentPosition = 0;
var rotate180 = 0;
var rotatePieBy = 0;
var rotateTitleBy = 0;

//$("#pieBox").hide();

jQuery("#pie-upper-left").on("click", function(){
  rotate("about" ,this.id, -30, -30);
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



function rotate(pick, sectionToRotate, x, y) {
  removeActive();  
  fadeOuts();
  
  var block = "#" + sectionToRotate;
  var moveXBy = x;
  var moveYBy = y;
  if (pick == "about"){
    addActive(block);
    rotateBy(45, -45);
    $("#aboutMe").fadeIn("slow");
  }
  else if (pick == "portfolio"){ 
    addActive(block);
    rotateBy(315, 45);
     $("#portfolioMe").fadeIn("slow");
  }
  else if (pick == "contact"){
    addActive(block);
    rotateBy(135, +225);
     $("#contactMe").fadeIn("slow");
    
  }
  else if (pick == "blog"){
    addActive(block);
    rotateBy(225, 135);
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
  $("#aboutMe").fadeOut("fast");
   $("#contactMe").fadeOut("fast");
  $("#portfolioMe").fadeOut("fast");
}







//Modal code////////////////////

//Row 1
$("#wiki").on("click", function(){
  var title = "Wiki Viewer";
  var image ="http://res.cloudinary.com/dxqcxsull/image/upload/v1471624863/wiki2_bhoyak.png";
  var description = "Search application which uses the wikipedia search api. Made using HTML, CSS and JQuery.";
  
  initModal(title, image, description);
})

$("#tic-tac-toe").on("click", function(){
  var title = "tic-tac-toe";
  var image = "http://res.cloudinary.com/dxqcxsull/image/upload/v1471628454/tictactoe1_lw43qv.png";
  var description = "Simple game of tic-tac-toe. Made using HTML, CSS and JQuery.";
  
  initModal(title, image, description);
 
})

$("#twitch").on("click", function(){
  var title = "Twitch Center";
  var image = "http://res.cloudinary.com/dxqcxsull/image/upload/v1471629446/twitch3_xvkczp.png";
  var description = "Center for chosen twitch tv streams. Made using HTML, CSS and JQuery. Note: Embedded videos do not work on Edge. I narrowed the problem down to the Twitch Video Api, but I haven't found a solution to it yet.";
  
  initModal(title, image, description);    
})

$("#simon-says").on("click", function(){
  var title = "Simon Says";
  var image = "http://res.cloudinary.com/dxqcxsull/image/upload/v1471628926/simonsays1_azfbzg.png";
  var description = "Simon Says game. Made using HTML, CSS and JQuery. Note: Have not completed the user interface yet.";
  
  initModal(title, image, description);
})

//End of Row 1///////////////

//Row 2///////////////////

$("#timestamp").on("click", function(){
 var title = "Twitch Center";
  var image = "http://res.cloudinary.com/dxqcxsull/image/upload/v1471866573/Url_Time_Stamp_Application_tjaphh.png";
  var description = "Simple unix timestamp application. Made using HTML, CSS and Node/Express.";
  
  initModal(title, image, description);
})

$("#shortener").on("click", function(){
  var title = "Url Shortener";
  var image = "http://res.cloudinary.com/dxqcxsull/image/upload/v1471866573/Url_Shortener_Application_xbox6o.png";
  var description = "Url shortening application. Made using HTML, CSS, Node/Express and Mongodb.";
  
  initModal(title, image, description);
})

$("#image-abstraction").on("click", function(){
  var title = "Image Abstraction Layer";
  var image = "http://res.cloudinary.com/dxqcxsull/image/upload/v1471866573/Image_Abstraction_Layer_revm3y.png";
  var description = "Image search application. Made using HTML, CSS, Node/Express and Mongodb.";
  
  initModal(title, image, description);
})

$("#file-meta").on("click", function(){
  var title = "File Meta Application";
  var image = "http://res.cloudinary.com/dxqcxsull/image/upload/v1471866573/File_Meta_Application_ajxutz.png";
  var description = "File meta application. Made using HTML, CSS, Node/Express.";
  
  initModal(title, image, description);
})

//End of Row 2/////////////////

//Row 3///////////////////

$("#calculator").on("click", function(){
  var title = "Simple Calculator";
  var image = "http://res.cloudinary.com/dxqcxsull/image/upload/v1471870140/CodePen_FreeCodeCamp_Calculator_dszlge.png";
  var description = "Simple calculator. Made using HTML, CSS and JQuery.";
  
  initModal(title, image, description);
})

$("#quoteGen").on("click", function(){
  var title = "Random Quote Generator";
  var image = "http://res.cloudinary.com/dxqcxsull/image/upload/v1471870140/CodePen_Quote_Generator_pduxzl.png";
  var description = "Simple quote generator with tweeting functionality. Made using HTML, CSS and JQuery.";
  
  initModal(title, image, description);
})

$("#weatherApp").on("click", function(){
 var title = "Weather Application";
  var image = "http://res.cloudinary.com/dxqcxsull/image/upload/v1471870968/weatherApp_vdhtzy.png";
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

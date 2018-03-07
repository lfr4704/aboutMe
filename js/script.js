// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}


// this creates rectangles

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var rectangleWidth = 100;
var number;

//button

function generateRectangles() {
  
  for (var i = 20; i < 900; i = i + 100) {

  number = Math.random() * 100;
  number = Math.floor(number);
  
  ctx.rect(i, 20, rectangleWidth, number);
  ctx.stroke();
  ctx.fillStyle = 'rgba(255,0,0,0.5)'; 
  ctx.fill();
}

};


/*function sortRectangles() {
  
  console.log(rectangleWidth * number );
};*/

// this is to add scrolling effect to anchors

$(document).ready(function(){
 
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });



});
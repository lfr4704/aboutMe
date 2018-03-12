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


// variable to be used for functions below

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var rectangleWidth = 100;
var positionTop = 20;
var positionLeft=[];
var rectangleHeight; //rectangle height to be generated randomly 
var newArray = [];
var arrayLength;
var swapped = false;
var tempArray =[];
var otherTempArray = [];


//click on button to creates rectangles

function generateRectangles() {
  
  for (var i = 20; i < 900; i = i + rectangleWidth) {

  rectangleHeight = Math.random() * 100;
  rectangleHeight = Math.floor(rectangleHeight);
  
  ctx.rect(i, positionTop, rectangleWidth, rectangleHeight);
  ctx.stroke();
  ctx.fillStyle = 'rgba(255,0,0,0.5)'; 
  ctx.fill();
  newArray.push(rectangleHeight);
  arrayLength = newArray.length;
  positionLeft.push(i);
}

/*function position(newArray[rectangleHeight]) {
  ctx.rect(i, 20, rectangleWidth, rectangleHeight);
}*/

console.log("this is the original random array of rectangle heights " + "[" + newArray + "]");
console.log("this is the original restangles position for rectangles " + "[" + positionLeft + "]");
return ;
};


// this sorts the rectangle heights stored in the array.

function sortRectangles() {
  
  for (var n = 0; n < arrayLength; n++) {

    if (newArray[n] > newArray[n+1]){
      [newArray[n], newArray[n+1]] = [newArray[n+1], newArray[n]];
      [positionLeft[n], positionLeft[n+1]] = [positionLeft[n+1], positionLeft[n]];
      /*
       ctx.rect(n, 20, rectangleWidth, newArray[n]);
        ctx.stroke();
        ctx.fillStyle = 'rgba(255,0,0,0.5)'; 
        ctx.fill();
        */
      } 

      tempArray = newArray;  
      otherTempArray = positionLeft;
      console.log("n " + n + "[" + tempArray + "]");
      console.log("n " + n + "[" + otherTempArray + "]");

       for (var  x= 0; x < arrayLength - 1; x++) {

      if(tempArray[x] > tempArray[x+1]){
      [tempArray[x], tempArray[x+1]] = [tempArray[x+1], tempArray[x]];
      [otherTempArray[x], otherTempArray[x+1]] = [otherTempArray[x+1], otherTempArray[x]];
      } else if (tempArray[x] <= tempArray[x+1]) {continue;}

      console.log("x " + x + "[" + tempArray + "]");
      console.log("x " + x + "[" + otherTempArray + "]");
    }

    }
    return tempArray;
  };

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
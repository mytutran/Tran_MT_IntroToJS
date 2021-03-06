// this is a self-invoking annonymous function
// also alled an IIFE
// also called a module
(() => {
  // for Python: print("something");
  console.log("something - from Javascript");

  //Setting a variable
  //find the button element on the page by its ID with Javascript
  let theButton = document.querySelector("#myButton"),
      theHeading = document.querySelector('h1'),
      //svgImage = document.querySelector("#svgGraphic");
      allSVGs = document.querySelectorAll(".svg"); //.svg is a class

  //this function changes the heading text
  function changeText() {
    theHeading.textContent = "Hello there from the console";
  }

  //log the id of the svg to the console when a user hovers on it
  function logSVG() {
    console.log(this.id);
  }

  theButton.addEventListener("click", changeText);
  //svgImage.addEventListener("click", logSVG);
  //svgImage2.addEventListener("click", logSVG);

  //loop through the collection and apply our event handling to each element
  allSVGs.forEach(item => item.addEventListener('click',logSVG));
  //document.querySelector('h1').textContent= "Hello there from the console";

})();

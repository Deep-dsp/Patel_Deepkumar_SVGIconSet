// this is a self-invoking anonymous function
// also called an ITFE
// also called Module

(() => {

  console.log("some message - from javascript");

  // find the button element on the page by its ID with javascript
  let theButton = document.querySelector("#myButton"),
  theheading = document.querySelector('h1'),
  svgImage = document.querySelector('#svgGraphic');

  // this function changes heading text
  function changeText()
  {
    theheading.textContent = "Hello there from the console";
  }

  function logSvg()
  {
    console.log(this.id);
  }

  theButton.addEventListener("click", changeText);
  svgImage.addEventListener("mouseover", logSvg);
  //document.querySelector('h1').textContent = "Hello there from the console";


})();

(() => {
  // this is an IIFE -> also an implementation of the module pattern

  // always go and get the elements you're working with - variable
  const mySpan = document.querySelector('main span'),
        myObject = document.querySelector('.svg-img');

  // functionality goes here => what we want to have happen
  function toggleSelection() {
    // we want to update our UI to make it look like we are making a selection
    //debugger;
    //add a CSS class to the element with JavaScript
    //toggle CSS class to the element with Javacript
    this.classList.toggle("selected");
    console.log(this.id)
  }

  // figure out what triggers will drive the functionality
  mySpan.addEventListener('click', toggleSelection);
  myObject.addEventListener('click', toggleSelection);
})()

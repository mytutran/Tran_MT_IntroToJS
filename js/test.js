(() => {
  // this is an IIFE -> also an implementation of the module pattern

  // always go and get the elements you're working with
  const mySpan = document.querySelector('main span');

  // functionality goes here => what we want to have happen
  function toggleSelection() {
    // we want to update our UI to make it look like we are making a selection
    //debugger;
    //add a CSS class to the element with JavaScript
    this.classList.add("selected");
  }

  // figure out what triggers will drive the functionality
  mySpan.addEventListener('click', toggleSelection);

})()

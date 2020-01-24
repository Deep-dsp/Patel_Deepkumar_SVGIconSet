(() =>
{
  //always go and get the elements you are working with.
  const mySpan = document.querySelector('main span'),
        mySpan2 = document.querySelector('main span');

  function toggleSelecetion()
  {
    //want to update out UI to make it look like we're making selection
    this.classList.add("selected"); //add a CSS class to the elemeny with javascript
  }

  // function deselect()
  // {
  //     this.classList.remove("selected");
  // }

  mySpan.addEventListener('click', toggleSelecetion);
  // mySpan2.addEventListener('click', deselect)

})();

(() =>
{
  //always go and get the elements you are working with.
  const mySpan = document.querySelector('main span'),
        myObject = document.querySelector('.svg-img');

  function toggleSelecetion()
  {
    //want to update out UI to make it look like we're making selection
    this.classList.toggle("selected"); //add a CSS class to the elemeny with javascript
    console.log(this.id);
  }

  mySpan.addEventListener('click', toggleSelecetion);
  myObject.addEventListener('click', toggleSelecetion);

})();

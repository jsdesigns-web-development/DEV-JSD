 /***************************
  ***  Title: Image Timeline Slider
  ***  File: jsd-image-slider.js
  ***  Type: Javascript
  ***  Company: JS Designs
  ***  Author: Brian Jason
  ******************************/

  // just querying the DOM...like a boss!
  var links = document.querySelectorAll(".itemLinks");
  var wrapper = document.querySelector("#wrapper");

  // the activeLink provides a pointer to the currently displayed item
  var activeLink = 0;

  // setup the event listeners
  for (var i = 0; i < links.length; i++) {
      var link = links[i];
      link.addEventListener('click', setClickedItem, false);

      // identify the item for the activeLink
      link.itemID = i;
  }

  // set first item as active
  links[activeLink].classList.add("active");

  function setClickedItem(e) {
      removeActiveLinks();
      resetTimer();

      var clickedLink = e.target;
      activeLink = clickedLink.itemID;

      changePosition(clickedLink);
  }

  function removeActiveLinks() {
      for (var i = 0; i < links.length; i++) {
          links[i].classList.remove("active");
      }
  }

  // Handle changing the slider position as well as ensure
  // the correct link is highlighted as being active
  function changePosition(link) {
      var position = link.getAttribute("data-pos");

      var translateValue = "translate3d(" + position + ", 0px, 0)";
      wrapper.style.transform = translateValue;

      link.classList.add("active");
  }

//
// The code for sliding the content automatically
//
var timeoutID;
 
function startTimer() {
    // wait 2 seconds before calling goInactive
    timeoutID = window.setInterval(goToNextItem, 3250);
}
startTimer();
 
function resetTimer() {
    window.clearInterval(timeoutID);
    startTimer();
}
 
function goToNextItem() {
    removeActiveLinks();
 
    if (activeLink < links.length - 1) {
        activeLink++;
    } else {
        activeLink = 0;
    }
 
    var newLink = links[activeLink];
    changePosition(newLink);
}

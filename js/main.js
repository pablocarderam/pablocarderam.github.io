/* JS Document */
/* Main js */

var backToTopShown = true; // used to control back-to-top button appearance and disappearance
var initAnimRunning = true; // monitor whether or not initial anim is running

function init() {
    document.getElementById("backToTopBtn").style.opacity = 0;
    document.getElementById('warped').style.opacity = 0;
    EPPZScrollTo.scrollVerticalToElementById('introDiv', -10); // scroll to start at init

    var introLines = document.getElementById("introDiv").children; // get children
    function showNextLine(lineNumber) {
      if (lineNumber < introLines.length && initAnimRunning) {
        introLines[lineNumber].style.opacity = 0;
        fadeIn(introLines[lineNumber]);
        var time = introLines[lineNumber].offsetWidth*introLines[lineNumber].offsetHeight/20 + 500 + lineNumber*150;
        setTimeout(function() {showNextLine(lineNumber+1)}, time);
      }
      else {
        initAnimRunning = false;
        showMenuItems();
      }
    }
    setTimeout(function() {showNextLine(0)}, 500);
}

function checkShowfull() {
  if (initAnimRunning) {
    initAnimRunning = false;
    showFull();
  }
}

function showFull() {
  var introLines = document.getElementById("introDiv").children; // get children
  for (var i = 0; i < introLines.length; i++) {
    if (introLines[i].style.opacity == 0 || introLines[i].style.opacity == "") {
      introLines[i].style.opacity = 0;
      fadeIn(introLines[i]);
    }
  }
  showMenuItems();
}

function showMenuItems() {
  fadeIn(document.getElementById('warped'));
}

// Makes back-to-top button appear if scrolled down and
function scrollEvt() {
    if (document.getElementById("introDiv").getBoundingClientRect().bottom < 100 && !backToTopShown) {
        fadeIn(document.getElementById("backToTopBtn"));
        backToTopShown = true;
    }
    else if (document.getElementById("introDiv").getBoundingClientRect().bottom > 100 && backToTopShown) {
        fadeOut(document.getElementById("backToTopBtn"));
        backToTopShown = false;
    }
}

// fade out from http://www.chrisbuttery.com/articles/fade-in-fade-out-with-javascript/
function fadeOut(el){
    (function fade() {
      if ((el.style.opacity -= .05) < 0) {
        el.style.display = "none";
      } else {
        requestAnimationFrame(fade);
      }
    })();
}

// fade in
function fadeIn(el, display){
    el.style.display = display || "block";

    (function fade() {
      var val = parseFloat(el.style.opacity);
      if (!((val += .02) > 1)) {
        el.style.opacity = val;
        requestAnimationFrame(fade);
      }
    })();
}

function goTo(id) {
  EPPZScrollTo.scrollVerticalToElementById(id, 100);
}

function lightUp(id) {
  letters = document.getElementsByClassName('goTo'+id);
  for (var i = 0; i < letters.length; i++) {
    letters[i].style.textShadow = "0px 0px 15px #002381";
  }
}

function lightDown(id) {
  letters = document.getElementsByClassName('goTo'+id);
  for (var i = 0; i < letters.length; i++) {
    letters[i].style.textShadow = "";
  }
}

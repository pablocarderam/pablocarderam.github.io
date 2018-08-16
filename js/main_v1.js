/* JS Document */
/* Main js */

var backToTopShown = true; // used to control back-to-top button appearance and disappearance
var initAnimRunning = true; // monitor whether or not initial anim is running
var just_loaded = true;

window.onbeforeunload = function () {
  if (just_loaded) {
    just_loaded = false;
      window.scrollTo(0, 40);
  }
}

function init() {
    document.getElementById("backToTopBtn").style.opacity = 0;
    document.getElementById('circle').style.opacity = 0;
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
  fadeIn(document.getElementById('circle'));
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

/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
 function shuffle(a) {
     var j, x, i;
     for (i = a.length - 1; i > 0; i--) {
         j = Math.floor(Math.random() * (i + 1));
         x = a[i];
         a[i] = a[j];
         a[j] = x;
     }
     return a;
 }

function randomizeSections() {
  section_indexes = shuffle(section_indexes);
  var sep = "&nbsp;".repeat(5); // default as safari to avoid double check in case of Chrome (chrome returns > -1 for both "Chrome" and "Safari")
  if (navigator.userAgent.search("Firefox") > -1) {
    sep = "&emsp;".repeat(8);
  }
  else if (navigator.userAgent.search("Chrome") > -1) {
    sep = "&ensp;";
  }
  var menu_str = "<textPath xlink:href=\"#circlePath\">";
  for (var i = 0; i < section_indexes.length; i++) {
    document.getElementById("section_"+i.toString()).innerHTML = section_contents[section_indexes[i]];
    menu_str += menu_contents[section_indexes[i]] + sep;
  }
  menu_str += "<a class=\"goToProfiles\" onmouseout=\"lightDown('Profiles')\" onmouseover=\"lightUp('Profiles')\" onclick=\"goTo('Profiles')\">Profiles</a></textPath>";
  document.getElementById("menuItms").innerHTML = menu_str;

  var rand_rot = "rotate(" + (Math.floor(Math.random()*360)).toString() + ",400,400)";
  document.getElementById("circlePath").setAttribute("transform",rand_rot);
  document.getElementById("circle").setAttribute("transform",rand_rot);
}

init();

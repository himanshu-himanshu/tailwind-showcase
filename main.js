/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navDiv").style.top = "0";
  } else {
    document.getElementById("navDiv").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
};

var navMenu = document.getElementById("nav-menu");
var openHamburger = document.getElementById("open-hamburger");
var closeHamburger = document.getElementById("close-hamburger");
var mHome = document.getElementById("m_home");
var mAbout = document.getElementById("m_about");
var mSkills = document.getElementById("m_skills");
var mProjects = document.getElementById("m_projects");
var mContact = document.getElementById("m_contact");

closeHamburger.addEventListener("click", toggleNav);
openHamburger.addEventListener("click", toggleNav);
mAbout.addEventListener("click", toggleNav);
mHome.addEventListener("click", toggleNav);
mContact.addEventListener("click", toggleNav);
mProjects.addEventListener("click", toggleNav);
mSkills.addEventListener("click", toggleNav);

function toggleNav() {
  navMenu.classList.toggle("hidden");
}

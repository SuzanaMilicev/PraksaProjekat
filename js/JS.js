/*HAMBURGER*/
function myFunction() {
  hamburger.classList.toggle("toggle");
  var menu = document.getElementsByClassName("menu");
  var hamburger = document.getElementsByClassName("hamburger");
  var openBtn = document.getElementById("menu-btn1");
  var closeBtn = document.getElementById("menu-btn2");
  if (openBtn.style.display === "block") {
    menu.style.display = "none";
    closeBtn.style.display = "none";
  } else {
    menu.style.display = "flex";
    closeBtn.style.display = "block";
  }
};

/*DARK MODE*/
const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
})

/*POP-UP / MODAL*/
window.addEventListener("scroll", openModal);
var modal = document.getElementById("mymodal");
var body = document.body;
function openModal() {
  if (window.scrollY > 800) {
    modal.setAttribute('style', 'visibility: visible;');
    body.classList.add('stopScroll');
    window.removeEventListener("scroll", openModal);
  };
};

var span = document.getElementById("close");
span.onclick = function () {
  modal.style.display = "none";
  body.classList.remove('stopScroll');
}
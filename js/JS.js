/*HAMBURGER*/
var hamburger = document.querySelector(".hamburger");
var menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
});

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
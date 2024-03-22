/*HAMBURGER*/
function openMenu() {
  var menu = document.querySelector(".menu");
  var openBtn = document.getElementById("menu-btn1");
  var closeBtn = document.getElementById("menu-btn2");
  menu.style.display = "flex";
  closeBtn.style.display = "block";
  openBtn.style.display = "none";
};

function closeMenu() {
  var menu = document.querySelector(".menu");
  var openBtn = document.getElementById("menu-btn1");
  var closeBtn = document.getElementById("menu-btn2");
  menu.style.display = "none";
  closeBtn.style.display = "none";
  openBtn.style.display = "block";
};

document.querySelectorAll(".menu li a").forEach(function(elem) {
  elem.addEventListener('click', function(ev) {
    var menu = document.querySelector(".menu");
    var openBtn = document.getElementById("menu-btn1");
    var closeBtn = document.getElementById("menu-btn2");
    menu.style.display = "none";
    closeBtn.style.display = "none";
    openBtn.style.display = "block";
  });
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
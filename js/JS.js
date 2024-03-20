/*HAMBURGER*/
document.querySelector(".menu-btn").addEventListener("click", abc);
function abc() {
  document.querySelector(".main-menu").classList.toggle("show");
}

/*DARK MODE*/
const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
})
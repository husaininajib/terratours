const hamburgerButton = document.querySelector(".nav-toggle")
const menuList = document.querySelector(".nav-menu")
const closeButton = document.querySelector(".fa-times")

function toggleButton() {
    menuList.classList.toggle("show")
}
hamburgerButton.addEventListener("click", toggleButton)

function navClose() {
    menuList.classList.remove("show")
}
closeButton.addEventListener("click", navClose)
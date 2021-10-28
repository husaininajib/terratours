const hamburgerButton = document.querySelector(".nav-toggle")
const menuList = document.querySelector(".nav-menu")
const closeButton = document.querySelector(".fa-times")
const navLink = document.querySelectorAll(".nav-link")
const navPanel = document.querySelector(".header")

function toggleButton() {
    menuList.classList.toggle("show")
}
hamburgerButton.addEventListener("click", toggleButton)

function navClose() {
    menuList.classList.remove("show")
}
closeButton.addEventListener("click", navClose)

navLink.forEach(item => {
    item.addEventListener("click", navClose)
})

function displayNavPanel() {
    if(this.scrollY >= 100) {
    navPanel.classList.add("scroll-header")
    } else {
    navPanel.classList.remove("scroll-header")
    }
}
window.addEventListener("scroll", displayNavPanel )

var swiper = new Swiper(".discover-container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
    rotate: 0,

    },
});



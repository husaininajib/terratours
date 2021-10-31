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

const videoDisplay = document.querySelector("#video-file")
const videoButton = document.querySelector("#video-button")
const videoIcon = document.querySelector(".fa-play")

function playPause() {
    if(videoDisplay.paused) {
        videoDisplay.play()
        videoIcon.classList.add("fa-pause")
        videoIcon.classList.remove("fa-play")
    } else {
        videoDisplay.pause()
        videoIcon.classList.add("fa-play")
        videoIcon.classList.remove("fa-pause")
    }
}
videoButton.addEventListener("click", playPause)

function defaultVideo() {
    videoIcon.classList.add("fa-play")
    videoIcon.classList.remove("fa-pause")
}
videoDisplay.addEventListener("ended", defaultVideo)

const scrollUp = document.querySelector(".scroll-up")

function scrollDisplay() {
    if(this.scrollY >= 200) {
        scrollUp.classList.add("show-scroll")
    } else {
        scrollUp.classList.remove("show-scroll")
    }
}
window.addEventListener("scroll", scrollDisplay)


// const sections = document.querySelectorAll("section")
// const navLi = document.querySelectorAll("nav ul li")

// window.addEventListener("scroll", () => {
//     let current = "";
//     sections.forEach(section => {
//         const sectionTop = section.offsetTop - 50;
//         const sectionHeight = section.clientHeight;
//         if(pageYOffset > sectionTop) {
//             current = section.getAttribute("id")
//         }
//     })
//     navLi.forEach( li => {
//         li.classList.remove("active-link");
//         if(li.classList.contains(current)) {
//             li.classLisst.add("active-link")
//         }
//     })

// })

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
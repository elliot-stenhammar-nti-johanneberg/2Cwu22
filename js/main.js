const path = window.location.pathname
const activeNavBtn = document.getElementById(path)
activeNavBtn.classList.add("current");

const overlay = document.getElementById("overlay")
const menu = document.getElementById("side-menu")
overlay.addEventListener("click", () => {
    menu.classList.toggle("side-menu-open")
    overlay.classList.toggle("overlay-open")
})

const menuBtn = document.getElementById("menu-btn")

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("side-menu-open")
    overlay.classList.toggle("overlay-open")
})
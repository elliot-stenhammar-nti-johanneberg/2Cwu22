// Add underline to current page in nav
const path = window.location.pathname
const activeNavBtn = document.getElementById(path)
activeNavBtn.classList.add("current");

// Mobile side-nav open & close
const menuBtnOpen = document.getElementById("menu-btn")
menuBtnOpen.addEventListener("click", () => {
    menu.classList.toggle("side-menu-open")
    overlay.classList.toggle("overlay-open")
})

const menuBtnClose = document.getElementById("menu-close-btn")
menuBtnClose.addEventListener("click", () => {
    menu.classList.toggle("side-menu-open")
    overlay.classList.toggle("overlay-open")
})

const overlay = document.getElementById("overlay")
const menu = document.getElementById("side-menu")
overlay.addEventListener("click", () => {
    menu.classList.toggle("side-menu-open")
    overlay.classList.toggle("overlay-open")
})
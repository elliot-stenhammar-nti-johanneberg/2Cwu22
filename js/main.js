// Add underline to current page in nav
const path = window.location.pathname
const activeNavBtn = document.getElementById(path)
activeNavBtn.classList.add("current");

// Mobile side-nav open & close
const menu = document.getElementById("side-menu")
const overlay = document.getElementById("overlay")
const menuBtnOpen = document.getElementById("menu-btn")
const menuBtnClose = document.getElementById("menu-close-btn")

menuBtnOpen.addEventListener("click", () => {
    menu.classList.toggle("side-menu-open")
    overlay.classList.toggle("overlay-open")
})

menuBtnClose.addEventListener("click", () => {
    menu.classList.toggle("side-menu-open")
    overlay.classList.toggle("overlay-open")
})

overlay.addEventListener("click", () => {
    menu.classList.toggle("side-menu-open")
    overlay.classList.toggle("overlay-open")
})
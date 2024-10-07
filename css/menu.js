icons2 = document.querySelector(".icons2")
function expand() {
    menu = document.querySelector(".menuss")
    menu.classList.toggle("active")
}

function height() {
    nav = document.querySelector(".navigation")
    nav.classList.toggle("active")
}
icons2.addEventListener('click',height)
icons2.addEventListener('click',expand);
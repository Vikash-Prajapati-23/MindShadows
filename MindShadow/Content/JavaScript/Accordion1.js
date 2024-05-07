let accorDion = document.getElementById('blog-item')
let accorDion1 = document.getElementById('blog-item-1')
let accorDion2 = document.getElementById('para-accor')

accorDion.addEventListener('click', firstAccortwo)
function firstAccortwo(e) {
    e.stopImmediatePropagation();
    this.removeEventListener("click", firstAccortwo);
    accorDion.onclick = secondAccortwo;
    accorDion1.className = "fa-solid fa-angle-up mt-2"
    accorDion1.textContent = ""
    accorDion2.style.display="none"
}
function secondAccortwo() {
    accorDion1.className = "fa-solid fa-angle-down mt-2"
    accorDion.addEventListener("click", firstAccortwo);
    accorDion2.style.display="block"
}
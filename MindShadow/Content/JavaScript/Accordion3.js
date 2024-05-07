let accorDion5 = document.getElementById('accorDion5')
let accorDion6 = document.getElementById('accorDion6')
let paraAccor2 = document.getElementById('para-accor2')

accorDion5.addEventListener('click', firstAccor)
function firstAccor(e) {
    e.stopImmediatePropagation();
    this.removeEventListener("click", firstAccor);
    accorDion5.onclick = secondAccor;
    accorDion6.className = "fa-solid fa-angle-up mt-2"
    accorDion6.textContent = ""
    paraAccor2.style.display = "none"
}
function secondAccor() {
    accorDion6.className = "fa-solid fa-angle-down mt-2"
    accorDion5.addEventListener("click", firstAccor);
    paraAccor2.style.display = "block"
}
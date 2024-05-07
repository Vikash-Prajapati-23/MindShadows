let accorDion3 = document.getElementById('accorDion3')
let accorDion4 = document.getElementById('accorDion4')
let paraAccor1 = document.getElementById('para-accor1')

accorDion3.addEventListener('click', firstAccordion)
function firstAccordion(e) {
    e.stopImmediatePropagation();
    this.removeEventListener("click", firstAccordion);
    accorDion3.onclick = secondAccordion;
    accorDion4.className = "fa-solid fa-angle-up mt-2"
    accorDion4.textContent = ""
    paraAccor1.style.display = "none"
}
function secondAccordion() {
    accorDion4.className = "fa-solid fa-angle-down mt-2"
    accorDion3.addEventListener("click", firstAccordion);
    paraAccor1.style.display = "block"
}
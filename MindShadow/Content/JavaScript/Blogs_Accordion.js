let blogBtn = document.getElementById('blog')
let blogBtn1 = document.getElementById('blog1')
let blogbtn111 = document.getElementById('trial-item')


//blogBtn.addEventListener('click', (e) => {
//        blogBtn1.className = "fa-solid fa-angle-up mt-2"
//        blogBtn1.textContent = ""
    
//})
blogBtn.addEventListener('click',first)
function first(e) {
    e.stopImmediatePropagation();
    this.removeEventListener("click", first);
    blogBtn.onclick = second;
    blogBtn1.className = "fa-solid fa-angle-up mt-2"
    blogBtn1.textContent = ""
    blogbtn111.style.display = "none"
    
}
function second() {
    blogBtn1.className = "fa-solid fa-angle-down mt-2"
    blogBtn.addEventListener("click", first);
    blogbtn111.style.display = "block"
 
}

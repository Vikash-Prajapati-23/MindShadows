let ClickBtn = document.getElementById('drBtn')
let liItem = document.querySelector('.drop-1')
liItem.style.display = 'none'
liItem.style.color = 'black'
ClickBtn.addEventListener('click', () => {
    if (liItem.style.display === 'none') {
        liItem.style.display = 'block'
        
    } else {
        liItem.style.display = 'none'
    }
})

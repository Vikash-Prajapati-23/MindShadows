let DrMarkUpload = document.getElementById('fileUpload')
let DrMarkUpload2 = document.getElementById('markUpload11')

DrMarkUpload.addEventListener('change', (event) => {
    let Marks = this.files[0]
    let Marks1 = URL.createObjectURL(Marks)
    let Marks2 = document.createElement('img')
    Marks2.src = Marks1;
    Marks2.width = 300;
    DrMarkUpload2.appendChild(Marks2)

})
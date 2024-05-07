let BtnButton = document.getElementById('submitBtn')
let PasswordInput = document.getElementById('passBtn1')
let Passwordinput2 = document.getElementById('passBtn2')
let userId = document.getElementById('userBtn1')
let userId2 = document.getElementById('userBtn2')
let checkButton = document.getElementById('flexCheckDefault')

BtnButton.addEventListener('click', (event) => {
    location.replace(location.href)
    let inputvalue = PasswordInput.value
    let inputvalue1 = Passwordinput2.value
    let useridvalue = userId.value
    let useridvalue1 = userId2.value
    let valueCheck = checkButton.value
    
    if (inputvalue !== inputvalue1) {
        alert("Password does not match! Please check your password")
    } 

    if (useridvalue !== useridvalue1) {
        alert("User Id doesn't match! Please check your User Id")
    } 
    
     
})

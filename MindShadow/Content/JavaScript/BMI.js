let buttonInput = document.getElementById('Btn')
let resultStore = document.getElementById('result')
buttonInput.addEventListener('click',(currEvent)=>{
    let btnclick = currEvent.currentTarget
    let Btn1=btnclick.parentElement
    let Btn2= Btn1.childNodes[3]
    let Btn3= Btn1.childNodes[7]
    let Btn4= Btn1.childNodes[11]
    let Btn5= Btn1.childNodes[15]
    let Btn6= Btn1.childNodes[19]
    let BtnValuename = Btn2.value
    let BtnValueMob = Btn3.value
    let BtnValueMDob = Btn4.value
    let BtnValue = Btn5.value
    let BtnValue1 = Btn6.value

    let btnvalue3 = (BtnValue1 / 100) * (BtnValue1 / 100)
    let finalresult = BtnValue / btnvalue3;
    let finalresult1 = finalresult.toFixed(2)
    let makeInput = document.createElement('div')
    makeInput.style.width='200px'
    makeInput.style.margin = 'auto'
    makeInput.innerHTML = "Name: " + BtnValuename + " " + "Mobile No: " + BtnValueMob + " " + "Date of Birth: " + BtnValueMDob + " " + "Your BMI is: " + finalresult1
    
    resultStore.innerHTML = ''
    resultStore.appendChild(makeInput)
    
    
   
})
let chatbutton = document.getElementById('autochatbutton')
let chatbutton2 = document.getElementById('appenddiv')
chatbutton.addEventListener('click',(event)=>{
    chatbutton.style.display='none'
    chatbutton2.style.display='block'
    chatbutton4.style.display='none'
    anoxiabutton2.style.display='none'
    angerbutton2.style.display='none'
    assertiveButton2.style.display='none'
    audioButton2.style.display='none'
    bipolarButton2.style.display='none'
    dysamorphiaButton2.style.display='none'
    depressionButton2.style.display='none'
    dissociationButtion2.style.display='none'
    eatingButton2.style.display='none'
    generalizedButton2.style.display='none'
    interpersonalButton2.style.display='none'
    exitbutton2.style.display='block'

})

let chatbutton3 = document.getElementById('Anxiety')
let chatbutton4 = document.getElementById('foranxiety')
chatbutton3.addEventListener('click',()=>{
    chatbutton4.style.display='block'
    chatbutton6.style.display='none'
    chatbutton8.style.display='none'
    chatbutton10.style.display='none'
    if(anoxiabutton){
        anoxiabutton2.style.display='none'
        angerbutton2.style.display='none'
        assertiveButton2.style.display='none'
        audioButton2.style.display='none'
        bipolarButton2.style.display='none'
        dysamorphiaButton2.style.display='none'
        depressionButton2.style.display='none'
        dissociationButtion2.style.display='none'
        eatingButton2.style.display='none'
        generalizedButton2.style.display='none'
        interpersonalButton2.style.display='none'
    }
})

let chatbutton7= document.getElementById('consultDoctor')
let chatbutton8 = document.getElementById('forconsultdoctor')
chatbutton7.addEventListener('click',()=>{
    chatbutton8.style.display='block'
})

let chatbutton9 = document.getElementById('rupesh')
let manatosButton = document.getElementById('manatosh')
let SupriyoButton =document.getElementById('Supriyo')
let samareshButton=document.getElementById('samaresh')
let bilashButton = document.getElementById('bilash')
let chatbutton10 = document.getElementById('forrupesh')
let exitbutton2 = document.getElementById('exit2')
chatbutton9.addEventListener('click', ()=>{
    chatbutton10.style.display='block'
    // exitbutton2.style.display='block'
})
manatosButton.addEventListener('click',()=>{
    chatbutton10.style.display='block'
    // exitbutton2.style.display='block'
})
SupriyoButton.addEventListener('click',()=>{
    chatbutton10.style.display='block'
    // exitbutton2.style.display='block'
})
samareshButton.addEventListener('click',()=>{
    chatbutton10.style.display='block'
    // exitbutton2.style.display='block'
})
bilashButton.addEventListener('click',()=>{
    chatbutton10.style.display='block'
    // exitbutton2.style.display='block'
})
exitbutton2.addEventListener('click',()=>{
    chatbutton2.style.display='none'
    chatbutton4.style.display='none'
    chatbutton6.style.display='none'
    chatbutton8.style.display='none'
    chatbutton10.style.display='none'
    chatbutton.style.display='block'
})
let exitbutton = document.getElementById('exit')
exitbutton.addEventListener('click',()=>{
    chatbutton2.style.display='none'
    chatbutton4.style.display='none'
    chatbutton6.style.display='none'
    chatbutton8.style.display='none'
    chatbutton10.style.display='none'
    chatbutton.style.display='block'
})
let anoxiabutton = document.getElementById('Anorexia')
let anoxiabutton2 = document.getElementById('forAnorexia')
anoxiabutton.addEventListener('click',()=>{
    anoxiabutton2.style.display='block'
    chatbutton6.style.display='none'
    chatbutton8.style.display='none'
    chatbutton10.style.display='none'
    if(chatbutton3){
        chatbutton4.style.display='none'
        angerbutton2.style.display='none'
        assertiveButton2.style.display='none'
        audioButton2.style.display='none'
        bipolarButton2.style.display='none'
        dysamorphiaButton2.style.display='none'
        depressionButton2.style.display='none'
        dissociationButtion2.style.display='none'
        eatingButton2.style.display='none'
        generalizedButton2.style.display='none'
        interpersonalButton2.style.display='none'
    }
})

let angerbutton = document.getElementById('Anger')
let angerbutton2 = document.getElementById('forAnger')
angerbutton.addEventListener('click',()=>{
    angerbutton2.style.display='block'
    chatbutton6.style.display='none'
    chatbutton8.style.display='none'
    chatbutton10.style.display='none'
    if(angerbutton){
        chatbutton4.style.display='none'
        anoxiabutton2.style.display='none'
        assertiveButton2.style.display='none'
        audioButton2.style.display='none'
        bipolarButton2.style.display='none'
        dysamorphiaButton2.style.display='none'
        depressionButton2.style.display='none'
        dissociationButtion2.style.display='none'
        eatingButton2.style.display='none'
        generalizedButton2.style.display='none'
        interpersonalButton2.style.display='none'
    }
})

let assertiveButton = document.getElementById('Assertiveness')
let assertiveButton2 =document.getElementById('forAssertiveness')
assertiveButton.addEventListener('click',()=>{
    assertiveButton2.style.display='block'
    chatbutton6.style.display='none'
    chatbutton8.style.display='none'
    chatbutton10.style.display='none'
    if(assertiveButton){
        chatbutton4.style.display='none'
        anoxiabutton2.style.display='none'
        angerbutton2.style.display='none'
        audioButton2.style.display='none'
        bipolarButton2.style.display='none'
        dysamorphiaButton2.style.display='none'
        depressionButton2.style.display='none'
        dissociationButtion2.style.display='none'
        eatingButton2.style.display='none'
        generalizedButton2.style.display='none'
        interpersonalButton2.style.display='none'
    }

})
let audioButton =document.getElementById('Audiology')
let audioButton2 =document.getElementById('forAudiology')
audioButton.addEventListener('click',()=>{
audioButton2.style.display='block'
chatbutton6.style.display='none'
chatbutton8.style.display='none'
chatbutton10.style.display='none'
if(audioButton){
    chatbutton4.style.display='none'
    anoxiabutton2.style.display='none'
    angerbutton2.style.display='none'
    assertiveButton2.style.display='none'
    bipolarButton2.style.display='none'
    dysamorphiaButton2.style.display='none'
    depressionButton2.style.display='none'
    dissociationButtion2.style.display='none'
    eatingButton2.style.display='none'
    generalizedButton2.style.display='none'
    interpersonalButton2.style.display='none'
}
})
let bipolarButton = document.getElementById('Bipolar')
let bipolarButton2 = document.getElementById('forBipolar')
bipolarButton.addEventListener('click',()=>{
    bipolarButton2.style.display='block'
    chatbutton6.style.display='none'
    chatbutton8.style.display='none'
    chatbutton10.style.display='none'
    if(bipolarButton){
        chatbutton4.style.display='none'
        anoxiabutton2.style.display='none'
        angerbutton2.style.display='none'
        assertiveButton2.style.display='none'
        audioButton2.style.display='none'
        dysamorphiaButton2.style.display='none'
        depressionButton2.style.display='none'
        dissociationButtion2.style.display='none'
        eatingButton2.style.display='none'
        generalizedButton2.style.display='none'
        interpersonalButton2.style.display='none'
    }
})

let dysamorphiaButton = document.getElementById('dysmorphia')
let dysamorphiaButton2 =document.getElementById('fordysmorphia')
dysamorphiaButton.addEventListener('click',()=>{
    dysamorphiaButton2.style.display='block'
    chatbutton6.style.display='none'
    chatbutton8.style.display='none'
    chatbutton10.style.display='none'
    if(dysamorphiaButton){
        chatbutton4.style.display='none'
        anoxiabutton2.style.display='none'
        angerbutton2.style.display='none'
        assertiveButton2.style.display='none'
        audioButton2.style.display='none'
        bipolarButton2.style.display='none'
        depressionButton2.style.display='none'
        dissociationButtion2.style.display='none'
        eatingButton2.style.display='none'
        generalizedButton2.style.display='none'
        interpersonalButton2.style.display='none'
    }
})
let depressionButton = document.getElementById('Depression')
let depressionButton2 = document.getElementById('forDepression')
depressionButton.addEventListener('click',()=>{
    depressionButton2.style.display='block'
    chatbutton6.style.display='none'
    chatbutton8.style.display='none'
    chatbutton10.style.display='none'
    if(depressionButton){
        chatbutton4.style.display='none'
        anoxiabutton2.style.display='none'
        angerbutton2.style.display='none'
        assertiveButton2.style.display='none'
        audioButton2.style.display='none'
        bipolarButton2.style.display='none'
        dysamorphiaButton2.style.display='none'
        dissociationButtion2.style.display='none'
        eatingButton2.style.display='none'
        generalizedButton2.style.display='none'
        interpersonalButton2.style.display='none'
    }
})
let dissociationButtion = document.getElementById('Dissociation')
let dissociationButtion2 = document.getElementById('forDissociation')
dissociationButtion.addEventListener('click',()=>{
    dissociationButtion2.style.display='block'
    chatbutton6.style.display='none'
    chatbutton8.style.display='none'
    chatbutton10.style.display='none'
    if(dissociationButtion){
        chatbutton4.style.display='none'
        anoxiabutton2.style.display='none'
        angerbutton2.style.display='none'
        assertiveButton2.style.display='none'
        audioButton2.style.display='none'
        bipolarButton2.style.display='none'
        dysamorphiaButton2.style.display='none'
        depressionButton2.style.display='none'
        eatingButton2.style.display='none'
        generalizedButton2.style.display='none'
        interpersonalButton2.style.display='none'
    }
})
let eatingButton = document.getElementById('Eating')
let eatingButton2 = document.getElementById('forEating')
eatingButton.addEventListener('click',()=>{
    eatingButton2.style.display='block'
    chatbutton6.style.display='none'
    chatbutton8.style.display='none'
    chatbutton10.style.display='none'
    if(eatingButton){
        chatbutton4.style.display='none'
        anoxiabutton2.style.display='none'
        angerbutton2.style.display='none'
        assertiveButton2.style.display='none'
        audioButton2.style.display='none'
        bipolarButton2.style.display='none'
        dysamorphiaButton2.style.display='none'
        depressionButton2.style.display='none'
        dissociationButtion2.style.display='none'
        generalizedButton2.style.display='none'
        interpersonalButton2.style.display='none'
    }
})
let generalizedButton = document.getElementById('Generalized')
let generalizedButton2 =document.getElementById('forGeneralized')
generalizedButton.addEventListener('click',()=>{
    generalizedButton2.style.display='block'
    chatbutton6.style.display='none'
    chatbutton8.style.display='none'
    chatbutton10.style.display='none'
    if(generalizedButton){
        chatbutton4.style.display='none'
        anoxiabutton2.style.display='none'
        angerbutton2.style.display='none'
        assertiveButton2.style.display='none'
        audioButton2.style.display='none'
        bipolarButton2.style.display='none'
        dysamorphiaButton2.style.display='none'
        depressionButton2.style.display='none'
        dissociationButtion2.style.display='none'
        eatingButton2.style.display='none'
        interpersonalButton2.style.display='none'
    }
})
let interpersonalButton =document.getElementById('Interpersonal')
let interpersonalButton2 =document.getElementById('forInterpersonal')
interpersonalButton.addEventListener('click',()=>{
    interpersonalButton2.style.display='block'
    chatbutton6.style.display='none'
    chatbutton8.style.display='none'
    chatbutton10.style.display='none'
    if(interpersonalButton){
        chatbutton4.style.display='none'
        anoxiabutton2.style.display='none'
        angerbutton2.style.display='none'
        assertiveButton2.style.display='none'
        audioButton2.style.display='none'
        bipolarButton2.style.display='none'
        dysamorphiaButton2.style.display='none'
        depressionButton2.style.display='none'
        dissociationButtion2.style.display='none'
        eatingButton2.style.display='none'
        generalizedButton2.style.display='none'
    }
})
let chatbutton5 =document.getElementById('Apprehension')
let chatbutton6 = document.getElementById('forapprehension')
chatbutton5.addEventListener('click',()=>{
    chatbutton6.style.display='block'
})
let confusionButton = document.getElementById('confusion')
confusionButton.addEventListener('click',()=>{
    chatbutton6.style.display='block'
})
let helplessnessbutton = document.getElementById('helplessness')
helplessnessbutton.addEventListener('click',()=>{
    chatbutton6.style.display='block'
})
let thoughtsButton = document.getElementById('thoughts')
thoughtsButton.addEventListener('click',()=>{
    chatbutton6.style.display='block'
})
let muscleButton=document.getElementById('muscle')
muscleButton.addEventListener('click',()=>{
    chatbutton6.style.display='block'
})
let palpitationsButton = document.getElementById('palpitations')
palpitationsButton.addEventListener('click',()=>{
    chatbutton6.style.display='block'
})
let breathingButton = document.getElementById('breathing')
breathingButton.addEventListener('click',()=>{
    chatbutton6.style.display='block'
})
let weightButton = document.getElementById('weight')
weightButton.addEventListener('click',()=>{
    chatbutton6.style.display='block'
})
let denialButton = document.getElementById('denial')
denialButton.addEventListener('click',()=>{
    chatbutton6.style.display='block'
})
let unusualButton = document.getElementById('unusual')
unusualButton.addEventListener('click',()=>{
    chatbutton6.style.display='block'
})
let fixationButton = document.getElementById('fixation')
fixationButton.addEventListener('click',()=>{
    chatbutton6.style.display='block'
})
let alteredButton = document.getElementById('altered')
alteredButton.addEventListener('click',()=>{
    chatbutton6.style.display='block'
})
let becomingButton = document.getElementById('becoming')
becomingButton.addEventListener('click',()=>{
    chatbutton6.style.display='block'
})
let excessiveButton = document.getElementById('excessive')
excessiveButton.addEventListener('click',()=>{
    chatbutton6.style.display='block'
})
let irritatedButton = document.getElementById('irritated')
irritatedButton.addEventListener('click',()=>{
    chatbutton6.style.display='block'
})
let overwhelmedButton = document.getElementById('overwhelmed')
overwhelmedButton.addEventListener('click',()=>{
    chatbutton6.style.display='block'
})
let humiliatedButton = document.getElementById('humiliated')
humiliatedButton.addEventListener('click',()=>{
    chatbutton6.style.display='block'
})
let controlButton = document.getElementById('control')
controlButton.addEventListener('click',()=>{
    chatbutton6.style.display='block'
})
let nervousButton = document.getElementById('nervous')
nervousButton.addEventListener('click',()=>{
    chatbutton6.style.display='block'
})
let tenseButton = document.getElementById('tense')
tenseButton.addEventListener('click',()=>{
    chatbutton6.style.display='block'
})
let relaxButton = document.getElementById('relax')
relaxButton.addEventListener('click',()=>{
    chatbutton6.style.display='block'
})
let actButton = document.getElementById('act')
actButton.addEventListener('click',()=>{
    chatbutton6.style.display='block'
})
let stayingButton = document.getElementById('staying')
stayingButton.addEventListener('click',()=>{
    chatbutton6.style.display='block'
})
let feelingselfButton = document.getElementById('feelingself')
feelingselfButton.addEventListener('click',()=>{
    chatbutton6.style.display='block'
})
let fatigueButton = document.getElementById('fatigue')
fatigueButton.addEventListener('click',()=>{
    chatbutton6.style.display='block'
})
let unhappinessButton = document.getElementById('unhappiness')
unhappinessButton.addEventListener('click',()=>{
    chatbutton6.style.display='block'
})
let mufflingButton = document.getElementById('muffling')
mufflingButton.addEventListener('click',()=>{
    chatbutton6.style.display='block'
})
let wordsButton = document.getElementById('words')
wordsButton.addEventListener('click',()=>{
    chatbutton6.style.display='block'
})
let earsButton = document.getElementById('ears')
earsButton.addEventListener('click',()=>{
    chatbutton6.style.display='block'
})
let noiseButton = document.getElementById('noise')
noiseButton.addEventListener('click',()=>{
    chatbutton6.style.display='block'
})
let soundsButton = document.getElementById('sounds')
soundsButton.addEventListener('click',()=>{
    chatbutton6.style.display='block'
})
let hopelessButton = document.getElementById('hopeless')
hopelessButton.addEventListener('click',()=>{
    chatbutton6.style.display='block'
})
let feelButton = document.getElementById('feel')
feelButton.addEventListener('click',()=>{
    chatbutton6.style.display='block'
})
let moreButton = document.getElementById('more')
moreButton.addEventListener('click',()=>{
    chatbutton6.style.display='block'
})
let lessButton = document.getElementById('less')
lessButton.addEventListener('click',()=>{
    chatbutton6.style.display='block'
})
let dangerousButton = document.getElementById('dangerous')
dangerousButton.addEventListener('click',()=>{
    chatbutton6.style.display='block'
})
let havingButton = document.getElementById('having')
havingButton.addEventListener('click',()=>{
    chatbutton6.style.display='block'
})
let avoidingButton = document.getElementById('avoiding')
avoidingButton.addEventListener('click',()=>{
    chatbutton6.style.display='block'
})
let sadnessButton = document.getElementById('sadness')
sadnessButton.addEventListener('click',()=>{
    chatbutton6.style.display='block'
})
let interestButton = document.getElementById('interest')
interestButton.addEventListener('click',()=>{
    chatbutton6.style.display='block'
})
let appetiteButton = document.getElementById('appetite')
appetiteButton.addEventListener('click',()=>{
    chatbutton6.style.display='block'
})
let worthlessnessButton = document.getElementById('worthlessness')
worthlessnessButton.addEventListener('click',()=>{
    chatbutton6.style.display='block'
})
let agitatedButton = document.getElementById('agitated')
agitatedButton.addEventListener('click',()=>{
    chatbutton6.style.display='block'
})
let identityButton = document.getElementById('identity')
identityButton.addEventListener('click',()=>{
    chatbutton6.style.display='block'
})
let foodsButton = document.getElementById('foods')
foodsButton.addEventListener('click',()=>{
    chatbutton6.style.display='block'
})
let discomfortButton = document.getElementById('discomfort')
discomfortButton.addEventListener('click',()=>{
    chatbutton6.style.display='block'
})
let mealsButton = document.getElementById('meals')
mealsButton.addEventListener('click',()=>{
    chatbutton6.style.display='block'
})
let frequentButton = document.getElementById('frequent')
frequentButton.addEventListener('click',()=>{
    chatbutton6.style.display='block'
})
let swingsButton = document.getElementById('swings')
swingsButton.addEventListener('click',()=>{
    chatbutton6.style.display='block'
})

let asleepButton = document.getElementById('asleep')
asleepButton.addEventListener('click',()=>{
    chatbutton6.style.display='block'
})
let tremblingButton = document.getElementById('trembling')
tremblingButton.addEventListener('click',()=>{
    chatbutton6.style.display='block'
})
let twitchingButton = document.getElementById('twitching')
twitchingButton.addEventListener('click',()=>{
    chatbutton6.style.display='block'
})
let headachesButton = document.getElementById('headaches')
headachesButton.addEventListener('click',()=>{
    chatbutton6.style.display='block'
})
let sweatingButton = document.getElementById('sweating')
sweatingButton.addEventListener('click',()=>{
    chatbutton6.style.display='block'
})
let hotButton = document.getElementById('hot')
hotButton.addEventListener('click',()=>{
    chatbutton6.style.display='block'
})
let irritabilityButton = document.getElementById('irritability')
irritabilityButton.addEventListener('click',()=>{
    chatbutton6.style.display='block'
})
let trustingButton = document.getElementById('trusting')
trustingButton.addEventListener('click',()=>{
    chatbutton6.style.display='block'
})
let fearButton = document.getElementById('fear')
fearButton.addEventListener('click',()=>{
    chatbutton6.style.display='block'
})
let poorButton = document.getElementById('poor')
poorButton.addEventListener('click',()=>{
    chatbutton6.style.display='block'
})
let emotionalButton = document.getElementById('emotional')
emotionalButton.addEventListener('click',()=>{
    chatbutton6.style.display='block'
})
let manipulativeButton = document.getElementById('manipulative')
manipulativeButton.addEventListener('click',()=>{
    chatbutton6.style.display='block'
})
let socialButton = document.getElementById('social')
socialButton.addEventListener('click',()=>{
    chatbutton6.style.display='block'
})
chatbutton10.addEventListener('click', () => {
    alert("Error!service not available at this time")
})
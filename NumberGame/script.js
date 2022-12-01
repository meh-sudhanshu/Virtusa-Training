

var number = document.getElementsByClassName('number')[0]

console.log(number)

var increaseBtn = document.getElementsByClassName('increase')[0]

console.log(increaseBtn)

var decreaseBtn = document.getElementsByClassName('decrease')[0]
console.log(decreaseBtn)


var dialogueBox = document.getElementsByClassName('dialogue-box')[0]
console.log(dialogueBox)


var closeBox = document.getElementById('close_box')
console.log(closeBox)

var increaseWarning = "Number can not go beyond 10"
var decreaseWarning = "Number can not go below 0"

var warningElement = document.getElementsByClassName('warning-message')[0]

function increaseHandler(){
    var currentValue = number.innerText
    currentValue = Number(currentValue)
    if(currentValue === 10){
        warningElement.innerText = increaseWarning
        dialogueBox.classList.add('visible')
        return
    }
    currentValue= currentValue+1
    number.innerText= currentValue
    console.log(currentValue)
}

increaseBtn.addEventListener("click",increaseHandler)



function decreaseHandler(){
    var textValue = number.innerText
    textValue = Number(textValue)

    if(textValue  === -10){
        warningElement.innerText = decreaseWarning
        dialogueBox.classList.add('visible')

        return
    }

    textValue = textValue -1
    number.innerText= textValue
}

decreaseBtn.addEventListener('click',decreaseHandler)

function closeDialogueBox(){
    dialogueBox.classList.remove('visible')
}


closeBox.addEventListener('click',closeDialogueBox)
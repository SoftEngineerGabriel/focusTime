// variables
const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSoundON = document.querySelector('.sound-on')
const buttonSoundMute = document.querySelector('.sound-mute')
let minutes
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

//functions
function secondsCountdown(){
    setTimeout(function() {
        let seconds = Number(secondsDisplay.textContent)
        if( seconds <= 0){
            seconds = 60
        }

        secondsDisplay.textContent = seconds -1
        secondsCountdown()
    }, 1000)
}
//Event-driven
//programação imperativa
//callback
buttonPlay.addEventListener('click', function(){
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    buttonStop.classList.remove('hide')
    buttonSet.classList.add('hide')

    secondsCountdown()
})

buttonPause.addEventListener('click', function(){
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
})

buttonStop.addEventListener('click', function(){
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    buttonStop.classList.add('hide')
    buttonSet.classList.remove('hide')
})

buttonSoundON.addEventListener('click', function(){
    buttonSoundON.classList.add('hide')
    buttonSoundMute.classList.remove('hide')
})

buttonSoundMute.addEventListener('click', function(){
    buttonSoundON.classList.remove('hide')
    buttonSoundMute.classList.add('hide')
})

buttonSet.addEventListener('click', function(){
    minutes = prompt('Quantos minutos?')
    minutesDisplay.textContent = minutes
})
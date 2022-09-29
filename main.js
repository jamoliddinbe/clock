setInterval(setClock, 1000)

let hourHand = document.querySelector('[data-hour-hand]')
let minuteHand = document.querySelector('[data-minute-hand]')
let secondHand = document.querySelector('[data-second-hand]')

function setClock(){
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minuteRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minuteRatio + currentDate.getHours()) / 12
    setRotation(secondHand, secondsRatio )
    setRotation(minuteHand, minuteRatio )
    setRotation(hourHand, hoursRatio )
}
function setRotation (element, rotationRatio ){
   element.style.setProperty('--rotation', rotationRatio * 360 )
}
// setClock()

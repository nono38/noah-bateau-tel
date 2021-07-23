let y = 0
let x = 0
radio.setGroup(207)
basic.forever(function () {
    x = pins.analogReadPin(AnalogPin.P1)
    // mal traduit
    x = Math.round(Math.map(x, 4, 1007, -100, 100))
    basic.pause(200)
    y = pins.analogReadPin(AnalogPin.P2)
    // mal traduit
    y = Math.round(Math.map(y, 4, 1007, -100, 100))
    radio.sendNumber(y)
})

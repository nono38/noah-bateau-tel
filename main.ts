let p_2 = 0
let p_1 = 0
radio.setGroup(207)
basic.forever(function () {
    p_1 = pins.analogReadPin(AnalogPin.P1)
    // mal traduit
    p_1 = Math.round(Math.map(p_1, 4, 1007, -1, 1))
    basic.pause(200)
    p_2 = pins.analogReadPin(AnalogPin.P2)
    // mal traduit
    p_2 = Math.round(Math.map(p_2, 4, 1007, -1, 1))
    if (p_1 == 0 && p_2 == 0) {
        radio.sendNumber(0)
    } else if (p_1 == 0 && p_2 == 1) {
        radio.sendNumber(1)
    } else if (p_1 == 1 && p_2 == 0) {
        radio.sendNumber(10)
    } else if (p_1 == 0 && p_2 == -1) {
        radio.sendNumber(-1)
    } else if (p_1 == -1 && p_2 == 0) {
        radio.sendNumber(-10)
    } else if (p_1 == -1 && p_2 == 1) {
        radio.sendNumber(-1.1)
    } else if (p_1 == -1 && p_2 == -1) {
        radio.sendNumber(-11)
    } else if (p_1 == 1 && p_2 == -1) {
        radio.sendNumber(12)
    } else if (p_1 == 1 && p_2 == 1) {
        radio.sendNumber(11)
    }
    basic.pause(200)
})

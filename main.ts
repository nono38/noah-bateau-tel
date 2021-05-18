let p_2 = 0
let p_1 = 0
radio.setGroup(207)
basic.forever(function () {
    p_1 = pins.analogReadPin(AnalogPin.P1)
    // mal traduit
    p_1 = Math.round(Math.map(p_1, 4, 1007, -100, 100))
    basic.pause(200)
    p_2 = pins.analogReadPin(AnalogPin.P2)
    // mal traduit
    p_2 = Math.round(Math.map(p_1, 4, 1007, -100, 100))
    basic.pause(200)
    if (p_1 == 0 && p_2 == 0) {
        radio.sendValue("p_1 p_2", 0)
    } else {
        radio.sendValue("p_1", p_1)
    }
    if (p_2 == 0) {
    	
    } else {
        radio.sendValue("p_2", p_2)
    }
})

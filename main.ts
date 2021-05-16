input.onGesture(Gesture.Shake, function () {
    radio.sendValue("A", 0)
    basic.showString("0")
})
input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.AB, function () {
    radio.sendValue("A", 1)
    basic.showString("1")
})
input.onButtonPressed(Button.B, function () {
	
})
let Pitch = 0
let Roll = 0
radio.setGroup(107)
radio.setTransmitPower(7)
/**
 * PIN1 == Fremdrift (Gul, IN1/IN2)
 * 
 * PIN0 == Opdrift    (Grøn, IN3/IN4)
 * 
 * PIN2 == Servo (Blå)
 */
basic.forever(function () {
    Roll = input.rotation(Rotation.Roll)
    Pitch = input.rotation(Rotation.Pitch)
    if (Roll < -10 && Roll > -180) {
        radio.sendValue("R", -1)
        basic.showLeds(`
            . . # . .
            . # # . .
            # # # # #
            . # # . .
            . . # . .
            `)
    } else if (Roll > 10 && Roll < 180) {
        radio.sendValue("R", 1)
        basic.showLeds(`
            . . # . .
            . . # # .
            # # # # #
            . . # # .
            . . # . .
            `)
    } else {
        radio.sendValue("R", 0)
        basic.showIcon(IconNames.No)
    }
})

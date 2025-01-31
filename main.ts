input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . # #
        # # # . #
        # # . . .
        # . # # #
        . # . . .
        `)
})
// Initialize Hummingbird
hummingbird.startHummingbird()
basic.showString("Hello!")
// LED Control Loop
basic.forever(function () {
    // Single color LEDs
    hummingbird.setLED(ThreePort.Two, 100)
    basic.pause(1000)
    hummingbird.setLED(ThreePort.Three, 100)
    basic.pause(1000)
    // Tri-LED Green
    hummingbird.setTriLED(
    TwoPort.One,
    0,
    100,
    0
    )
    basic.pause(1000)
    basic.pause(1000)
    // Tri-LED Red
    hummingbird.setTriLED(
    TwoPort.One,
    100,
    0,
    0
    )
    basic.pause(100)
    hummingbird.setLED(ThreePort.One, 100)
})
// Servo Control Loop - Fixed Rotation Values
basic.forever(function () {
    hummingbird.setPositionServo(FourPort.Three, 180)
    basic.pause(1000)
    // Rotate one direction
    hummingbird.setRotationServo(FourPort.Three, 50)
    basic.pause(2000)
    // Rotate opposite direction
    hummingbird.setRotationServo(FourPort.Three, 150)
    basic.pause(2000)
})

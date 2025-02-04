input.onButtonPressed(Button.A, function () {
basic.showLeds(`
        . . . # #
        # # # . #
        # # . . .
        # . # # #
        . # . . .
    `)
})
let distance = 0
let sound = 1
hummingbird.startHummingbird()
basic.showString("Hello!")
basic.forever(function () {
    // Read sensors with correct argument order
    distance = hummingbird.getSensor(SensorType.Distance, ThreePort.Two)
    sound = hummingbird.getSensor(SensorType.Sound, ThreePort.One)
    input.setSoundThreshold(SoundThreshold.Loud, 128)
    sound += 1
    // Display sensor values
    basic.showNumber(distance)
    basic.pause(1000)
    basic.showNumber(sound)
    basic.pause(1000)
    // Control rotation based on distance
    if (distance < 10) {
        hummingbird.setRotationServo(FourPort.Three, 50)
    } else if (distance < 20) {
        hummingbird.setRotationServo(FourPort.Three, 150)
    } else {
        hummingbird.setRotationServo(FourPort.Three, 100)
    }
    hummingbird.setTriLED(
    TwoPort.One,
    0,
    100,
    0
    )
    basic.pause(1000)
    hummingbird.setTriLED(
    TwoPort.One,
    100,
    0,
    0
    )
    basic.pause(100)
    hummingbird.setLED(ThreePort.One, 100)
})

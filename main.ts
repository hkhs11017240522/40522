input.onSound(DetectedSound.Loud, function () {
    light2 = !(light2)
    if (light2) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else {
        basic.clearScreen()
    }
})
let light2 = false
input.setSoundThreshold(SoundThreshold.Loud, 150)
basic.forever(function () {
	
})

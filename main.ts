function ColorStrip (color1: number, color2: number, color3: number, color4: number) {
    strip.setPixelColor(0, color1)
    strip.setPixelColor(1, color2)
    strip.setPixelColor(2, color3)
    strip.setPixelColor(3, color4)
    strip.show()
}
function A () {
    basic.showString("A")
    Avancer(255)
    basic.pause(1000)
    Reculer(255)
    basic.pause(1000)
    Gauche2(255)
    basic.pause(1000)
    Droite2(255)
    basic.pause(1000)
    Stop()
}
function Gauche (vitesse1: number, vitesse2: number) {
    basic.showArrow(ArrowNames.West)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, vitesse1)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, vitesse2)
    ColorStrip(neopixel.colors(NeoPixelColors.Green), neopixel.colors(NeoPixelColors.Green), neopixel.colors(NeoPixelColors.Red), neopixel.colors(NeoPixelColors.Red))
}
function Reculer (vitesse: number) {
    basic.showArrow(ArrowNames.South)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, vitesse)
    ColorStrip(neopixel.colors(NeoPixelColors.Red), neopixel.colors(NeoPixelColors.Green), neopixel.colors(NeoPixelColors.Green), neopixel.colors(NeoPixelColors.Red))
}
function Droite2 (vitesse: number) {
    basic.showArrow(ArrowNames.East)
    maqueen.motorStop(maqueen.Motors.M1)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, vitesse)
    ColorStrip(neopixel.colors(NeoPixelColors.Red), neopixel.colors(NeoPixelColors.Red), neopixel.colors(NeoPixelColors.Green), neopixel.colors(NeoPixelColors.Green))
}
function B () {
    basic.showString("B")
    Avancer(255)
    basic.pause(1000)
    Reculer(255)
    basic.pause(1000)
    Droite(255, 255)
    basic.pause(1000)
    Gauche(255, 255)
    basic.pause(1000)
    Stop()
}
radio.onReceivedString(function (receivedString) {
    if (receivedString == "A") {
        A()
    }
    if (receivedString == "B") {
        B()
    }
    if (receivedString == "A+B") {
        AB()
    }
    if (receivedString == "Av") {
        Avancer(255)
    }
    if (receivedString == "Ar") {
        Reculer(255)
    }
    if (receivedString == "G") {
        Gauche(255, 255)
    }
    if (receivedString == "D") {
        Droite(255, 255)
    }
    if (receivedString == "S") {
        Stop()
    }
})
function Avancer (vitesse: number) {
    basic.showArrow(ArrowNames.North)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, vitesse)
    ColorStrip(neopixel.colors(NeoPixelColors.Green), neopixel.colors(NeoPixelColors.Red), neopixel.colors(NeoPixelColors.Red), neopixel.colors(NeoPixelColors.Green))
}
function AB () {
    basic.showString("A+B")
    Droite(255, 255)
    basic.pause(1000)
    Gauche(255, 255)
    basic.pause(1000)
    Droite2(255)
    basic.pause(1000)
    Gauche2(255)
    basic.pause(1000)
    Stop()
}
function Gauche2 (vitesse: number) {
    basic.showArrow(ArrowNames.West)
    maqueen.motorStop(maqueen.Motors.M2)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, vitesse)
    ColorStrip(neopixel.colors(NeoPixelColors.Green), neopixel.colors(NeoPixelColors.Green), neopixel.colors(NeoPixelColors.Red), neopixel.colors(NeoPixelColors.Red))
}
function Droite (vitesse1: number, vitesse2: number) {
    basic.showArrow(ArrowNames.East)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, vitesse1)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, vitesse2)
    ColorStrip(neopixel.colors(NeoPixelColors.Red), neopixel.colors(NeoPixelColors.Red), neopixel.colors(NeoPixelColors.Green), neopixel.colors(NeoPixelColors.Green))
}
function Stop () {
    basic.showIcon(IconNames.Heart)
    ColorStrip(neopixel.colors(NeoPixelColors.Red), neopixel.colors(NeoPixelColors.Yellow), neopixel.colors(NeoPixelColors.Green), neopixel.colors(NeoPixelColors.Blue))
    maqueen.motorStop(maqueen.Motors.All)
}
let strip: neopixel.Strip = null
basic.showIcon(IconNames.Heart)
strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.White))
basic.pause(2000)
ColorStrip(neopixel.colors(NeoPixelColors.Red), neopixel.colors(NeoPixelColors.Yellow), neopixel.colors(NeoPixelColors.Green), neopixel.colors(NeoPixelColors.Blue))
strip.show()
basic.pause(2000)
radio.setGroup(1)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        A()
    } else if (input.buttonIsPressed(Button.B)) {
        B()
    } else if (input.buttonIsPressed(Button.AB)) {
        AB()
    } else {
    	
    }
})

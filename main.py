def on_button_pressed_a():
    Avancer()
    basic.pause(2000)
    Reculer()
    basic.pause(2000)
input.on_button_pressed(Button.A, on_button_pressed_a)

def Reculer():
    maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CCW, 100)
    strip.set_pixel_color(0, neopixel.colors(NeoPixelColors.RED))
    strip.set_pixel_color(1, neopixel.colors(NeoPixelColors.GREEN))
    strip.set_pixel_color(2, neopixel.colors(NeoPixelColors.GREEN))
    strip.set_pixel_color(3, neopixel.colors(NeoPixelColors.RED))
    strip.show()
def Avancer():
    maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CW, 100)
    strip.set_pixel_color(0, neopixel.colors(NeoPixelColors.GREEN))
    strip.set_pixel_color(1, neopixel.colors(NeoPixelColors.RED))
    strip.set_pixel_color(2, neopixel.colors(NeoPixelColors.RED))
    strip.set_pixel_color(3, neopixel.colors(NeoPixelColors.GREEN))
    strip.show()

def on_button_pressed_b():
    pass
input.on_button_pressed(Button.B, on_button_pressed_b)

def Stop():
    maqueen.motor_stop(maqueen.Motors.ALL)
    strip.set_pixel_color(0, neopixel.colors(NeoPixelColors.RED))
    strip.set_pixel_color(1, neopixel.colors(NeoPixelColors.RED))
    strip.set_pixel_color(2, neopixel.colors(NeoPixelColors.RED))
    strip.set_pixel_color(3, neopixel.colors(NeoPixelColors.RED))
    strip.show()
strip: neopixel.Strip = None
basic.show_icon(IconNames.HEART)
strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
strip.show_color(neopixel.colors(NeoPixelColors.WHITE))
basic.pause(1000)
strip.set_pixel_color(0, neopixel.colors(NeoPixelColors.RED))
strip.set_pixel_color(1, neopixel.colors(NeoPixelColors.YELLOW))
strip.set_pixel_color(2, neopixel.colors(NeoPixelColors.GREEN))
strip.set_pixel_color(3, neopixel.colors(NeoPixelColors.INDIGO))
strip.show()
basic.pause(1000)

def on_forever():
    pass
basic.forever(on_forever)

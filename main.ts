input.onButtonPressed(Button.A, function () {
    serial.writeLine("hej")
})
music.play(music.createSoundExpression(WaveShape.Sawtooth, 1648, 4226, 175, 255, 100, SoundExpressionEffect.Vibrato, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)

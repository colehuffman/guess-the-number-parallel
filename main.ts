// when A is pressed the guess variable increases by 1
input.onButtonPressed(Button.A, function () {
    guess += 1
    basic.showString("" + (guess))
})
input.onButtonPressed(Button.AB, function () {
    // if the guessed number is equal to the secret number a check is displayed
    // if the guessed number is below the secret number the word "add' is displayed
    // if the guessed number is above the secret number the word "subtract' is displayed
    if (guess == secretnumber) {
        basic.showLeds(`
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            . . . . .
            `)
        basic.pause(1000)
        // resets the entire program when the secret number is guessed
        control.reset()
    } else if (guess < secretnumber) {
        basic.showString("add")
    } else if (guess > secretnumber) {
        basic.showString("subtract")
    }
})
// when B is pressed the guess variable decreases by 1
input.onButtonPressed(Button.B, function () {
    guess += -1
    basic.showString("" + (guess))
})
let guess = 0
let secretnumber = 0
// sets the secret number to a random number between 0 and 25
secretnumber = randint(0, 25)
// stops guessed number from passing 0 or 20
guess = Math.constrain(guess, 0, 25)

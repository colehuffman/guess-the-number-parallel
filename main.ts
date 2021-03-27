// when A is pressed the number variable increases by 1
input.onButtonPressed(Button.A, function () {
    // increases the number variable by 1
    number += 1
    // displays number
    basic.showString("" + (number))
})
input.onButtonPressed(Button.AB, function () {
    // if the guessed number is equal to the secret number a check is displayed
    // if the guessed number is less than the secret number the word "add' is displayed
    // if the guessed number is greater than the secret number the word "subtract' is displayed
    if (number == secretnumber) {
        // displays a check
        basic.showIcon(IconNames.Yes)
        // pauses for 1 second so the viewer can see the check
        basic.pause(1000)
        // resets the entire program when the secret number is guessed
        control.reset()
    } else if (number < secretnumber) {
        // displays "add"
        basic.showString("add")
    } else if (number > secretnumber) {
        // displays "subtract"
        basic.showString("subtract")
    }
    // increases guesses count by 1
    guesses += 1
    // if the wrong number is guessed 3 times the system tells you what the correct number was and then resets
    if (guesses == 3) {
        basic.showString("Good Try! the number was")
        // displays the secretnumber variable
        basic.showString("" + (secretnumber))
        // resets
        control.reset()
    }
})
// when B is pressed the number variable decreases by 1
input.onButtonPressed(Button.B, function () {
    // decreases the number variable by 1
    number += -1
    // sets the number to its absolute value. this stops the number from becoming negative
    number = Math.abs(number)
    // displays number
    basic.showString("" + (number))
})
// tells the user how many guesses are left until the system resets
input.onGesture(Gesture.Shake, function () {
    // calculates the guesses left before reset
    basic.showString("" + (3 - guesses))
    // displays "Guesses left" so that the user knows what the number meant
    basic.showString("Guesses left")
})
let guesses = 0
let number = 0
let secretnumber = 0
// on start the secretnumber variable is set to a random number from 0 to 25
secretnumber = randint(0, 20)

# JavaScript Exercises (Calculator)

This is the final project assignment in **The Odin Project (TOP) Foundations Course**.

## Project: Calculator

### Description

Here are some use cases (expectations about your project):

1. **Basic Math Functions**:

   - Your calculator is going to contain functions for all of the basic math operators you typically find on calculators. Start by creating functions for the following items and test them in your browser’s console:
     - `add`
     - `subtract`
     - `multiply`
     - `divide`

2. **Variables for Calculator Operations**:

   - A calculator operation will consist of a number, an operator, and another number. For example, `3 + 5`.
   - Create three variables, one for each part of the operation. You’ll use these variables to update your display later.

3. **Operate Function**:

   - Create a new function `operate` that takes an operator and two numbers and then calls one of the above functions on the numbers.

4. **Basic HTML Calculator**:

   - Create a basic HTML calculator with buttons for each digit and operator (including `=`).
     - Don’t worry about making them functional just yet.
   - There should also be a display for the calculator. Go ahead and fill it with some dummy numbers so it looks correct.
   - Add a **“clear”** button.

5. **Populate Display**:

   - Create the functions that populate the display when you click the digit buttons.
   - Store the content of the display (the number) in a variable for use in the next step.

6. **Make the Calculator Work**:
   - You’ll need to store the first and second numbers input by the user and then call `operate()` on them when the user presses the `=` button, according to the operator that was selected between the numbers.
   - You should already have the code that can populate the display, so once `operate` has been called, update the display with the result of the operation.
   - **Note**: This is the hardest part of the project. You need to figure out how to store all the values and call the `operate` function with them. Don’t feel bad if it takes you a while to figure out the logic.

---

### Gotchas

Watch out for and fix these bugs if they show up in your code:

1. **Single Pair of Numbers**:

   - Your calculator should not evaluate more than a single pair of numbers at a time.
   - Example: You enter a number (`12`), followed by an operator button (`+`), a second number button (`7`), and a second operator button (`-`). Your calculator should:
     - First, evaluate the initial pair of numbers (`12 + 7`).
     - Then, display the result of that calculation (`19`).
     - Finally, use that result (`19`) as the first number in a new calculation, along with the next operator (`-`).

2. **Round Long Decimals**:

   - Round answers with long decimals so that they don’t overflow the display.

3. **Pressing `=` Early**:

   - Pressing `=` before entering all of the numbers or an operator could cause problems!

4. **Clear Button**:

   - Pressing **“clear”** should wipe out any existing data. Make sure the user is really starting fresh after pressing **“clear”**.

5. **Divide by Zero**:

   - Display a snarky error message if the user tries to divide by `0`… and don’t let it crash your calculator!

6. **Consecutive Operators**:

   - Make sure that your calculator only runs an operation when supplied with two numbers and an operator by the user.
   - Example: You enter a number (`2`), followed by an operator button (`+`). You press the operator button (`+`) a second consecutive time. Your calculator should **not** evaluate this as (`2 + 2`) and should **not** display the result (`4`). If consecutive operator buttons are pressed, your calculator should not run any evaluations; it should only take the last operator entered to be used for the next operation.

7. **New Digit After Result**:
   - When a result is displayed, pressing a new digit should clear the result and start a new calculation instead of appending the digit to the existing result. Check whether this is the case on your calculator!

---

### Extra Credit

1. **Floating Point Numbers**:

   - Users can get floating point numbers if they do the math required to get one, but they can’t type them in yet.
   - Add a `.` button and let users input decimals!
   - Make sure you don’t let them type more than one decimal, like: `12.3.56.5`.
   - Disable the `.` button if there’s already a decimal separator in the display.

2. **Backspace Button**:

   - Add a **“backspace”** button, so the user can undo their last input if they click the wrong number.

3. **Keyboard Support**:
   - Add keyboard support!

---

### Link to the Course

<a href="https://www.theodinproject.com/lessons/foundations-calculator#assignment">𝙻𝚒𝚗𝚔 𝚝𝚘 𝚝𝚑𝚎 𝚌𝚘𝚞𝚛𝚜𝚎 ✨</a>

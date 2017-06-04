# README

## Before you start

First step is to `fork` this repo to your account, then `clone` it locally.

After you do that, `add a remote` to point to CodeYourFuture repo, that will allow you to update you forked copy when we update the repo with more exercises.

This is the command to run
`git remote add cyf git@github.com:CodeYourFuture/js-tdd-exercises.git`

## How to run the tests
To run the tests from the console, run the command: `npm test` 
To keep the tests running (auto updating when you save files), run the command: `npm test -- --watch` then press `a` to run all the tests and keep watching the files for changes. To quit the tests, type `q`.

To run a specifc test, do: `npm test -- filname` for example `npm test -- find-alive` (that will run only the files that matches find-alive, i.e. findAlive.test.js)

## 01-Exercises

The exercises are divided into two groups:

1. A group where we provide the tests, we expect you to write a function that passes those tests. (find-*.js)
2. A group where we provide an implementation where we provide a function and we want you to write tests for the function (and potentially change the function if you find a bug)

Further instructions will be found as comments in the individual files.


When writing tests, always think about Edge cases - unexpected input for example (what if we pass null or undefined as an argument, or pass a string instead of a number). Always write tests for these edge cases. (Read about Defensive Programming in Code Complete for more information)

You unit tests descriptions should be meaningful and easy to read. This is like documentation for what the function does.

>DO NOT Change the tests (you can add more tests though) - let us know if you think one of the tests is wrong.
> 
> Your goal is to turn **Red** to **Green**
>
> Do Not hardcode answers!


## Roman calculator

Using TDD, write a function that converts an Arabic number (the numbers used here) to Roman Numerals.

> Always write tests first

### Part One: Old Roman Numerals

| Arabic Number  | Roman Numeral |
| -------------- | ------------- |
| 1              | I             |
| 5              | V             |
| 10             | X             |
| 50             | L             |
| 100            | C             |
| 500            | D             |
| 1000           | M             |

*Table 1*. Arabic number and their old Roman numeral equivalents.

In the early days of Roman numerals, the Romans built their numerals from the individual characters in Table 1 (e.g., I, V, X, etc.) written largest value to smallest from left to right.  To determine the value of any numeral, they used straight addition.  I is equivalent to 1.  II is equivalent to 1 + 1, or 2.  VIIII is equivalent to 5 + 1 + 1 + 1 + 1, or 9.

### More examples

| Arabic Number  | Roman Numeral |
| -------------- | ------------- |
| 1              | I             |
| 3              | III           |
| 7              | VII           |
| 15             | XV            |
| 18             | XVIII         |
| 22             | XXII          |

We are going to begin writing a function `convertToOldRoman`.  When passed an integer between 1 and 3000, this function will return a string containing the proper old Roman Numeral.  In other words, `convertToOldRoman(4)` should return the string `'IIII'`.  Don't worry about checking whether or not the number passed to the method is between 1 and 3000.

*Hint*: It might be useful to use the integer division `/` and modulus `%` methods.

### Part Two: Modern Roman Numerals

| Arabic Number | Roman Numeral |
| ------------- | ------------- |
| 4             | IV            |
| 9             | IX            |
| 14            | XIV           |
| 44            | XLIV          |
| 99            | XCIX          |
| 400           | CD            |
| 944           | CMXLIV        |

*Table 2*.  Modern Roman numeral examples.

Eventually, the Romans changed systems.  Now, putting a smaller numeral before a larger one meant you had to subtract the smaller one.  So, instead of 4 being represented by 1 + 1 + 1 + 1, it was now 5 - 1, or IV.  4 was not the only value affected (see Table 2 for more examples).

We're going to write a second method so that will return modern Roman Numerals. We'll most likely use some similar logic as in the first function.

```javascript
convertToOldRoman(4)
 => "IIII"
 
convertToNewRoman(4)
 => "IV"
```


## JEST
Refer to our syllabus (JS-Core lesson 3) to refresh your knowledge on the testing framework `JEST` - also refer to its documentation: https://facebook.github.io/jest/docs/api.html



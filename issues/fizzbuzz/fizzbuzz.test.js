// fizzbuzz.test.js
const fizzBuzz = require("./fizzbuzz");

test("FizzBuzz(15)の出力をテストする", () => {
  const result = fizzBuzz(15);
  expect(result).toEqual([
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz",
  ]);
});

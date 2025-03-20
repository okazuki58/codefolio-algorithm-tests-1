// find_max.test.js
const findMax = require("./find_max");

test("配列 [2, 9, 3, 7, 5] の最大値を返す", () => {
  expect(findMax([2, 9, 3, 7, 5])).toBe(9);
});

test("配列 [-10, -3, -1, -7] の最大値を返す", () => {
  expect(findMax([-10, -3, -1, -7])).toBe(-1);
});

test("配列 [5] の最大値を返す", () => {
  expect(findMax([5])).toBe(5);
});

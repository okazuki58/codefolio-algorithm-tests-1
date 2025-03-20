const reverseString = require("./reverse_string");

test("文字列 hello を逆順にして olleh を返す", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("空文字列を与えた場合は空文字列を返す", () => {
  expect(reverseString("")).toBe("");
});

test("文字列 Codefolio を逆順にして oilofedoC を返す", () => {
  expect(reverseString("Codefolio")).toBe("oilofedoC");
});

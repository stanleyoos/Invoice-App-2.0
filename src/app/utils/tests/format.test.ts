const { amountFormat } = require("../format")

test("expect proper amount format", () => {
  expect(amountFormat(15795)).toBe("$157.95")
  expect(amountFormat(20348)).toBe("$203.48")
})

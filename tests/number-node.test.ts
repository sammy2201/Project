import createNumberNode from "../src/ast/number-node";

test("NumberNode handles numbers", () => {
  const node = createNumberNode(1);
  expect(node.evaluate()).toBe(1);
  expect(node.print()).toBe("1");
});

test("NumberNode handles negative numbers", () => {
  const node = createNumberNode(-1);
  expect(node.evaluate()).toBe(-1);
  expect(node.print()).toBe("-1");
});

test("NumberNode handles decimals", () => {
  const node = createNumberNode(1.1);
  expect(node.evaluate()).toBe(1.1);
  expect(node.print()).toBe("1.1");
});

test("NumberNode handles zero", () => {
  const node = createNumberNode(0);
  expect(node.evaluate()).toBe(0);
  expect(node.print()).toBe("0");
});

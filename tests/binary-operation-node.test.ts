import createNumberNode from "../src/ast/number-node";
import createBinaryOperationNode from "../src/ast/binary-operation-node";

test("BinaryOperationNode handles addition", () => {
  const expression = createBinaryOperationNode(
    createNumberNode(5),
    createNumberNode(5),
    "+"
  );
  expect(expression.evaluate()).toBe(10);
  expect(expression.print()).toBe("(5 + 5)");
});

test("BinaryOperationNode handles subtraction", () => {
  const expression = createBinaryOperationNode(
    createNumberNode(10),
    createNumberNode(5),
    "-"
  );
  expect(expression.evaluate()).toBe(5);
  expect(expression.print()).toBe("(10 - 5)");
});

test("BinaryOperationNode handles multiplication", () => {
  const expression = createBinaryOperationNode(
    createNumberNode(4),
    createNumberNode(5),
    "*"
  );
  expect(expression.evaluate()).toBe(20);
  expect(expression.print()).toBe("(4 * 5)");
});

test("BinaryOperationNode handles division", () => {
  const expression = createBinaryOperationNode(
    createNumberNode(10),
    createNumberNode(2),
    "/"
  );
  expect(expression.evaluate()).toBe(5);
  expect(expression.print()).toBe("(10 / 2)");
});

test("BinaryOperationNode handles negative numbers", () => {
  const expression = createBinaryOperationNode(
    createNumberNode(-5),
    createNumberNode(5),
    "+"
  );
  expect(expression.evaluate()).toBe(0);
  expect(expression.print()).toBe("(-5 + 5)");
});

test("BinaryOperationNode handles decimals", () => {
  const expression = createBinaryOperationNode(
    createNumberNode(-5),
    createNumberNode(5.5),
    "+"
  );
  expect(expression.evaluate()).toBe(0.5);
  expect(expression.print()).toBe("(-5 + 5.5)");
});

test("BinaryOperationNode handles division by zero", () => {
  const expression = createBinaryOperationNode(
    createNumberNode(1),
    createNumberNode(0),
    "/"
  );
  expect(() => expression.evaluate()).toThrow("Division by zero");
});

test("BinaryOperationNode handles division with negative numbers", () => {
  const expression = createBinaryOperationNode(
    createNumberNode(-10),
    createNumberNode(2),
    "/"
  );
  expect(expression.evaluate()).toBe(-5);
  expect(expression.print()).toBe("(-10 / 2)");
});

test("BinaryOperationNode handles nested operations", () => {
  const expression = createBinaryOperationNode(
    createBinaryOperationNode(createNumberNode(1), createNumberNode(2), "+"),
    createNumberNode(2),
    "*"
  );
  expect(expression.evaluate()).toBe(6);
  expect(expression.print()).toBe("((1 + 2) * 2)");
});

test("BinaryOperationNode handles invalid operations", () => {
  const expression = createBinaryOperationNode(
    createNumberNode(1),
    createNumberNode(0),
    "#"
  );
  expect(() => expression.evaluate()).toThrow("Invalid operator");
  expect(expression.print()).toBe("(1 # 0)");
});

test("BinaryOperationNode handles equal to operations", () => {
  const expression = createBinaryOperationNode(
    createNumberNode(1),
    createNumberNode(11),
    "="
  );
  expect(expression.evaluate()).toBe(false);
  expect(expression.print()).toBe("(1 = 11)");
});

test("BinaryOperationNode handles less than comparison", () => {
  const expression = createBinaryOperationNode(
    createNumberNode(5),
    createNumberNode(10),
    "<"
  );
  expect(expression.evaluate()).toBe(true);
  expect(expression.print()).toBe("(5 < 10)");
});

test("BinaryOperationNode handles greater than comparison", () => {
  const expression = createBinaryOperationNode(
    createNumberNode(10),
    createNumberNode(5),
    ">"
  );
  expect(expression.evaluate()).toBe(true);
  expect(expression.print()).toBe("(10 > 5)");
});

test("BinaryOperationNode handles complex operations", () => {
  const expression = createBinaryOperationNode(
    createBinaryOperationNode(
      createBinaryOperationNode(
        createNumberNode(50),
        createNumberNode(0.5),
        "*"
      ),
      createBinaryOperationNode(
        createNumberNode(-50),
        createNumberNode(0.5),
        "*"
      ),
      "+"
    ),
    createNumberNode(10),
    "-"
  );

  expect(expression.evaluate()).toBe(-10);
  expect(expression.print()).toBe("(((50 * 0.5) + (-50 * 0.5)) - 10)");
});

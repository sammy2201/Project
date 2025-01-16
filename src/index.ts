import createNumberNode from "./ast/number-node";
import createBinaryOperationNode from "./ast/binary-operation-node";

// Expression 1 for nested operation
const expression1 = createBinaryOperationNode(
  createBinaryOperationNode(createNumberNode(50), createNumberNode(0.5), "*"),
  createBinaryOperationNode(createNumberNode(-50), createNumberNode(0.5), "*"),
  "+"
);

console.log("Expression = ", expression1.print());
console.log("Result = ", expression1.evaluate());

// Expression 2 for comparision operation
const expression2 = createBinaryOperationNode(
  createNumberNode(50),
  createNumberNode(0.5),
  "<"
);

console.log("Expression = ", expression2.print());
console.log("Result = ", expression2.evaluate());

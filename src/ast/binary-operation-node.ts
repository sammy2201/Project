import ASTNode from "./ast-node";

interface BinaryOperationNode extends ASTNode {
  left: ASTNode;
  right: ASTNode;
  operator: "+" | "-" | "*" | "/" | "<" | ">" | "=" | string;
}

const createBinaryOperationNode = (
  left: ASTNode,
  right: ASTNode,
  operator: "+" | "-" | "*" | "/" | "<" | ">" | "=" | string
): BinaryOperationNode => {
  return {
    left,
    right,
    operator,
    evaluate: () => {
      const leftValue = left.evaluate();
      const rightValue = right.evaluate();

      if (typeof leftValue !== "number" || typeof rightValue !== "number") {
        throw new Error("Both operands must be numbers");
      }

      switch (operator) {
        //Type assertion as the required types are numbers
        case "+":
          return (leftValue as number) + (rightValue as number);
        case "-":
          return (leftValue as number) - (rightValue as number);
        case "*":
          return (leftValue as number) * (rightValue as number);
        case "/":
          if ((rightValue as number) === 0) {
            throw new Error("Division by zero");
          }
          return (leftValue as number) / (rightValue as number);
        case "<":
          return (leftValue as number) < (rightValue as number);
        case ">":
          return (leftValue as number) > (rightValue as number);
        case "=":
          return leftValue === rightValue;
        default:
          throw new Error("Invalid operator");
      }
    },
    print: () => `(${left.print()} ${operator} ${right.print()})`,
  };
};

export default createBinaryOperationNode;

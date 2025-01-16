import ASTNode from "./ast-node";

export interface NumberNode extends ASTNode {
  value: number;
}

const createNumberNode = (value: number): NumberNode => {
  return {
    value,
    evaluate: () => value,
    print: () => value.toString(),
  };
};

export default createNumberNode;

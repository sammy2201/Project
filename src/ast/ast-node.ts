export default interface ASTNode {
  evaluate(): number | boolean; //I have added a boolean as I want to implement a comparative operation
  print(): string;
}

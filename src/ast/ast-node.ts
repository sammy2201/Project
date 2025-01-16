export default interface ASTNode {
  evaluate(): number | boolean; //Added a boolean to implement a comparative operation
  print(): string;
}

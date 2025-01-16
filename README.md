This project provides a TypeScript-based Abstract Syntax Tree (AST) implementation for evaluating arithmetic and comparison operations. It features NumberNode for representing numeric values and BinaryOperationNode for handling operations like addition, subtraction, multiplication, division, and comparisons.

##Features:
Below features have been implemented in this project.

1. Basic arithmetic operations.
2. Nested expressions.
3. Error handling (e.g., division by zero).
4. Support for comparison operations.
5. Enhanced error handling with descriptive messages (e.g., "Invalid operator").
6. Print functionality for converting expressions into string representations

##Prerequisites:
Ensure you have the following installed on your system:

1. Node.js
2. npm

##Installation:

1. First Clone the repository
2. Install dependencies using npm or another package manager
   `npm init`
   `npm install`

##Run:
To run the project use below comand:
`npx ts-node src/index.ts`

##Implementation Approch:

1. I began by carefully reading and analyzing the requirements to ensure a clear understanding of the task.
2. I started by writing tests to cover all the cases and different scenarios. This helped define the expected behavior.
3. Implemented separate files for each interface, ensuring a modular design. I referred to the provided documentation to determine how the interfaces should be structured.
4. Developed the evaluate() function for BinaryOperationNode to handle calculations.
5. Implemented an additional print() function to print expressions in terminal. 
6. Added comparison operations to the switch statement in the evaluate() function. I also included validation to check for invalid operations and throw appropriate errors.
7. I referred to the Example Usage section in the provided documentation for creating expression in index.ts.
8. To execute the program, I used npx ts-node src/index.ts This outputs the results of the evaluate() and print() functions.

##Testing:
This project includes two test files that validate the functionality of the core components of the AST implementation: binary-operation-node and number-node. The tests, written using Jest, cover various cases such as numeric evaluations, nested operations, and error handling. There are a total of 18 tests.

###Test Files

1. binary-operation-node.test.ts: Tests for the binary operations like addition, subtraction, multiplication, division, nested expressions and comparisons.
2. number-node.test.ts: Tests for numeric literal handling, including basic numbers, negative numbers, and decimals.

To execute the tests, use: `npm test`

##AI usage:
I have used AI to generate the test-cases.

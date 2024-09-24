/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  
   constructor(a){
      this.result =0;
   }

   add(a){
     this.result += a;
   }

   subtract(a){
     this.result -=a;
   }

   multiply(a){
     this.result *= a;
   }

   divide(a){
    if (a !== 0) {
      this.result /= a; // Use this.result to access the property
    } else {
      throw new Error("Cannot divide by zero");
    }
   }

   clear(){
      this.result =0;
   }
   getResult(){
     return this.result;
   }

   calculate(expression){
    const validCharacters = /^[0-9+\-*/() ]+$/;
    if (!validCharacters.test(expression)) {
      throw new Error('Error: Expression contains invalid characters');
    }

    try {
      const outputQueue = [];
      const operatorStack = [];
      const operators = {
        '+': { precedence: 1, associativity: 'Left' },
        '-': { precedence: 1, associativity: 'Left' },
        '*': { precedence: 2, associativity: 'Left' },
        '/': { precedence: 2, associativity: 'Left' }
      };

      // Remove continuous spaces and tokenise the expression
      const tokens = expression.replace(/\s+/g, '').match(/[0-9]+|[+\-*/()]/g);
      if (!tokens) {
        throw new Error('Invalid expression');
      }

      // Shunting Yard Algorithm to convert infix to postfix
      tokens.forEach(token => {
        if (!isNaN(token)) {
          outputQueue.push(token);
        } else if ('+-*/'.includes(token)) {
          while (operatorStack.length &&
                 '*/+-'.includes(operatorStack[operatorStack.length - 1]) &&
                 ((operators[token].associativity === 'Left' && operators[token].precedence <= operators[operatorStack[operatorStack.length - 1]].precedence) ||
                  (operators[token].associativity === 'Right' && operators[token].precedence < operators[operatorStack[operatorStack.length - 1]].precedence))) {
            outputQueue.push(operatorStack.pop());
          }
          operatorStack.push(token);
        } else if (token === '(') {
          operatorStack.push(token);
        } else if (token === ')') {
          while (operatorStack[operatorStack.length - 1] !== '(') {
            outputQueue.push(operatorStack.pop());
          }
          operatorStack.pop();
        }
      });

      while (operatorStack.length) {
        outputQueue.push(operatorStack.pop());
      }

      // Evaluate the postfix expression
      const stack = [];
      outputQueue.forEach(token => {
        if (!isNaN(token)) {
          stack.push(Number(token));
        } else {
          const b = stack.pop();
          const a = stack.pop();
          switch (token) {
            case '+':
              stack.push(a + b);
              break;
            case '-':
              stack.push(a - b);
              break;
            case '*':
              stack.push(a * b);
              break;
            case '/':
              stack.push(a / b);
              break;
            default:
              throw new Error('Invalid operator');
          }
        }
      });

      this.result = stack[0]; // Update the result variable
      return this.result; // Return the result
    } catch (e) {
      throw new Error('Error: Invalid expression');
    }
  
   }
}

module.exports = Calculator;

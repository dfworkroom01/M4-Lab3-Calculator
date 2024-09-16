//Calculation basic functions for the calculator
function compute() {
  let computation;
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) return;
 
  switch (operation) {
      case '+':
          computation = prev + current;
          break;
      case '-':
          computation = prev - current;
          break;
      case '*':
          computation = prev * current;
          break;
      case '/':
          computation = prev / current;
          break;
      default:
          return;
  }

  currentOperand = computation;
  operation = undefined;
  previousOperand = '';
  updateDisplay(); // Refresh the display 
}
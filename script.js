const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
let currentInput = "";
let result = null;
let lastOperator = null;

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (button.id === "clear") {
      currentInput = "";
      result = null;
      lastOperator = null;
      display.textContent = "0";
    } else if (button.id === "equals") {
      try {
        result = eval(currentInput);
        display.textContent = result;
        currentInput = result.toString();
      } catch (e) {
        display.textContent = "Error";
        currentInput = "";
      }
    } else {
      currentInput += value;
      display.textContent = currentInput;
    }
  });
});

// Variables
let user_name = `Soha`; //syntax: let variable_name = value

const num1 = 25;
const num2 = 66.5;

// Calculating with different operations
const sum = num1 + num2;
const difference = num1 - num2;
const product = num1 * num2;
const quotient = num1 / num2;
const remainder = num1 % num2;


document.getElementById("Add").textContent = `The addition of ${num1} and ${num2} is: ${sum}`;
document.getElementById("Subtract").textContent = `The subtraction of ${num1} from ${num2} is: ${difference}`;
document.getElementById("Multiply").textContent = `The multiplication of ${num1} and ${num2} is: ${product}`;
document.getElementById("Divide").textContent = `The division of ${num1} by ${num2} is: ${quotient}`;
document.getElementById("Modulus").textContent = `The remainder when ${num1} is divided by ${num2} is: ${remainder}`;
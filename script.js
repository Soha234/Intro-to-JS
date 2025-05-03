// Variables
let user_name = `Soha`; //syntax: let variable_name = value

const num1 = 25;
const num2 = 56;

const num3 = 67;
const num4 = 2.6;

const num5 = 86;
const num6 = 24.8;

const num7 = 35;
const num8 = 22.2;

const num9 = 37;
const num10 = 46.7;

// Calculating with different operations
const sum = num1 + num2;
const difference = num3 - num4;
const product = num5 * num6;
const quotient = num7 / num8;
const remainder = num9 % num10;


document.getElementById("Add").textContent = `The addition of ${num1} and ${num2} is: ${sum}`;
document.getElementById("Subtract").textContent = `The subtraction of ${num3} from ${num4} is: ${difference}`;
document.getElementById("Multiply").textContent = `The multiplication of ${num5} and ${num6} is: ${product}`;
document.getElementById("Divide").textContent = `The division of ${num7} by ${num8} is: ${quotient}`;
document.getElementById("Modulus").textContent = `The remainder when ${num9} is divided by ${num10} is: ${remainder}`;
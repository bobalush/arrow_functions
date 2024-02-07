// function declaration
let average = function(num1, num2) {
    let avg = (num1 + num2) /2;
    return avg;
}


// fat arrow function style!
let averageArrow = (num1, num2) => {
    let avg = (num1 + num2) / 2;
    return avg;
}

console.log(average(4, 6));
console.log(averageArrow(4, 6));


// arrow function with single parameter with no parenthesis

const sayName = name => {
    return "Hello " + name;
}

console.log(sayName("Loi"));


// Single Expression Arrow Functions

const multiply = function(num1, num2) {
    return num1 * num2;
  };
  
  // do not need to explicitly state return!
  const arrowMultiply = (num1, num2) => num1 * num2;

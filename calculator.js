const prompt = require('prompt-sync')();

const c_add = 1;
const c_multiply = 2;
const c_subtract = 3;
const c_divide = 4;


add = (a, b) => {
    return parseInt(a) + parseInt(b);    
}

multiply = (a, b) => {
    return parseInt(a) * parseInt(b);
}

subtract = (a, b) => {
    return parseInt(a) - parseInt(b);
}

divide = (a, b) =>{
    return parseInt(a) / parseInt(b);
}

choice_add = () => {
    const add_1 = prompt("Please input the first number: ");
    const add_2 = prompt("Please input the second number: ");
    console.log(`Answer: ${add(add_1, add_2)}`);
}

choice_multiply = () => {
    const multiply_1 = prompt("Please input the first number: ");
    const multiply_2 = prompt("Please input the second number: ");
    console.log(`Answer: ${multiply(multiply_1, multiply_2)}`);
}

choice_subtract = () => {
    const subtract_1 = prompt("Please input the first number: ");
    const subtract_2 = prompt("Please input the second number: ");
    console.log(`Answer: ${subtract(subtract_1, subtract_2)}`);
}

choice_divide = () => {
    const divide_1 = prompt("Please input the first number: ");
    const divide_2 = prompt("Please input the second number: ");
    console.log(`Answer: ${divide(divide_1, divide_2)}`);
}




let inner_choice = "y"


console.log("What do you want to do?: \n 1. Add \n 2. Multiply \n 3. Subtract \n 4. Divide \n Choice: ")
let choice = prompt();




while(inner_choice == 'y'){
    if(choice == c_add){
        {
            choice_add();
            inner_choice = prompt("Do you want to add again? (y/n): ");
        }
    }

    else if(choice == c_multiply){
        {
            choice_multiply();
            inner_choice = prompt("Do you want to multiply again? (y/n): ");
        }
    }

    else if(choice == c_subtract){
        {
            choice_subtract();
            inner_choice = prompt("Do you want to subtract again? (y/n): ");
        }
    }

    else if(choice == c_divide){
        {
            choice_divide();
            inner_choice = prompt("Do you want to divide again? (y/n): ");
        }
    }
}



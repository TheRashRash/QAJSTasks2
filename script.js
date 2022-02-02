let darthVader = {
    "allegience" : "empire",
    "weapon" : "lightsabre",
    "sith" : true
};

console.log(darthVader);

console.log(`Darth Vader's allegience is to the ${darthVader.allegience}.`);
console.log(`Darth Vader's weapon of choice is the ${darthVader.weapon}.`);
console.log(`Darth Vader is a sith?: ${darthVader.sith}.`);
console.log(`Darth Vader is a Jedi?: ${!(darthVader.sith)}.`);


let myArray = ["hello", "everyone"];

console.log(myArray.length);

myArray.push("First added");
myArray.push("Second added");
myArray.push("Third added");

for(let i in myArray){
    console.log(myArray[i]);
};


// functions 

// Create a function that takes in 2 parameters num1 and num2 and subtracts the two numbers.

function subtract(a, b) {
    return a - b;
}

console.log(subtract(1, 32));


function welcome(name, age, gender){
    return `Hi my name is ${name}, I am ${age} years old and I am a ${gender}.`;
}

console.log(welcome("Rasheed", 29, "Male"));

powerUp = (n1, n2) => {
    return n1 ** n2;
}

console.log(powerUp(2, 3));


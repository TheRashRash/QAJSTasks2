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
const mark = {
    name : 'Mark',
    surname : 'Miller',
    height : 1.69,
    weight : 78
}; 
const john = {
    name: 'John',
    surname: 'Smith',
    height: 1.95,
    weight : 92
}

const people = [ mark, john ];

function calculateBmi(person){
    const personsBmi = person.weight / (person.height ** 2);
    return parseFloat(personsBmi.toFixed(1));
}

function printData(people){
    people.forEach(p => console.log(`${p.name} weigths ${p.weight} kg and is ${p.height} m tall. ${p.name}'s is ${calculateBmi(p)}.`));
};

function printHigherBmi(people){
    if(calculateBmi(people[0]) > calculateBmi(people[1])){
       return console.log(`${people[0].name}'s BMI (${calculateBmi(people[0])}) is higher than ${people[1].name}'s (${calculateBmi(people[1])})!`);
    }
       return console.log(`${people[1].name}'s BMI (${calculateBmi(people[1])}) is higher than ${people[0].name}'s (${calculateBmi(people[0])})!`);
}

printData(people);
printHigherBmi(people);
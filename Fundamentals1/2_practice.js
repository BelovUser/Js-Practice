let markBmi;
let johnBmi;
let weightMark;
let heightMark;
let weightJohn;
let heightJohn;

function bmiCalculator(weight, height){
return  weight/(height **2);
};

function markHigherBmi(markBmi,johnBmi){
    return markBmi > johnBmi;
};

function winnerPrinter(markIsWinner,markBmi,johnBmi){
    if(markBmi == null && johnBmi == null){
        return markIsWinner? `Mark's BMI is higher than John's!` : `John's BMI is higher than Mark's!`;
    }
    return markIsWinner? `Mark's BMI is higher (${markBmi}) than John's (${johnBmi})!` : `John's BMI(${johnBmi}) is higher than Mark's(${markBmi})!`;
}

//Data 1
weightMark = 78;
heightMark = 1.69;
weightJohn = 92;
heightJohn = 1.95;

//Method toFixed turns the number to String so you need to wrap it in parseFloat to map it back to number
markBmi = parseFloat(bmiCalculator(weightMark,heightMark).toFixed(1));
johnBmi = parseFloat(bmiCalculator(weightJohn,heightJohn).toFixed(1));

console.log(winnerPrinter(markHigherBmi(markBmi,johnBmi)));
//Data 2
console.log(winnerPrinter(markHigherBmi(markBmi,johnBmi),markBmi,johnBmi));

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

//Data 1
weightMark = 78;
heightMark = 1.69;
weightJohn = 92;
heightJohn = 1.95;

markBmi = bmiCalculator(weightMark,heightMark);
johnBmi = bmiCalculator(weightJohn,heightJohn);

console.log(`Mark hase higher BMI: ${markHigherBmi(markBmi,johnBmi)}`);
//Data 2
weightMark = 95;
heightMark = 1.88;
weightJohn = 85;
heightJohn = 1.76;

markBmi = bmiCalculator(weightMark,heightMark);
johnBmi = bmiCalculator(weightJohn,heightJohn);

console.log(`Mark hase higher BMI: ${markHigherBmi(markBmi,johnBmi)}`);


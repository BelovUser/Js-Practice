let tip;
let bill;

function calculateTip(bill){
    return  bill <= 300 && bill >= 50 ? (bill/100) * 15 : (bill/100) * 20;
};

let billWithTip;

//Data 1
bill = 275;
tip = calculateTip(bill);
billWithTip = bill + tip;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${billWithTip}`);
//Data 2
bill = 40;
tip = calculateTip(bill);
billWithTip = bill + tip;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${billWithTip}`);
//Data 3
bill = 430;
tip = calculateTip(bill);
billWithTip = bill + tip;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${billWithTip}`);
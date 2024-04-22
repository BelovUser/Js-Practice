let bills;
let tips;
let totals;

function calcTip(bill){
    return bill <= 300 && bill >= 50 ? (bill/100) * 15 : (bill/100) * 20;
};

function getTotals(bills){
    return bills.map(b => b + calcTip(b));
};

function getAverage(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum/arr.length;
}

//Data 1 get Total
bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
totals = getTotals(bills);

console.log(totals);
//Data 2 get average
let avg = getAverage(totals);

console.log(avg);
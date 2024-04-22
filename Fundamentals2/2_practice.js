let bills;
let tips;
let totals;

function calcTip(bill){
    return bill <= 300 && bill >= 50 ? (bill/100) * 15 : (bill/100) * 20;
};
// for changing values in array us map not forEact!
function getTips(bills){
    return bills.map(b => calcTip(b));
};

function getTotals(bills){
    return bills.map(b => b + calcTip(b));
};

//Data 1 get Tips
bills = [125,555,44];
tips = getTips(bills);

console.log(tips);
//Data 2 get Total
bills = [125,555,44];
totals = getTotals(bills);

console.log(totals);

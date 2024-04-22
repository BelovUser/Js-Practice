let dolphinsScore;
let koalasScore;
let dolphinsAvg;
let koalasAvg;

function calcAverage(teamScores){
    let scoreSum = 0;
    for(let i = 0; i < teamScores.length; i++){
        scoreSum += teamScores[i];
    }
    return scoreSum/teamScores.length;
};

function checkWinner(avgDolphins,avgKoalas){
    return avgDolphins >= avgKoalas * 2 || avgKoalas >= avgDolphins *2 ? `Dolphins win (${avgDolphins} vs ${avgKoalas})` : `Koalas win (${avgKoalas} vs ${avgDolphins})`;
};

//Data 1
dolphinsScore = [44,23,71];
koalasScore = [65,54,49];

dolphinsAvg = calcAverage(dolphinsScore);
koalasAvg = calcAverage(koalasScore);

console.log(checkWinner(dolphinsAvg,koalasAvg));
//Data 2
dolphinsScore = [85,54,41];
koalasScore = [23,34,27];

dolphinsAvg = calcAverage(dolphinsScore);
koalasAvg = calcAverage(koalasScore);

console.log(checkWinner(dolphinsAvg,koalasAvg));
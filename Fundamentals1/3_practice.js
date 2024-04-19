let dolphinsScores = [];
let koalasScores = [];

function getAverage(scores){
    //why does i should have assigned 0 to scoreSum?
    let scoreSum = 0;
    for(let i = 0; i < scores.length; i++){
        scoreSum += scores[i];
    };
    return scoreSum / scores.length;
};

function printWinner(doplhinsAvg, koalasAvg){
    if(doplhinsAvg == koalasAvg){
        return 'Draw!';
    } else if(doplhinsAvg > koalasAvg){
        return 'Dolphins Win!';
    } else if(doplhinsAvg < koalasAvg){
        return 'Koalas Win!';
    }
};

function printWinnerBonus(doplhinsAvg, koalasAvg){
    if(doplhinsAvg == koalasAvg && doplhinsAvg >= 100 && koalasAvg >= 100){
        return 'Draw!';
    } else if(doplhinsAvg > koalasAvg && doplhinsAvg >= 100){
        return 'Dolphins Win!';
    } else if(doplhinsAvg < koalasAvg && koalasAvg >= 100){
        return 'Koalas Win!';
    } else{
        return 'Nobody Won!';   
    }
};

//Data1
dolphinsScores = [96, 108, 101];
koalasScores = [88, 91, 110];

console.log(printWinner(getAverage(dolphinsScores),getAverage(koalasScores)));
//Data Bonus 1
dolphinsScores = [97, 112, 101];
koalasScores = [109, 95, 123];

console.log(printWinnerBonus(getAverage(dolphinsScores),getAverage(koalasScores)));
//Data Bonus 2
dolphinsScores = [97, 112, 101];
koalasScores = [109, 95, 106];

console.log(printWinnerBonus(getAverage(dolphinsScores),getAverage(koalasScores)));




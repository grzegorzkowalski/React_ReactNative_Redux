//Zadanie 1

function distFromAverage(tab) {
    const avg = tab.reduce((total, cur) => total + cur, 0)/tab.length;
    return tab.map((el) => Math.abs(el - avg));
}

console.table(distFromAverage([1,2,3,4,5,6,7]));
console.log("[3,2,1,0,1,2,3]");
console.table(distFromAverage([1,1,1,1]));
console.log("[0,0,0,0]");
console.table(distFromAverage([2,8,3,7]));
console.log("[3,3,2,2]");

//distFromAverage([1,2,3,4,5,6,7]) => c (średnia z tablicy wejściowej to 4)
// distFromAverage([1,1,1,1]) => [0,0,0,0] (średnia z tablicy wejściowej to 1)
// distFromAverage([2,8,3,7]) => [3,3,2,2] (średnia z tablicy wejściowej to 5)
console.log("<======> Zadanie 2");
//Zadanie 2

function multiply(tab) {
    return tab.reduce((total, cur) => total * cur, 1);
}

console.log(multiply([1,2,3,4,5,6,7]), "wynik oczekiwany to => 5040"); //=> 5040
console.log(multiply([1,1,1,1])); // => 1
console.log(multiply([2,8,3,7])); // => 336

//Zadanie 3

function getEvenAverage(tab) {
    console.log(tab, "pełna tablica");
    const evenTab = tab.filter(function(el) {
        return el % 2 === 0;
    });

    const evenTab2 = tab.filter((el) => el % 2 === 0);

    console.log(evenTab, "odfiltrowana tablica");

    if (evenTab.length === 0) {
        return 0;
    }

    return evenTab.reduce((cur, next) => cur + next)/evenTab.length;
}

console.log(getEvenAverage([1,2,3,4,5,6,7]), "Oczekiwany 4"); //=> 4
getEvenAverage([1,1,1,1]) //=> null
getEvenAverage([2,8,3,7,4]) //=> 4.666

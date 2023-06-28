//Zadanie 1

const getSecondMaxNumber = (tab) => {
    const dubler = [...tab].sort((a,b) => b - a);
    if (dubler.length >= 2) {
        return dubler[1];
    }
    else {
        return false;
    }
}

const arr1 = [2, 3, 1, 6, 100, 49, 5, 7, 8, 9 ];
console.log(getSecondMaxNumber(arr1));
console.log(arr1);
//Wynik w consoli: 49 // Największą liczbą w tablicy jest 100, ale my szukaliśmy drugiej największej więc odpowiedzią musi być 49 w tym przypadku

//Zadanie 2

const runInterval = (n = 8) => {
    let counter = 0;
    const idInterval = setInterval(() => {
        if (counter < n) {
            console.log("Hello");
            counter++;
        }
        else {
            clearInterval(idInterval);
        }
    }, 1000);
};


runInterval(5);

//Zadanie 3



//Zadanie 1

const tabA = ["Zosia", "Marcin", "Kamil"];// Tablica 1
const tabB = [ "Jan", "Karol" ]; // Tablica 2

const names = [...tabA, "Marcin", "Kamil", ...tabB];

console.log(names);


//Zadanie 2

const getAverage = (...params) => {
    console.log(params);
    return params.reduce((cur, next) => cur + next, 0)/params.length;
}

console.log(getAverage(2, 4, 5, 6, 7, 79).toFixed(2));
console.log(Math.floor(getAverage(2, 4, 5, 6, 7, 79)));

//Zadanie 3
console.log([..."Grzegorz"]);

//Zadanie 4

const vegetables = ["🍅", "🥒"];

const fruits = ["🍎", "🍌"];

const mix = [...vegetables, ...fruits];

console.log(vegetables);
console.log(fruits);
console.log(mix);

//Zadanie 5

const state = {
    invoiceSection: false,
    availableYears: [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005],
    formStatus: "failed",
    isUserLogged: false
};

const stateCopy = {
    ...state,
    isUserLogged: !state.isUserLogged,
    availableYears: state.availableYears.filter(el => el <= 1999)
};

console.log(stateCopy);


//Zadanie 1

const weather = [ "snow", "rain", "sun" ];

const [snow, ,sun] = weather;
console.log(snow);
console.log(sun);

//Zadanie 2

const slider = {
    type: "infinite",
    numberOfItems: 10,
    center: true,
    autoStart: true
}

const {type, autoStart} = slider;
console.log(type);
console.log(autoStart);

//Zadanie 3

const names = ["Grzegorz", "Marcin", "Bonawentura"];
const [, , bonawentura] = names;

console.log(bonawentura);

//Zadanie 4

const generateRandomNumbers = (min, max) => {
    const numbers = [];
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    for (let i = 0; i < 6; i++) {
        numbers.push(getRandomInt(min, max));
    }
    console.log(numbers);
    return numbers;
}

const [first,,three] = generateRandomNumbers(0,5);
//const [first,,three] = generateRandomNumbers(0.4545454,5.655767577);
console.log(first, three);

//Zadanie 5

const cat = {
    name: "Mruczek",
    age: 10,
    getVoice: () => "miau miau"
};

const showAnimal = ({name, age: catAge, getVoice}) => {
    return `Kot ${name} ma ${catAge} lat i robi ${getVoice()}.`
}

console.log(showAnimal(cat));


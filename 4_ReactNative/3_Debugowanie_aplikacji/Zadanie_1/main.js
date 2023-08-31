const randomNumber = Math.random();
console.log(randomNumber);
if (randomNumber > 0.5) {
    console.warn("Random number większy");
}
else {
    console.error("Random number mniejszy")
}

const tab = ["pomidor", "cebula", "ziemniak"];

console.table(tab);
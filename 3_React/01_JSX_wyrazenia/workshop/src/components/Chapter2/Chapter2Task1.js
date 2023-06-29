const Chapter2Task1 = () => {
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const numberA = getRandomInt(1,10);
    const numberB = getRandomInt(1,10);
    const result = parseInt(prompt(`Podaj wynik dodawania ${numberA} + ${numberB}`));

    if (result === numberA+numberB) {
        return <div style={{
            width: "200px",
            height: "50px",
            backgroundColor: "green",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>Odpowiedź poprawna</div>
    } else {
        return <div style={{
            width: "200px",
            height: "50px",
            backgroundColor: "red",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>Odpowiedź błędna</div>
    }
};

export default Chapter2Task1;

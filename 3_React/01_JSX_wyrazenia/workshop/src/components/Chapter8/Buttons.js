const Buttons = () => {

    const clickHandler = () => {
        const numberA = parseInt(prompt("Podaj liczbę A?"));
        const numberB = parseInt(prompt("Podaj liczbę B?"));
        console.log(numberA**numberB);
        console.log(Math.pow(numberA, numberB));
    }

    return (
        <div>
            <button onClick={() => console.log("Pierwszy przycisk kliknięty")}>
                Button 1
            </button>
            <button onClick={clickHandler}>Button 2</button>
            <button onClick={() => console.log(window.innerHeight, window.innerWidth)}>
                Button 3
            </button>
        </div>
    );
};

export default Buttons;
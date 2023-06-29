const Task1 = () => {
    const numberA = parseInt(prompt("Podaj liczbę A?"));
    const numberB = parseInt(prompt("Podaj liczbę B?"));
    console.log(numberA + numberB);

    return (
        <>
            <p>Wynik dodawania {numberA} i {numberB} to:
                {numberA + numberB}
            </p>
        </>
    );
};

export default Task1;

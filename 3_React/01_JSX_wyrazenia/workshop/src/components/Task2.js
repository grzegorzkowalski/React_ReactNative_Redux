const Task2 = () => {
    const date = parseInt(prompt("Podaj swój rok urodzenia?"));
    return (
        <h1>
            Twój wiek to: {new Date().getFullYear() - date } 🎂
        </h1>
    );
};

export default Task2;

const Chapter3Task4 = () => {
    const students = [
        {name: "Grzegorz", surname: "Kowalski", grade: "1"},
        {name: "Marcin", surname: "Kowalski", grade: "2"},
        {name: "Adam", surname: "Kowalski", grade: "1"},
        {name: "Tadeusz", surname: "Kowalski", grade: "5"},
        {name: "Maciej", surname: "Kowalski", grade: "3+"},
    ]
    return (
        <ul>
            {
                students.map((el, i) => {
                    return (
                        <li
                            key={i}
                            style={{
                                color: el.grade < 2 ? "red" : "green",
                                backgroundColor: "#FFF"
                            }}
                        >
                            {el.name} {el.surname} - {el.grade}
                        </li>
                    )
                })
            }
        </ul>
    );
};

export default Chapter3Task4;

import {useState, useEffect} from 'react';

const NumberRandomInfo = () => {
    const [number, setNumber] = useState(0);

    useEffect(() => {
        const intervalID = setInterval(() => {
            const randomNumber = Math.ceil(Math.random() * 5);
            setNumber(randomNumber);
        }, 2000);
        return () => clearInterval(intervalID);
    }, []);

    return (
        <div>
            <p>{number}</p>
            <p>{number > 3 ? "Większe od 3" : "Mniejsze, równe 3"}</p>
        </div>
    );
};

export default NumberRandomInfo;
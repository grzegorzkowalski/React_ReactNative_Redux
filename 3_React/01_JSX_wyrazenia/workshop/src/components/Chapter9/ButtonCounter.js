import {useState} from 'react';
import ButtonToClick from "./ButtonToClick";

const ButtonCounter = () => {
    const [counter, setCounter] = useState(0);

    const addCounter = () => {
        setCounter(prev => prev + 1);
    }

    return (
        <div>
            <h1>{counter}</h1>
            <ButtonToClick addCounter={addCounter} />
        </div>
    );
};

export default ButtonCounter;
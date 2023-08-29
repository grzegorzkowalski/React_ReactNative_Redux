import {useState} from 'react';

const TextTyper = ({text}) => {
    const [counter, setCounter] = useState(1);

    const add = () => {
        setCounter(prev => {
           if (prev + 1 <= text.length) {
               return prev + 1;
           }
           else {
               return prev;
           }
        })
    };

    const remove = () => {
        setCounter(prev => {
        if (prev - 1 > 0) {
            return prev - 1;
        }
        else {
            return prev;
        }
    })};

    return (
        <div>
            <h1>{text.slice(0, counter)}</h1>
            <button onClick={remove}>-</button>
            <button onClick={add}>+</button>
        </div>
    );
};

export default TextTyper;
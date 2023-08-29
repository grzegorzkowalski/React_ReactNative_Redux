import React, {useState, useEffect} from 'react';

const Modal = ({heading}) => {
    const [time, setTime] = useState(false);

    useEffect(() => {
        const timeoutID = setTimeout(() => {
            setTime(prev => !prev);
        }, 10000);
        return () => clearTimeout(timeoutID);
    }, []);
    return (
        <div>
            <h1>Test okna modalnego</h1>
            {time && <h2>{heading}</h2>}
        </div>
    );
};

export default Modal;
import {useState, useEffect} from 'react';

const HelloWorld = () => {
    const [hello, setHello] = useState("Hello, World!");

    useEffect(() => {
        const timeoutID = setTimeout(() => {
            setHello("Hi, Everyone!");
        }, 5000);
        return () => clearTimeout(timeoutID);
    }, []);

    return (
        <div>
            <p>{hello}</p>
        </div>
    );
};

export default HelloWorld;
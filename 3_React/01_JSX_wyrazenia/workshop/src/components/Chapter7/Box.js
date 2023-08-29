import {useState, useEffect} from 'react';

const Box = () => {
    const [color, setColor] = useState("green");

    useEffect(() => {
        const intervalID = setInterval(() => {
            setColor(prev => {
                if (prev === "green") {
                    return "red";
                }
                else {
                    return "green";
                }
            });
        }, 1000);
        return () => clearInterval(intervalID);
    }, []);

    return (
        <div style={{
            backgroundColor: color,
            width: "500px",
            height: "500px"
        }} />
    );
};

export default Box;
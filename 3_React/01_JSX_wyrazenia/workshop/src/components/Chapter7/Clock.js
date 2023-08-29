import {useState, useEffect} from 'react';
import ClockTime from "./ClockTime";
import ClockDate from "./ClockDate";

const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(intervalID);
    }, []);

    return (
        <div>
            <ClockTime time={time.toLocaleTimeString()} />
            <ClockDate date={time.toLocaleDateString()} />
        </div>
    );
};

export default Clock;
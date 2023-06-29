import {useState, useEffect} from "react";
import differenceInDays from 'date-fns/differenceInDays';
const IleDniDoUrlopu = () => {
    const [date, setDate] = useState("");
    const [days, setDays] = useState(-1);

    useEffect(() => {
        // console.log(date);
        // if (date) {
        //     console.log(Date.parse(date));
        // }
        const result = differenceInDays(
            new Date(Date.parse(date)),
            new Date(),
        )
        setDays(result);
    }, [date]);

    return (
        <>
            <input
                type="date"
                onChange={(e) => setDate(e.target.value)}
                value={date}
            />
            <h1 className="dateHeader">{date}</h1>
            {days > -1 ? <h1>{days}</h1> : <h1>"Wybierz datę urlopu"</h1>}
        </>
    );
};

export default IleDniDoUrlopu;

import React, {useEffect, useState} from 'react';
import {Text} from "react-native";

const DataTimer = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date());
        }, 1000)
    }, []);

    return (
        <Text>
            {date.toLocaleTimeString()}
        </Text>
    );
};

export default DataTimer;
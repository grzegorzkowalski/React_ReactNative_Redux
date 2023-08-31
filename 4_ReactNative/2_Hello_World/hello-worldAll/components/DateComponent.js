import React from 'react';
import {Text} from "react-native";

const DateComponent = () => {
    const date = new Date();
    return (
        <>
            <Text>Ala ma kota</Text>
            <Text>{date.toLocaleDateString()}</Text>
            <Text>
                Dzisiejsza data to :
                <Text style={{fontWeight: 600, color: "lime"}}>
                    {`${date.getDate().toString()}.${(date.getMonth() + 1).toString()}.${date.getFullYear().toString()}`}
                </Text>
            </Text>
        </>
    );
};

export default DateComponent;
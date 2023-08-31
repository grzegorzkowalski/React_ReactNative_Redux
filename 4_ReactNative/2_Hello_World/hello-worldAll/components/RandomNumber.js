import React, {useState} from 'react';
import {Pressable, View, Text} from "react-native";

const RandomNumber = () => {
    const getRandomNumber = () => {
        return Math.floor(Math.random() * 10);
    }
    const [number, setNumber] = useState(getRandomNumber());
    return (
        <Pressable
            onPress={() => setNumber(getRandomNumber())}
        >
            <View>
                <Text>{number}</Text>
            </View>
        </Pressable>
    );
};
export default RandomNumber;
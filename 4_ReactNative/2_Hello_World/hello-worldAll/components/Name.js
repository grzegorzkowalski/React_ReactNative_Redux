import React from 'react';
import {Text, View} from "react-native";

const Name = ({name}) => {
    return (
        <View>
            <Text>{name}</Text>
        </View>
    );
};

export default Name;
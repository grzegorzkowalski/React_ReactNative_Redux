import React from 'react';
import {View, StyleSheet} from "react-native";

const ColorBoxes = () => {
    return (
        <View>
            <View style={[styles.box, styles.red]} />
            <View style={[styles.box, styles.orange]} />
            <View style={[styles.box, styles.lime]} />
        </View>
    );
};

const styles = StyleSheet.create({
    box : {
        margin: 10,
        width: 200,
        height: 200
    },
    red: {
        backgroundColor: "red"
    },
    orange: {
        backgroundColor: "orange"
    },
    lime: {
        backgroundColor: "lime"
    }
})

export default ColorBoxes;
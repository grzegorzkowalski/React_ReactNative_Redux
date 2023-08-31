import React from 'react';
import {View, StyleSheet} from "react-native";
import Map from "./Map";

const Layout = () => {
    return (
        <View style={styles.container}>
            <View style={styles.redBox} />
            <View style={styles.blueBox}>
                <View style={styles.yellowBox} >
                    <Map />
                </View>
                <View style={styles.yellowBox} />
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor: "magenta",
        width: 300
    },
    redBox: {
        backgroundColor: "red",
        margin: 10,
        flex: 1
    },
    blueBox: {
        backgroundColor: "blue",
        margin: 10,
        flex: 1,
        flexDirection: "row"
    },
    yellowBox: {
        backgroundColor: "yellow",
        margin: 10,
        flex: 1,
    }
})

export default Layout;
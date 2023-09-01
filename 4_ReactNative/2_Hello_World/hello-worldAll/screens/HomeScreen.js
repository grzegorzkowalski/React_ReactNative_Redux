import React from 'react';
import {View, Text, StyleSheet, Button} from "react-native";

const HomeScreen = ({route, navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Button
                title="Przejdź do podstrony AboutUs"
                onPress={() => navigation.navigate("AboutUs")}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f4',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default HomeScreen;
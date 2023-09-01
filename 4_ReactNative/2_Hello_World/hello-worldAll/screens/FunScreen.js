import React from 'react';
import {View, Text, StyleSheet, Button} from "react-native";

const FunScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Fun</Text>
            <Button
                title="Przejdź do podstrony Home"
                onPress={() => navigation.navigate("Home")}
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

export default FunScreen;
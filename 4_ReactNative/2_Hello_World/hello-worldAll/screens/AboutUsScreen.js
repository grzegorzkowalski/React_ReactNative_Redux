import React from 'react';
import {View, Text, StyleSheet, Button} from "react-native";

const AboutUsScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>AboutUs</Text>
            <Button
                title="Przejdź do podstrony Contact"
                onPress={() => navigation.navigate("Contact")}
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

export default AboutUsScreen;
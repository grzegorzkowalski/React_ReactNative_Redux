import React from 'react';
import {View, Text, StyleSheet, Button} from "react-native";

const ContactScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Contact</Text>
            <Button
                title="Przejdź do podstrony Fun"
                onPress={() => navigation.navigate("Fun")}
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

export default ContactScreen;
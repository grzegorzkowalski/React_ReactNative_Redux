import React from 'react';
import {View, Image} from "react-native";

const Map = () => {
    const link = "https://cdn.pixabay.com/photo/2013/07/12/15/22/poland-149792_1280.png";
    return (
        <View>
            <Image style={{width: "100%", height: 100}} source={{uri: link}} />
        </View>
    );
};

export default Map;
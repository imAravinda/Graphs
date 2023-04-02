import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { style } from "../App";
const CustomButton = ({text,onPress}) => {
    return ( 
        <TouchableOpacity onPress={onPress}>
            <View style={style.Button}>
                <Text style={style.text}>{text}</Text>
            </View>
        </TouchableOpacity>
     );
}
 
export default CustomButton;
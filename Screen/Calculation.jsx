import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

const [text,setText]=useState('');
const handleChange=(val)=>{
    setText(val);
}
const Calculate=()=>{
    if(text === {})
    {
        
    }
}
const Calculation = () => {
    return (
        <View>
            <Text>Calculation</Text>
            <TextInput 
                placeholder="Enter the function"
                style={{width:"100px", height:"35px"}}
                onChangeText={handleChange}
            />
            <Button onPress={Calculate}/>
        </View>
    )
}

export default Calculation

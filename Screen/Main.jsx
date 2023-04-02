import React from 'react'
import { View, Text, Image,ScrollView, TextInput, Button } from 'react-native'
import { style } from '../App'
import CustomButton from '../Shared/Button'

const Main = () => {
    const onSubmit = ()=>{

    }
    return (
        <ScrollView >
            <View style={style.MainView}>
                <Image source={require('../Images/Light.png')} style={{width:'250px',height:'250px'}}/>
                <View style={style.Form}>
                    <View>
                        <Text style={style.Label}>Enter The Function</Text>
                        <TextInput style={style.TextFeild}/>
                    </View>
                    <View>
                        <Text style={style.Label}>Range Of Y</Text>
                        <TextInput style={style.TextFeild}/>
                    </View>
                    <View >
                        <CustomButton text={"Plot"} onPress={onSubmit}/>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default Main

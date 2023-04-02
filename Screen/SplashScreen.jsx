import React from 'react'
import { Image, ImageBackground } from 'react-native';

const SplashScreen = ({navigation}) => {
    setTimeout(()=>{
        navigation.replace('Main');
      },3000);
      console.log("test");
    return (  
        <ImageBackground source={require('../Images/BGImage.jpg')} style={{flex:1,opacity:1,justifyContent:'center',alignItems:'center'}}>
            <Image source={require('../Images/S.png')}
                style={{ width: '450px', height: '100%',flex:1}}/>
        </ImageBackground>
    );
}
 
export default SplashScreen;

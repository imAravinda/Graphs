import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";

const Header = () => {

    return ( 
        <ImageBackground source={require('../Images/BgImage.png')}>
            <Image source={require('../Images/Light.png')} style={{ width: 120, height: 50 }} />
        </ImageBackground>
     );
}
 
export default Header;
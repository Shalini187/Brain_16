import React from "react";
import { ImageBackground } from 'react-native';

import FlexLayout from "../flexLayout";

function BackgroundImage() {
    return (
        <ImageBackground source={require('../../assets/images/bgImage.webp')}
            style={{ height: '100%', width: '100%' }} resizeMode="cover" >
            <FlexLayout />
        </ImageBackground>
    );
}

export default BackgroundImage;
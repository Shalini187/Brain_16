import React, { useState } from "react";
import { ImageBackground, SafeAreaView, Text } from 'react-native';

import FlexLayout from "../flexLayout";
import { imageStyle } from '../../styles';

function BackgroundImage() {
    let { textStyle, row } = imageStyle || {};
    let [state, setState] = useState<any>({
        counter: 0, matches: 0
    });

    return (
        <ImageBackground source={require('../../assets/images/bgImage.webp')}
            style={{ height: '100%', width: '100%' }} resizeMode={"cover"} >
            <SafeAreaView style={row}>
                <Text style={textStyle}>{`TURNS: ${state?.counter} `}</Text>
                <Text style={textStyle}>{`MATCHES: ${state?.matches}`}</Text>
            </SafeAreaView>
            <FlexLayout state={state} setState={setState} />
        </ImageBackground>
    );
}

export default BackgroundImage;
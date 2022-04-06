import React, { useEffect, useState } from "react";
import { Alert, Pressable, Text, View } from "react-native";
import SystemModal from "../modalView";

import { modalStyle, flexStyle } from "../../styles";

function FlexLayout() {
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    let { centeredView, modalView, textStyle, button, modalText } = modalStyle || {};
    let { container, children, row } = flexStyle || {};

    let [randomArray, setRandomArray] = useState<Array<string>>([]);

    let handleClick = () => setModalVisible(!modalVisible);

    const alpha = Array.from(Array(8)).map((e, i) => String.fromCharCode(i + 65));

    let randomizeArray = () => {
        let randomIndex;
        let array = [...alpha, ...alpha];
        for (let i = (array?.length - 1); i > 1; i--) {
            randomIndex = Math.floor(Math.random() * i);
            [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
        }
        setRandomArray(array);
    };

    let layoutData = [
        {
            backgroundColor: 'red',
            name: 'EXIT',
            onPress: () => {
                handleClick();
            }
        },
        {
            backgroundColor: 'green',
            name: 'RESTART',
            onPress: () => randomizeArray()
        }
    ];

    useEffect(() => {
        randomizeArray();
    }, [modalVisible]);

    let renderArray = () => (
        <View style={container}>
            {
                randomArray?.map((item: string, i: number) => {
                    return (
                        <Pressable onPress={() => Alert.alert("Clicked Value is", item)}>
                            <View style={children}><Text style={modalText}>{item}</Text></View>
                        </Pressable>
                    )
                })
            }
        </View>
    );

    let renderButtons = () => (
        <View style={row}>
            {
                layoutData?.map((item: any, key: number) => {
                    let { backgroundColor, name, onPress } = item || {};
                    return (
                        <>
                            <Pressable key={key} style={{ ...button, backgroundColor }} onPress={onPress}>
                                <Text style={textStyle}>{name}</Text>
                            </Pressable>
                        </>
                    )
                })
            }
        </View>
    );

    let renderLayout = () => {
        return (
            <View style={centeredView}>
                <View style={modalView}>
                    {renderArray()}
                    {renderButtons()}
                </View>
            </View>
        )
    }
    return (
        <SystemModal renderLayout={renderLayout} handleClick={handleClick} modalVisible={modalVisible} />
    );
}

export default FlexLayout;
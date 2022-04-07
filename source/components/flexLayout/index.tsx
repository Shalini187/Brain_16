import React, { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";
import SystemModal from "../modalView";

import { modalStyle, flexStyle } from "../../styles";

function FlexLayout(props: any) {
    let { state, setState } = props || {};
    let { counter, matches } = state || {};

    let { centeredView, modalView, textStyle, button, modalText } = modalStyle || {};
    let { container, children, row } = flexStyle || {};

    const [modalVisible, setModalVisible] = useState<boolean>(false);
    let [randomArray, setRandomArray] = useState<Array<string>>([]);

    let handleClick = () => setModalVisible(!modalVisible);

    const alpha = Array.from(Array(8)).map((e, i) => String.fromCharCode(i + 65));

    let randomizeArray = () => {
        let randomIndex;
        let array: any = [...alpha, ...alpha];
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
                setState({ ...state, counter: 0, matches: 0 });
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
                randomArray?.map((item: any, i: number) => {
                    return (
                        <Pressable key={i} onPress={() => {
                            setState({ ...state, counter: counter + 1 });
                        }}>
                            <View key={i + 20} style={children}>
                                <Text style={modalText}>{item}</Text>
                            </View>
                        </Pressable>
                    )
                })
            }
        </View>
    );

    let renderButtons = () => (
        <View style={row}>
            {
                layoutData?.map((item: any, i: number) => {
                    let { backgroundColor, name, onPress } = item || {};
                    return (
                        <>
                            <Pressable key={i} style={{ ...button, backgroundColor }} onPress={onPress}>
                                <Text key={i + 10} style={textStyle}>{name}</Text>
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
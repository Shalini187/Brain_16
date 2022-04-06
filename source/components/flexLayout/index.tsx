import React, { useEffect, useState } from "react";
import { Button, Pressable, Text, View } from "react-native";
import SystemModal from "../modalView";

import { modalStyle, flexStyle } from "../../styles";

function FlexLayout() {
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    let { centeredView, modalView, textStyle, button, modalText } = modalStyle || {};
    let { container, children, row } = flexStyle || {};

    let handleClick = () => setModalVisible(!modalVisible);

    const alpha = Array.from(Array(8)).map((e, i) => String.fromCharCode(i + 65));

    let layoutData = [
        {
            backgroundColor: 'red',
            name: 'EXIT',
            onPress: () => {
                handleClick()
            }
        },
        {
            backgroundColor: 'green',
            name: 'RESTART',
            onPress: () => {
                handleClick()
            }
        }
    ];

    let renderArray = () => (
        <Pressable onPress={() => { }}>
            {
                <View style={container}>
                    {
                        alpha?.map((item: string, i: number) => {
                            return (
                                <View style={children}><Text style={modalText}>{item}</Text></View>
                            )
                        })
                    }
                    {
                        alpha?.map((item: string, i: number) => {
                            return (
                                <View style={children}><Text style={modalText}>{item}</Text></View>
                            )
                        })
                    }
                </View>
            }
        </Pressable>
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
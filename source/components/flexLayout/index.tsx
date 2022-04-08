import React, { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";
import SystemModal from "../modalView";

import { modalStyle, flexStyle } from "../../styles";
import { randomizeArray, removeDuplicates } from "../../utils";

function FlexLayout(props: any) {
    let { state, setState } = props || {};
    let { counter, matches } = state || {};

    let isVisible = false;
    let firstCard: any, secondCard: any;

    let { centeredView, modalView, textStyle, button, modalText } = modalStyle || {};
    let { container, childrenInVisible, childrenVisible, row } = flexStyle || {};

    const [modalVisible, setModalVisible] = useState<boolean>(false);
    let [randomArray, setRandomArray] = useState<Array<string>>([]);

    let handleClick = () => setModalVisible(!modalVisible);

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
            onPress: () => {
                randomizeArray(setRandomArray);
                setState({ ...state, counter: 0, matches: 0 });
            }
        }
    ];

    useEffect(() => {
        randomizeArray(setRandomArray);
    }, [modalVisible]);

    let showCard = (item: any) => {
        if (!isVisible) {
            isVisible = true;
            firstCard = item;
        } else {
            isVisible = false;
            secondCard = item;

            if (firstCard?.key == secondCard?.key) return;
            if (firstCard?.value == secondCard?.value) {

                setState({ ...state, matches: matches + 1, counter: counter + 1 });
                removeDuplicates(randomArray, secondCard?.value, setRandomArray);
            } else {
                setState({ ...state, matches: state?.matches, counter: counter + 1 });
                setTimeout(() => {

                }, 1000);
            }
        }
    }

    let renderArray = () => {
        return (
            randomArray?.map((item: any, i: number) => {
                let { value, key } = item || {};

                if (item?.value) {
                    return (
                        <Pressable key={i} onPress={() => {
                            showCard(item);
                        }}>
                            <View key={key + 20} style={childrenVisible}>
                                {<Text style={modalText}>{value}</Text>}
                            </View>
                        </Pressable>
                    )
                } else return <View style={childrenInVisible} />
            })
        );
    }

    let renderButtons = () => (
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
    );

    let renderLayout = () => {
        return (
            <View style={centeredView}>
                <View style={modalView}>
                    <View style={container}>
                        {renderArray()}
                    </View>
                    <View style={row}>
                        {renderButtons()}
                    </View>
                </View>
            </View>
        )
    }
    return (
        <SystemModal renderLayout={renderLayout} handleClick={handleClick} modalVisible={modalVisible} />
    );
}

export default FlexLayout;
import React, { useEffect, useState } from "react";
import { AppState, Pressable, Text, View } from "react-native";
import SystemModal from "../modalView";

import { modalStyle, flexStyle } from "../../styles";
import { falsyArray, randomizeArray, removeDuplicates, useInstance } from "../../utils";

function FlexLayout(props: any) {
    let { state, setState } = props || {};
    let { counter, matches } = state || {};

    var isVisible = false;
    let firstCard: any, secondCard: any;

    let { centeredView, modalView, textStyle, button, modalText } = modalStyle || {};
    let { container, childrenInVisible, childrenVisible, row } = flexStyle || {};

    let [modalVisible, setModalVisible] = useState<boolean>(false);
    let [randomArray, setRandomArray] = useState<Array<string>>([]);
    let [visible, setVisible] = useState<any>(AppState);

    let handleClick = () => setModalVisible(!modalVisible);

    useEffect(() => {
        randomizeArray(setRandomArray);
    }, [modalVisible]);

    useEffect(() => {
        let arr = randomArray?.filter((i) => i != undefined);
        if (arr?.length) {
            const subscription = AppState.addEventListener("change", () => useInstance(arr, setVisible));
            return () => {
                subscription.remove();
            };
        }
    }, [visible]);

    let layoutData = [
        {
            backgroundColor: 'red',
            name: 'EXIT',
            onPress: () => {
                handleClick();
                resetHandle();
            }
        },
        {
            backgroundColor: 'green',
            name: 'RESTART',
            onPress: () => {
                resetHandle();
                randomizeArray(setRandomArray);
            }
        }
    ];

    let resetHandle = () => {
        setVisible(AppState);
        setState({ ...state, counter: 0, matches: 0 });
    }

    let showCard = (item: any) => {
        if (!isVisible) {
            isVisible = true;
            firstCard = item;

            return;
        }
        isVisible = false;
        secondCard = item;

        checkText();

        if (firstCard?.key == secondCard?.key) return;
        else return trackCards();
    }

    let trackCards = () => {
        if (firstCard?.value == secondCard?.value) {
            setState({ ...state, matches: matches + 1, counter: counter + 1 });
            removeDuplicates(randomArray, secondCard?.value, setRandomArray);
        } else {
            setState({ ...state, matches: state?.matches, counter: counter + 1 });
            setTimeout(() => falsyArray(randomArray, setVisible), 1000);
        }
    }

    let checkText = () => {
        let obj = Object.assign({}, { [firstCard?.key]: true }, { [secondCard?.key]: true });
        setVisible({ ...obj });
    }

    let renderArray = () => {
        let arr = randomArray?.filter((i: any) => i != undefined);
        if (arr?.length == 0) return <Text style={modalText}>{`You did it at : ${counter} Turns`}</Text>
        else {
            return (
                randomArray?.map((item: any, i: number) => {
                    let { value, key } = item || {};
                    if (value) {
                        return (
                            <Pressable ref={visible} key={i} onPress={() => {
                                showCard(item);
                            }}>
                                <View key={key + 20} style={childrenVisible}>
                                    {visible?.[i] ? <Text style={modalText}>{value}</Text> : <></>}
                                </View>
                            </Pressable>
                        )
                    } else return <View style={childrenInVisible} />
                })
            );
        }
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
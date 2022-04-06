import React, { useState } from "react";
import { Modal, Text, Pressable, View } from "react-native";

import { modalStyle } from '../../styles';

function SystemModal(props: any) {
    let { renderLayout, handleClick, modalVisible } = props || {}

    let { centeredView, textStyle, button } = modalStyle || {};

    return (
        <View style={centeredView}>
            <Modal animationType={"fade"} transparent={true} visible={modalVisible} onRequestClose={handleClick}>
                {renderLayout?.()}
            </Modal>
            {
                !(modalVisible) ?
                    <Pressable style={{ ...button, backgroundColor: "purple" }} onPress={handleClick}>
                        <Text style={textStyle}>{`PLAY`}</Text>
                    </Pressable>
                    :
                    <></>
            }
        </View>
    );
};

export default SystemModal;
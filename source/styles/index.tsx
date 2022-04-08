import { Dimensions, StyleSheet } from "react-native";

export const modalStyle = StyleSheet.create({
    centeredView: {
        flex: 1,
        marginVertical: '5%',
        alignItems: "center",
        justifyContent: "center",
    },
    modalView: {
        margin: 8,
        borderRadius: 16,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        height: '75%',
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        width: 100,
        margin: 64,
        padding: 12,
        elevation: 2,
        borderRadius: 16,
    },
    textStyle: {
        color: "white",
        fontWeight: "900",
        textAlign: "center"
    },
    modalText: {
        paddingVertical: '50%',
        alignContent: 'center',
        textAlign: "center",
        fontWeight: '700',
        color: '#fff',
        fontSize: 32
    }
});

export const flexStyle = StyleSheet.create({
    container: {
        flex: 1,
        flexWrap: 'wrap',
        borderRadius: 10,
        flexDirection: 'row',
    },
    childrenVisible: {
        margin: 4,
        height: 120,
        borderWidth: 1,
        borderRadius: 10,
        alignSelf: 'center',
        borderColor: '#fff',
        backgroundColor: '#000',
        width: Dimensions.get('screen').width / 4 - 12,
    },
    childrenInVisible: {
        margin: 4,
        height: 120,
        alignSelf: 'center',
        width: Dimensions.get('screen').width / 4 - 12,
    },
    row: {
        bottom: -150,
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});

export const imageStyle = StyleSheet.create({
    textStyle: {
        fontSize: 24,
        color: "white",
        fontWeight: "700",
        textAlign: "center",
    },
    row: {
        flex: 1,
        margin: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});
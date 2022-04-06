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
        height: Dimensions.get('screen').height / 1.65,
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        width: 100,
        margin: 64,
        padding: 12,
        elevation: 2,
        marginVertical: 24,
        borderRadius: 16,
    },
    textStyle: {
        color: "white",
        fontWeight: "900",
        textAlign: "center"
    },
    modalText: {
        paddingVertical: 32,
        alignContent:'center',
        textAlign: "center",
        fontWeight: '900',
        fontSize: 24
    }
});

export const flexStyle = StyleSheet.create({
    container: {
        flex: 1,
        flexWrap: 'wrap',
        borderRadius: 10,
        flexDirection: 'row',
    },
    children: {
        margin: 4,
        height: 120,
        borderWidth: 1,
        borderRadius: 10,
        alignSelf: 'center',
        borderColor: 'blue',
        backgroundColor: 'lightblue',
        width: Dimensions.get('screen').width / 4 - 12,

    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});
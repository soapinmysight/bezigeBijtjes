import { StyleSheet } from 'react-native';
import Colors from "../../services/colors";

const footerStyles = (theme) => StyleSheet.create({
    footerContainer: {
        backgroundColor: Colors[theme]?.gray,
        width: '100%',
        height: 100,
        justifyContent: 'center',
        color: Colors[theme]?.white,
        borderTopWidth: 1,
        flexDirection: 'column',
        paddingBottom: 10, // Adjust the padding as needed
    },
    buttonBox: {
        height: 20,
        justifyContent: 'center',
        color: Colors[theme]?.white,
    },
    footerButton: {
        backgroundColor: Colors[theme]?.black,
        borderColor: Colors[theme]?.gray,
        borderWidth: 1,
        height: 20,
        width: '30%',
        padding: 2,
        margin: 2,
        borderRadius: 10,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    textButton: {
        color: Colors[theme]?.white,
        fontSize: 10,
        alignSelf: 'center',

    },
    footerItems: {
        width: '100%',
        justifyContent: 'space-around',
        height: 65,
        flexDirection: 'row',
        alignItems: 'center',
    },
    footerItem: {
        backgroundColor: 'white',
        height: 60,
        width: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerImg: {
        height: '70%',
        width: '70%',
    }
});

export default footerStyles;

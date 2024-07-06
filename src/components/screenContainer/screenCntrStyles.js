import { StyleSheet } from 'react-native';
import Colors from "../../services/colors";

const screenCntrStyles = (theme) => StyleSheet.create({
    container: {
        flex: 1,
        margin: 0,
        padding: 0,
        backgroundColor: Colors[theme]?.themeColor,
    },
});

export default screenCntrStyles;

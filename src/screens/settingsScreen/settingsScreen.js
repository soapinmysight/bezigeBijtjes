import { useTheme } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, useColorScheme } from 'react-native';
import RadioButtonRN from 'radio-buttons-react-native';
import Colors from '../../services/colors';
import { get, save } from '../../services/storage';
import Footer from "../../components/footer/footer";
import ScreenContainer from "../../components/screenContainer/screenCntr";
import ContentContainer from '../../components/contentContainer/scrollContentCntr';

const SettingScreen = ({ navigation }) => {
    const [themeValue, setThemeValue] = useState('');
    const [initialValue, setInitialValue] = useState(0);
    const themes = useColorScheme();
    const data = [
        { label: 'Light Mode', value: 'light' },
        { label: 'Dark Mode', value: 'dark' },
        { label: 'System Default', value: 'default' },
    ];

    // Function to change theme based on selected value
    const themeOperations = theme => {
        switch (theme) {
            case 'dark':
                setTheme(theme, false);
                setInitialValue(2);
                return;
            case 'light':
                setTheme(theme, false);
                setInitialValue(1);
                return;
            case 'default':
                setTheme(themes, true);
                setInitialValue(3);
                return;
        }
    };

    // Function to set and save the theme
    const setTheme = useCallback(async (theme, isDefault) => {
        await save('Theme', theme);
        await save('IsDefault', isDefault);
        setThemeValue(theme);
    }, []);

    // Get the app theme when the component mounts
    useEffect(() => {
        const initializeTheme = async () => {
            const theme = await get('Theme');
            const isDefault = await get('IsDefault');
            isDefault ? themeOperations('default') : themeOperations(theme);
        };
        initializeTheme();
    }, []);

    // Get styles based on the current theme
    const styles = styling(themeValue);

    return (
        <ScreenContainer theme={themeValue}>
            <ContentContainer theme={themeValue}>
                <View style={styles.container}>
                    <Text style={styles.textStyle}>
                        This is a demo of default dark/light theme with switch/Buttons using async storage.
                    </Text>
                    {/*<TextInput*/}
                    {/*    style={styles.textInputStyle}*/}
                    {/*    placeholder="Type here"*/}
                    {/*    placeholderTextColor={Colors[themeValue]?.gray}*/}
                    {/*/>*/}
                    {/*<TouchableOpacity style={styles.touchableStyle}>*/}
                    {/*    <Text style={styles.buttonTextStyle}>Button</Text>*/}
                    {/*</TouchableOpacity>*/}
                    <RadioButtonRN
                        data={data}
                        selectedBtn={e => themeOperations(e?.value)}
                        initial={initialValue}
                        activeColor={Colors[themeValue]?.activeColor}
                        deactiveColor={Colors[themeValue]?.deactiveColor}
                        boxActiveBgColor={Colors[themeValue]?.boxActiveColor}
                        boxDeactiveBgColor={Colors[themeValue]?.themeColor}
                        textColor={Colors[themeValue]?.white}
                    />
                </View>
            </ContentContainer>
            <Footer navigation={navigation} theme={themeValue}/>
        </ScreenContainer>
    );
};

export default SettingScreen;

const styling = theme =>
    StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            paddingHorizontal: 20,
            height: "auto",
            padding: 5,
        },
        textStyle: {
            color: Colors[theme]?.white,
        },
        textInputStyle: {
            borderColor: Colors[theme]?.gray,
            padding: 10,
            borderWidth: 2,
            borderRadius: 5,
            width: '100%',
            marginTop: 20,
            color: Colors[theme]?.white,
        },
        touchableStyle: {
            backgroundColor: Colors[theme]?.sky,
            padding: 10,
            borderRadius: 6,
            width: '100%',
            height: 57,
            justifyContent: 'center',
            marginTop: 20,
        },
        buttonTextStyle: {
            textAlign: 'center',
            color: Colors[theme]?.commonWhite,
            fontSize: 20,
            fontWeight: '500',
        },
    });

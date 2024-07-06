import React from 'react';
import {Button, Text, SafeAreaView} from 'react-native';
import Footer from "../../components/footer/footer";
import {View, SafeAreaProvider, StyleSheet} from 'react-native';

const Settings = ({ navigation }) => {
    return (
        <View>
            <Footer navigation={navigation}/>
        </View>
    );
};

export default Settings;




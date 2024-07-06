import React from 'react';
import {Button, Text, SafeAreaView, View} from 'react-native';
import Footer from "../../components/footer/footer";
import { useTheme } from '@react-navigation/native';
import { useColorScheme } from 'react-native';

const FavScreen = ({ navigation }) => {

    return (
        <View>
        <Footer navigation={navigation}/>
        </View>
    );
};

export default FavScreen;




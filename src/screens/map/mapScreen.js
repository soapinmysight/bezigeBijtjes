import React from 'react';
import {Button, Text, SafeAreaView} from 'react-native';
// import {View, SafeAreaProvider, StyleSheet} from 'react-native';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
// import Marker from 'react-native-maps';
import Map from "../../components/map/map";

const MapScreen = ({ navigation }) => {
    return (
        <Map/>
    );
};

export default MapScreen;




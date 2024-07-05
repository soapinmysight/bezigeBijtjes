import React, {useEffect, useState} from 'react';
import {Button, Text, SafeAreaView, StyleSheet, View} from 'react-native';
// import {View, SafeAreaProvider, StyleSheet} from 'react-native';
import useLoadingData from '../../services/loadLocationData';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {Marker, AnimatedRegion, Circle } from "react-native-maps";
import * as Location from 'expo-location';
import { Accuracy } from "expo-location";


import TrackerIcon from '../../../assets/img/logo/locationTracker.png'
// import ItemModal from '../itemModal/itemModal';
const Map = ({navigation, tracking}) => {
    const locationData = useLoadingData();

    const [location, setLocation] = useState(null);
    // let userLatitude = ''
    // let userLongitude = ''
    const [errorMsg, setErrorMsg] = useState(null);

    //for opening and closing modal with hotspot details
    // const [selectedLocation, setSelectedLocation] = useState(null);

    // const openModal = (location) => {
    //     setSelectedLocation(location);
    // };

    // const closeModal = () => {
    //     setSelectedLocation(null);
    // };


    // Get location tracking permissions, and subscribe to callback
    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }
            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
            // for loading user coordinates into map


        })();
    }, []);

    let locText = 'Waiting..';
    if (errorMsg) {
        locText = errorMsg;
        console.log({errorMsg})
    } else if (location) {
        locText = JSON.stringify(location);
        console.log(location)
        // userLatitude=(location.latitude);
        // userLongitude=(location.longitude);
        // console.log(` this is longitude ${userLongitude} and latitude${userLatitude} `)
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text>This is the map!</Text>

            {/*loading the map*/}
            <MapView
                provider={PROVIDER_GOOGLE}
                style={{ flex: 1 }}

                initialRegion={{
                    //coordinates of my map (± Rotterdam)
                    latitude: 51.9244,
                    longitude: 4.462456,
                    //the size of my map (± Rotterdam)
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                >

                {/*make a marker for every item in locationData (data from the api)*/}
                {locationData.map((item, index) => (
                    <Marker
                        style={styles.marker}
                        pinColor={'pink'}
                        tappable={true}
                        key={item.id}
                        coordinate={{
                            latitude: item.latitude,
                            longitude: item.longitude,
                        }}
                        title={item.Title}
                    description={item.shortDescription}
                    />
                ))}
                {/*loading user coordinate into map*/}
                {/*    <Marker*/}
                {/*        pinColor={'blue'}*/}
                {/*        coordinate={{*/}
                {/*            latitude: userLatitude,*/}
                {/*            longitude: userLongitude,*/}
                {/*        }}*/}
                {/*        title="Your Location"*/}
                {/*        />           /!*loading user coordinate into map*!/*/}
                {location.map((location, index) => (
                    <Marker
                        pinColor={'blue'}
                        coordinate={{
                            latitude: location.latitude,
                            longitude: location.longitude,
                        }}
                        title="Your Location"
                        />))}
            </MapView>
            <View style={styles.container}>
                <Text style={styles.locText}>{locText}</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    marker: {
width: 16,
        height: 16,
        backgroundColor: 'pink',
    },
    locText: {
        fontSize: 12,
        color: '#666',
    },
})

export default Map;
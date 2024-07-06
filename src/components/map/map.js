import React, { useEffect, useState } from 'react';
import { Text, SafeAreaView, StyleSheet, View, Image} from 'react-native';
import useLoadingData from '../../services/loadLocationData';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { Accuracy } from 'expo-location';
const Map = ({ navigation, tracking }) => {

    const trackerIcon = require('../../../assets/img/logo/locationTracker.png');


    const locationData = useLoadingData();
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    // Get location tracking permissions, and subscribe to callback
    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
            } else {
                await Location.watchPositionAsync({accuracy: Accuracy.Balanced}, (coords) => {
                    setLocation(coords);
                }
            );
        }})();
    }, []);

    let locText = 'Waiting..';
    if (errorMsg) {
        locText = errorMsg;
        console.log({ errorMsg });
    } else if (location) {
        locText = JSON.stringify(location);
        console.log(location);
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text>This is the map!</Text>

            {/* Loading the mapScreen */}
            <MapView
                provider={PROVIDER_GOOGLE}
                style={{ flex: 1 }}
                initialRegion={{
                    // Coordinates of my mapScreen (± Rotterdam)
                    latitude: 51.9244,
                    longitude: 4.462456,
                    // The size of my mapScreen (± Rotterdam)
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                {/* Make a marker for every item in locationData (data from the API) */}
                {locationData.map((item) => (
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

                {location ? (
                    <Marker
                        tappable={true}
                        title="This is your Location"
                        coordinate={{
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                    }}

                    >
                        <Text title="Your Location"/>
                        <Image source={trackerIcon} style={styles.trackerIcon} />
                    </Marker>
                ) : null}

            </MapView>
            <View style={styles.container}>
                <Text style={styles.locText}>{locText}</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    marker: {
        width: 40,
        height: 40,
    },
    locText: {
        fontSize: 12,
        color: '#666',
    },
    trackerIcon: {
        width: 30,
        height: 30,
    },
});

export default Map;

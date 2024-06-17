import React from 'react';
import {Button, Text, SafeAreaView} from 'react-native';
// import {View, SafeAreaProvider, StyleSheet} from 'react-native';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
// import Marker from 'react-native-maps';

const Map = ({ navigation }) => {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text>This is the map!</Text>

            <MapView
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: 51.9244,
                    longitude: 4.462456,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                style={{ flex: 1 }}
            />
            <Button title="Go Back" onPress={() => navigation.goBack()} />
        </SafeAreaView>
    );
};

export default Map;




//instead of mapview



// import {Marker} from 'react-native-maps';
//
// getInitialState() {
//     return {
//         region: {
//             latitude: 51.9244,
//             longitude: 4.462456,
//             latitudeDelta: 0.0922,
//             longitudeDelta: 0.0421,
//         },
//     };
// }
//
// onRegionChange(region) {
//     this.setState({ region });
// }
//
// render() {
//     return (
//         <MapView region={this.state.region} onRegionChange={this.onRegionChange}>
//             {this.state.markers.map((marker, index) => (
//                 <Marker
//                     key={{key = 1}}
//                     coordinate={{LatLng = {
//                             latitude: 37.78825,
//                             longitude: -122.4324,
//                         }}} //object met latitude en lng
//                     title={marker.title}
//                     description={marker.description}
//                 />
//             ))}
//         </MapView>;
// );
// }
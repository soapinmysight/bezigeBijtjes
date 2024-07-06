import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import Map from "../../components/map/map";
import Footer from "../../components/footer/footer";

const MapScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.mapContainer}>
                <Map />
            </View>
            <Footer navigation={navigation} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mapContainer: {
        flex: 1,
    },
});

export default MapScreen;

import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import List from '../components/list/list';
import useLoadingData from '../services/loadLocationData';

const ListScreen = () => {
    // Fetching location data using custom hook
    const locationData = useLoadingData();

    // If location data is not loaded yet, show a loading indicator
    if (locationData.length === 0) {
        return (
            <View style={styles.loaderContainer}>
                <ActivityIndicator size="large" color="pink" />
            </View>
        );
    }

    // Once data is loaded, display the list of items
    return (
        <View style={styles.container}>
            <List items={locationData} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
    },
    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ListScreen;

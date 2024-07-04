import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import List from '../components/list/list';
import useLoadingData from '../services/loadLocationData';

const ListScreen = () => {
    const locationData = useLoadingData();

    if (locationData.length === 0) {
        return (
            <View style={styles.loaderContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

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

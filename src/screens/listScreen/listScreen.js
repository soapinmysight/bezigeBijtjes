import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import List from '../../components/list/list';
import useLoadingData from '../../services/loadLocationData';
import Footer from "../../components/footer/footer";
import ScreenCntr from "../../components/screenContainer/screenCntr";
import ContentCntr from "../../components/contentContainer/contentCntr";
const ListScreen = ({ navigation }) => {
    // Fetching location data using custom hook
    const locationData = useLoadingData();

    // If location data is not loaded yet, show a loading indicator
    if (locationData.length === 0) {
        return (
            <ScreenCntr>
                <ContentCntr>
            <View style={styles.loaderContainer}>
                <ActivityIndicator size="large" color="pink" />
            </View>
                </ContentCntr>
                <Footer navigation={navigation} />
            </ScreenCntr>
        );
    }

    // Once data is loaded, display the list of items
    return (
<ScreenCntr>
    <ContentCntr>
    <View style={styles.container}>
            <List items={locationData} />
    </View>
    </ContentCntr>
    <Footer navigation={navigation} />
</ScreenCntr>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ListScreen;

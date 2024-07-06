import React, { useEffect, useState, useCallback } from 'react';
import { View, StyleSheet, Text, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Footer from '../../components/footer/footer';
import ScreenCntr from "../../components/screenContainer/screenCntr";
import ContentCntr from "../../components/contentContainer/contentCntr";
import useLoadingData from '../../services/loadLocationData';
import FavList from "../../components/favList/favList";

const FavScreen = ({ navigation }) => {
    const [favorites, setFavorites] = useState([]);
    const [filteredFavorites, setFilteredFavorites] = useState([]);
    const locationData = useLoadingData();

    const loadFavorites = useCallback(async () => {
        try {
            const allKeys = await AsyncStorage.getAllKeys();
            const favKeys = allKeys.filter(key => key.startsWith('fav-'));
            const favItems = await AsyncStorage.multiGet(favKeys);
            const favTitles = favItems.map(([key, value]) => key.replace('fav-', ''));
            setFavorites(favTitles);
            console.log(favorites)
        } catch (e) {
            console.log("Error loading favorites:", e);
        }
    }, []);

    useEffect(() => {
        loadFavorites();
    }, [loadFavorites]);

    useEffect(() => {
        if (locationData.length > 0 && favorites.length > 0) {
            const filtered = locationData.filter(item => favorites.includes(item.Title));
            setFilteredFavorites(filtered);
        } else {
            setFilteredFavorites([]);
            console.log("there was a problem filtering the favourites")
        }
    }, [locationData, favorites]);

    const switchFav = async (item, favorite) => {
        try {
            if (favorite) {
                setFavorites(prevFavorites => [...prevFavorites, item.Title]);
            } else {
                setFavorites(prevFavorites => prevFavorites.filter(title => title !== item.Title));
            }
            await AsyncStorage.setItem(`fav-${item.Title}`, JSON.stringify(favorite));
        } catch (error) {
            console.log("Error switching favorite:", error);
        }
    };


    if (filteredFavorites.length === 0) {
        return (
            <ScreenCntr>
                <ContentCntr>
                    <View style={styles.loaderContainer}>
                        <ActivityIndicator size="large" color="pink" />
                        <Text style={styles.emptyMessage}>No favorites yet!</Text>
                    </View>
                </ContentCntr>
                <Footer navigation={navigation} />
            </ScreenCntr>
        );
    }

    return (
        <ScreenCntr>
            <ContentCntr>
                <View style={styles.container}>
                    <FavList filteredFavorites={filteredFavorites} switchFav={switchFav}/>
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
    emptyMessage: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 18,
    },
    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default FavScreen;

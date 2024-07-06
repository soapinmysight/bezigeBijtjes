import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import favSelect from '../../../assets/img/logo/favSelect.png';
import fav from '../../../assets/img/logo/fav.png';
import favScreen from "../../screens/favScreen/favScreen";
// ItemCard component for displaying location details and favorite status
const ItemCard = ({ item, switchFav, filteredFavorites }) => {
    // State to track favorite status
    const [favorite, setFavorite] = useState(false);

    // Effect to check and update favorite status from AsyncStorage
    useEffect(() => {
        // Async function to check favorite status
        const checkFavoriteStatus = async () => {
            try {
                // Retrieve favorite status from AsyncStorage based on item title
                const favStatus = JSON.parse(await AsyncStorage.getItem(`fav-${item.Title}`));
                // Set local state based on retrieved status or default to false
                setFavorite(favStatus || false);
            } catch (error) {
                // Log error if AsyncStorage fails
                console.log("Error checking favorite status:", error);
            }
        };

        checkFavoriteStatus(); // Call the async function to check favorite status
    }, []); // Depend on an empty array to run effect only once

    // Function to handle switching favorite status
    const handleFavoriteSwitch = async (switchFav) => {
        try {
            let favorite;
            // Toggle the favorite status
            if (favorite) {
                favorite = false;
            } else {
                favorite = true;
            }

            // Save the new favorite status in AsyncStorage
            await AsyncStorage.setItem(`fav-${item.Title}`, JSON.stringify(favorite));
            // Update local state to reflect the change
            setFavorite(favorite);
            // Trigger the parent component's switching function
            switchFav(item, favorite);
        } catch (error) {
            // Log error if switching fails
            console.log("Error toggling favorite:", error);
        }
    };

    // Render item details and favorite switch button
    return (
        <View style={styles.card}>
            <View style={styles.logos}>
                <Image source={require('../../../assets/img/logo/park.png')} style={styles.logo} />
                <Pressable onPress={handleFavoriteSwitch}>
                    <Image source={favorite ? favSelect : fav} style={styles.star} />
                </Pressable>
            </View>
            <Text style={styles.title}>{item.Title}</Text>
            <Text style={styles.subtitle}>This is a {item.category} in {item.neighbourhood}</Text>
            <Text style={styles.description}>{item.shortDescription}</Text>
            <Text style={styles.location}>
                Location: ({item.latitude}, {item.longitude})
            </Text>
        </View>
    );
};

// Styles for the ItemCard component
const styles = StyleSheet.create({
    card: {
        padding: 16,
        margin: 16,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 2 },
        elevation: 4,
    },
    logos: {
        flexDirection: "row",
        height: 30,
        width: '100%',
        marginBottom: 8,
    },
    logo: {
        flex: 1,
        width: '100%',
        alignContent: 'space-between',
        height: 30,
        marginBottom: 8,
    },
    star: {
        flex: 2,
        height: 30,
        width: 30,
        marginLeft: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 12,
        color: '#666',
    },
    description: {
        fontSize: 14,
        marginBottom: 8,
    },
    location: {
        fontSize: 12,
        color: '#666',
    },
});

export default ItemCard; // Export the ItemCard component

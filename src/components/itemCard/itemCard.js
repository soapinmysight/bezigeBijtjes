import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// ItemCard creates induvidual card which will be loaded into list. it is given item as a prop
const ItemCard = ({ item }) => {
    return (
        // A container for the card
        <View style={styles.card}>
            {/* Displaying an image */}
            <Image source={require('../../../assets/img/logo/park.png')} style={styles.logo}/>
            {/* Displaying the title of the item */}
            <Text style={styles.title}>{item.Title}</Text>
            {/* Displaying the short description of the item */}
            <Text style={styles.description}>{item.shortDescription}</Text>
            {/* Displaying the location (latitude and longitude) of the item */}
            <Text style={styles.location}>
                Location: ({item.latitude}, {item.longitude})
            </Text>
        </View>
    );
};

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
    logo: {
        height: 10,
        width: '90%',
        marginBottom: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
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

export default ItemCard;

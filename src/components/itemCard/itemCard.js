import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// ItemCard creates induvidual card which will be loaded into list. it is given item as a prop
const ItemCard = ({ item }) => {
    return (
        // A container for the card
        <View style={styles.card}>
            {/* Displaying the item information */}
            <Image source={require('../../../assets/img/logo/park.png')} style={styles.logo}/>
            <Text style={styles.title}>{item.Title}</Text>
            <Text style={styles.subtitle}>This is a {item.category} in {item.neighbourhood}</Text>
            <Text style={styles.description}>{item.shortDescription}</Text>
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

export default ItemCard;

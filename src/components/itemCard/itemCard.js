import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ItemCard = ({ item }) => {
    return (
        <View style={styles.card}>
            <Image source={{ uri: item.logo }} style={styles.logo} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.shortDescription}</Text>
            <Text style={styles.location}>
                Location: ({item.location.latitude}, {item.location.longitude})
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
        width: 50,
        height: 50,
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

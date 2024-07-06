import React from 'react';
import { View, Text, Image, StyleSheet, Pressable, } from 'react-native';
import favSelect from '../../../assets/img/logo/favSelect.png'
import fav from '../../../assets/img/logo/fav.png'

// ItemCard creates induvidual card which will be loaded into list. it is given item as a prop
const ItemCard = ({ item }) => {
    return (
        // A container for the card
        <View style={styles.card}>
            {/* Displaying the item information */}
            <View style={styles.logos}>
            <Image source={require('../../../assets/img/logo/park.png')} style={styles.logo}/>
            <Pressable>
                <Image source={fav} style={styles.star} />
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
    star:{
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

export default ItemCard;

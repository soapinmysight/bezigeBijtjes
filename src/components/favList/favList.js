import React from 'react';
import { FlatList } from 'react-native';
import ItemCard from '../itemCard/itemCard';

const FavList = ({ filteredFavorites, switchFav, favorites }) => {
    const renderItem = ({ item }) => <ItemCard item={item} switchFav={switchFav} filteredFavorites={filteredFavorites} favorites={favorites}/>;

    return (
        <FlatList
            data={favorites}
            renderItem={renderItem}
            keyExtractor={(favorite) => favorite.Title}
        />
    );
};

export default FavList;

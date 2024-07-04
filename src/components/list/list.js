import React from 'react';
import { FlatList } from 'react-native';
import ItemCard from '../itemCard/itemCard';

const List = ({ items }) => {
    const renderItem = ({ item }) => <ItemCard item={item} />;

    return (
        <FlatList
            data={items}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
        />
    );
};

export default List;

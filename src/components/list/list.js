import React from 'react';
import { FlatList } from 'react-native';
import ItemCard from '../itemCard/itemCard';

// List puts all the induvidual itemcards in a list.
const List = ({ items }) => {
    const renderItem = ({ item }) => <ItemCard item={item} />;

    return (
        // Using FlatList to display a list of items
        <FlatList
            data={items}
            renderItem={renderItem}
        />
    );
};

export default List;

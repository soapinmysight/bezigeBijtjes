import React from 'react';
import { View, StyleSheet } from 'react-native';
import styles from './contentCntrStyles'


const ContentContainer = ({ children }) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
};
export default ContentContainer;
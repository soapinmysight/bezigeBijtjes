import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import styles from './contentCntrStyles'


const ContentContainer = ({ children }) => {
    return (
        <ScrollView style={styles.container}>
            {children}
        </ScrollView>
    );
};
export default ContentContainer;
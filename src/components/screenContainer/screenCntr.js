import React from 'react';
import { View, StyleSheet } from 'react-native';
import styles from './screenCntrStyles';

const ScreenContainer = ({ children, theme }) => {
    return (
        <View style={styles(theme).container}>
            {children}
        </View>
    );
};

export default ScreenContainer;

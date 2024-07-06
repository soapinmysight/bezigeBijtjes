import React from 'react';
import { View, Image, Pressable, Text } from 'react-native';
import footerStyles from './footerStyles';

const Footer = ({ navigation, theme }) => {
    const styles = footerStyles(theme);

    return (
        <View style={styles.footerContainer}>
            {/*<View style={styles.buttonBox}>*/}
            {/*    <Pressable style={styles.footerButton} onPress={() => navigation.navigate('HomeScreen')}>*/}
            {/*        <Text style={styles.textButton}>Go To Homescreen</Text>*/}
            {/*    </Pressable>*/}
            {/*</View>*/}

            <View style={styles.footerItems}>
                <Pressable style={styles.footerItem} onPress={() => navigation.navigate('FavScreen')}>
                    <Image source={require('../../../assets/img/logo/favFilled.png')} style={styles.footerImg} />
                </Pressable>

                <Pressable style={styles.footerItem} onPress={() => navigation.navigate('ListScreen')}>
                    <Image source={require('../../../assets/img/logo/list.png')} style={styles.footerImg} />
                </Pressable>

                <Pressable style={styles.footerItem} onPress={() => navigation.navigate('MapScreen')}>
                    <Image source={require('../../../assets/img/logo/map.png')} style={styles.footerImg} />
                </Pressable>

                <Pressable style={styles.footerItem} onPress={() => navigation.navigate('SettingsScreen')}>
                    <Image source={require('../../../assets/img/logo/settings.png')} style={styles.footerImg} />
                </Pressable>
            </View>
        </View>
    );
};

export default Footer;

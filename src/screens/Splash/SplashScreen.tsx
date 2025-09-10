import { View, Image } from 'react-native'
import React, { useEffect } from 'react'
import styles from './SplashScreenStyle'
import GlobalStyles from '../../utils/constants/styles/GlobalStyles'
const SplashScreen = ({ navigation }: any) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('CustomerNotes');
        }, 2000);
    }, [navigation]);
    return (
        <View style={GlobalStyles.centerContainer}>
            <Image source={require('../../assets/Images/icons/doras_logo.png')} style={styles.logo} />
        </View>
    )
}

export default SplashScreen;
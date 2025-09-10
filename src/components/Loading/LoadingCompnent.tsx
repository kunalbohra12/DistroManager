import { Image, Modal, Text, View } from 'react-native'
import React from 'react'
import styles from './LoadingComponentStyle'
// import GlobalStyles from '../../utils/constants/styles/GlobalStyles';
import images from '../../utils/constants/Images';
type LoadingComponentProps = {
  visible: boolean
  progress?: number  // optional, defaults to 0.5
}
const LoadingCompnent = ({ visible }: LoadingComponentProps) => {
    return (
        <View style={styles.modalContainer}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={visible}
                onRequestClose={() => { }}>
                <View style={styles.modalContainer}>
                    <View style={styles.centerContainer}>
                        <Image source={images.AUTHETICATE_ICON} style={styles.logo} />
                    </View>
                    <Text style={styles.title} >Authenticating Account</Text>
                    <View style={styles.bottomLoader}>
                        {/* <View style={[styles.bottomSub, { width: `${progress * 100}%` }]} /> */}
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default LoadingCompnent
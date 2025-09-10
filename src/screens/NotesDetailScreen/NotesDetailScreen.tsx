import { View, SafeAreaView, TouchableOpacity, Image, Text } from 'react-native'
import React from 'react'
import GlobalStyles from '../../utils/constants/styles/GlobalStyles'
import styles from './NotesDetailScreenStyle'
import images from '../../utils/constants/Images'
import { useNavigation, useRoute } from '@react-navigation/native'
const NotesDetailScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { notes } = route.params;
    return (
        <SafeAreaView style={GlobalStyles.container}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.headerSub}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image source={images.LEFT_ARROW} style={styles.headerIcon} />
                        </TouchableOpacity>
                        <Text style={styles.headerTitle}>{notes.note_body}</Text>
                    </View>
                    <View>
                        <Text style={styles.headerTitle}>{notes.create_at}</Text>
                    </View>
                </View>
                <View style={styles.subContainer}>
                    <View style={styles.horizontalContainer}>
                        <Image source={images.USER_ICON} style={styles.iconSize} />
                        <View style={styles.verticalContainer}>
                            <Text style={styles.title}>{notes.created_by_username}</Text>
                            <Text style={styles.subTitle}>johnnt@dorasnatural.com</Text>
                        </View>
                    </View>
                    <View style={styles.verticalContainer}>
                        <Text style={styles.regularTxt}>{notes.note_body}</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default NotesDetailScreen
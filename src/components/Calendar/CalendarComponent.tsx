import { View, Modal } from 'react-native'
import React from 'react'
import styles from './CalendarComponentStyle'

const CalendarComponent = ({isVisible}:any) => {
  return (
    <View style={styles.modalContainer}>
        <Modal
                animationType="fade"
                transparent={true}
                visible={isVisible}
                onRequestClose={() => { }}>
                <View style={styles.modalContainer}>
                   
                </View>
            </Modal>
    </View>
  )
}

export default CalendarComponent
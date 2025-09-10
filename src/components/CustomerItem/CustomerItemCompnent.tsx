import { FlatList, Image, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './CustomerItemCompnentStyle';
import images from '../../utils/constants/Images';
import { Text } from 'react-native-gesture-handler';
import GlobalStyles from '../../utils/constants/styles/GlobalStyles';
const CustomerItemComponent = () => {
  const data = [
    {id:'1',customerName:'Test Customer 02',location:'2023 Mermaid Ave Brooklyn, NY',openTime:'11:30 PM',closeTime:'11:30 AM'},
    {id:'2',customerName:'Test Customer 02',location:'2023 Mermaid Ave Brooklyn, NY',openTime:'11:30 PM',closeTime:'11:30 AM'},
    {id:'3',customerName:'Test Customer 02',location:'2023 Mermaid Ave Brooklyn, NY',openTime:'11:30 PM',closeTime:'11:30 AM'},
    {id:'4',customerName:'Test Customer 02',location:'2023 Mermaid Ave Brooklyn, NY',openTime:'11:30 PM',closeTime:'11:30 AM'},
    {id:'5',customerName:'Test Customer 02',location:'2023 Mermaid Ave Brooklyn, NY',openTime:'11:30 PM',closeTime:'11:30 AM'},
    {id:'6',customerName:'Test Customer 02',location:'2023 Mermaid Ave Brooklyn, NY',openTime:'11:30 PM',closeTime:'11:30 AM'},
    {id:'7',customerName:'Test Customer 02',location:'2023 Mermaid Ave Brooklyn, NY',openTime:'11:30 PM',closeTime:'11:30 AM'},
    {id:'8',customerName:'Test Customer 02',location:'2023 Mermaid Ave Brooklyn, NY',openTime:'11:30 PM',closeTime:'11:30 AM'},
    {id:'9',customerName:'Test Customer 02',location:'2023 Mermaid Ave Brooklyn, NY',openTime:'11:30 PM',closeTime:'11:30 AM'},
    {id:'10',customerName:'Test Customer 02',location:'2023 Mermaid Ave Brooklyn, NY',openTime:'11:30 PM',closeTime:'11:30 AM'},
  ]
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={data}
      keyExtractor={(item) => item.id}
      numColumns={2}
      columnWrapperStyle={styles.row}
      renderItem={({ item }) => (
        <View style={styles.roundedContainer}>
          <Image source={images.SHOP_IMAGE} style={styles.itemImage} />
          <Text style={styles.itemTitle}>{item.customerName}</Text>
          <View style={GlobalStyles.horizontalContainer}>
            <Image source={images.LOCATION_ICON} style={styles.itemIcon} />
            <Text style={styles.itemSubTitle}>{item.location}</Text>
          </View>
          <View style={GlobalStyles.horizontalLine} />
          <View style={GlobalStyles.horizontalContainer} >
            <Text style={styles.title}>Open {item.openTime}</Text>
            <View style={GlobalStyles.spacer} />
            <Text style={styles.subTitle}>Closed {item.closeTime}</Text>
          </View>
          <View style={GlobalStyles.horizontalLine} />
          <View style={styles.bottomContainer}>
            <TouchableOpacity style={styles.iconContainer}>
              <Image source={images.PHONE_ICON} style={styles.itemIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={GlobalStyles.boldTxt}>Start Visit</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    />
  )
}
export default CustomerItemComponent;
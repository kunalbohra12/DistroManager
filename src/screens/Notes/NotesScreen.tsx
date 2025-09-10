import React, { useState }  from 'react';
import GlobalStyles from '../../utils/constants/styles/GlobalStyles';
import { Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './NotesScreenStyle';
import images from '../../utils/constants/Images';
import colors from '../../utils/constants/colors';

const NotesScreen = () => {
  const [searchTxt, setSearchTxt] = useState('');
  return (
    <SafeAreaView style={GlobalStyles.container}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerLeftSub}>
            <Image source={images.DOROASLOGO} style={styles.logo} />
            <Text style={styles.headerTitle}>Sunday,{'\n'}September 2024</Text>
          </View>
          <View style={styles.headerRightSub}>
            <TouchableOpacity>
              <Image source={images.RELOAD_ICON} style={styles.btnLogo} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerBtn}>
              <View style={styles.roundedCircle} />
              <Text style={styles.btnTitle}>Synced</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.listHeader}>
          <Text style={styles.listHeaderTitle}>Global Notes</Text>
          <View style={GlobalStyles.spacer} />
          <TouchableOpacity style={styles.dropDownBtn}>
            <Text style={styles.dropdownTitle} >Filter By Date</Text>
            <Image source={images.CHEVRONDOWN_ICON} style={styles.icon} />
          </TouchableOpacity>
        </View>
        <View style={styles.searchBar}>
          <Image source={images.SEARCH_ICON} style={styles.icon} />
          <TextInput
            style={styles.input}
            onChangeText={newText => setSearchTxt(newText)}
            value={searchTxt}
            placeholder="Search Notes"
            placeholderTextColor={colors.DARK_GREY}
          />
        </View>
        {/* <NotesComponent /> */}
      </View>
    </SafeAreaView>
  );
};


export default NotesScreen;
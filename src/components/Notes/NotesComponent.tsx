import { Image, Pressable, Text, View } from 'react-native'
import React, { useState } from 'react'
import styles from './NotesComponentStyles';
import images from '../../utils/constants/Images';
import { FlatList } from 'react-native-gesture-handler';
import GlobalStyles from '../../utils/constants/styles/GlobalStyles';
import colors from '../../utils/constants/colors';
import { useNavigation } from '@react-navigation/native';
type Note = {
  id: string;
  create_at: Date;
  created_by_username: string;
  last_modified_date: Date;
  images_id: [];
  note_body: string;
  note_subject_id: string;
  note_subject_name: string;
};
type NotesComponentProps = {
  notes: Note[];
};
const NotesComponent: React.FC<NotesComponentProps> = ({ notes }) => {
  const navigation = useNavigation();
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const renderItem = ({ item }: any) => {
    const itemBg = item.id === selectedItem ? colors.BLUR_BLUE : 'white';
    const itemBorder = item.id === selectedItem ? colors.THEME_BLUE : colors.BLUR_WHITE;
    const handleNavigate = () => {
      setSelectedItem(item.id)
      navigation.navigate('NotesDetail',{ notes:item})
    }
    return (
      <Pressable
        style={[styles.itemContainer, { backgroundColor: itemBg, borderColor: itemBorder }]} onPress={handleNavigate}>
        <View style={styles.itemSubContainer}>
          <Image source={images.USER_ICON} style={styles.itemImage} />
          <View style={[GlobalStyles.setSpacing, styles.itemSubContainer]}>
            <View style={styles.verticalContainer}>
              <Text numberOfLines={1} style={styles.title}>{item.created_by_username}</Text>
              <Text numberOfLines={1} style={styles.subTitle}>{item.note_body}</Text>
            </View>
            <View style={styles.itemButtonContainer}>
              <Text style={styles.itemBtnTitle}>{item.note_subject_name}</Text>
            </View>
          </View>
        </View>
        <Text style={styles.itemTxt}>item.create_at</Text>
      </Pressable>
    );
  };
  return (
    <FlatList
      data={notes}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default NotesComponent;

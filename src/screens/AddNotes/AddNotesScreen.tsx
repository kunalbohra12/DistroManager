import { View, Text, Image, SafeAreaView, TouchableOpacity, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import styles from './AddNotesStyle'
import GlobalStyles from '../../utils/constants/styles/GlobalStyles'
import images from '../../utils/constants/Images'
import { useNavigation, useRoute } from '@react-navigation/native'
import CustomDropdown from '../../components/CustomDropDown/CustomDropDownComponent'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/navigationParamstypes';
import { addNote } from '../../services/FirebaseNotesManager'
type NavigationProp = StackNavigationProp<RootStackParamList, 'AddNote'>;

const AddNotesScreen = ({ }) => {
    const route = useRoute();
    const addNotes = route.params?.addNote;
    const [notesTxt, setNotesTxt] = useState('')
const navigation = useNavigation<NavigationProp>();
    const options = [
        { label: 'For Office', value: 'For Office' },
        { label: 'General', value: 'General' },
        { label: 'For Driver', value: 'For Driver' },
        { label: 'For Manager', value: 'For Manager' },
    ];
    const [visibility, setVisibility] = useState<string | null>(null);
    const handleDropdownSelect = (value: string) => {
        setVisibility(value);
    };

  const handleAddNote = async () => {
    if (!notesTxt || !visibility) {
      Alert.alert('Please fill in all fields');
      return;
    }

    const newNote = {
      create_at: new Date(),
      created_by_username: 'user123', 
      last_modified_date: new Date(),
      images_id: [],
      note_body: notesTxt,
      note_subject_id: 'subject123', 
      note_subject_name: visibility,
    };

    try {
      await addNote(newNote);
      Alert.alert('Note added successfully!');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Failed to add note');
    }
  };

    return (
        <SafeAreaView style={GlobalStyles.container}>
            <View style={GlobalStyles.container}>
                <View style={styles.header}>
                    <View style={styles.headerLeftSub} >
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image source={images.LEFT_ARROW} style={styles.icon} />
                        </TouchableOpacity>
                        <Text>Add New Note</Text>
                    </View>
                    <View style={styles.headerLeftSub}>
                        <TouchableOpacity>
                            <Image source={images.RELOAD_ICON} style={styles.btnLogo} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.headerBtn}>
                            <Text style={styles.btnTitle} >End Visit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.formContainer}>
                    <Text style={styles.title}>Note Subject</Text>
                    <CustomDropdown options={options} onSelect={handleDropdownSelect} />
                    <Text style={styles.title}>Merchandiser Signature:</Text>
                    <View style={styles.bottomField}>
                        <TextInput
                            style={styles.placeholder}
                            placeholder="Type your response here..."
                            value={notesTxt}
                            onChangeText={setNotesTxt}
                            multiline
                        />
                    </View>
                    <TouchableOpacity style={styles.fixedSize}>
                        <Text style={styles.btnTitle} >Upload Picture</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer} onPress={handleAddNote}>
                        <Text style={styles.btnTitle} >Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}
export default AddNotesScreen


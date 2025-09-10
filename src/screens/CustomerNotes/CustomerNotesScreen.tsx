import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState, useCallback } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import GlobalStyles from '../../utils/constants/styles/GlobalStyles'
import styles from './CustomerNotesStyle'
import images from '../../utils/constants/Images'
import colors from '../../utils/constants/colors'
import NotesComponent from '../../components/Notes/NotesComponent'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/navigationParamstypes';
import { getAllNotes } from '../../services/FirebaseNotesManager'

type NavigationProp = StackNavigationProp<RootStackParamList, 'CustomerNotes'>;

type Note = {
    id: string;
    create_at: Date;
    created_by_username: string;
    last_modified_date: Date;
    note_body: string;
    note_subject_id: string;
    note_subject_name: string;
};

const CustomerNotesScreen = () => {
    const [notes, setNotes] = useState<Note[]>([]);
    const [searchTxt, setSearchTxt] = useState('');
    const navigation = useNavigation<NavigationProp>();

    // Fetch notes from Firestore
    const fetchNotes = async () => {
        try {
            const allNotes = await getAllNotes();

            const transformedNotes = allNotes.map(note => ({
                id: note.id,
                create_at: note.create_at,
                created_by_username: note.created_by_username || 'Unknown',
                last_modified_date: note.last_modified_date,
                note_body: note.note_body || '',
                note_subject_id: note.note_subject_id || '',
                note_subject_name: note.note_subject_name || '',
            }));

            setNotes(transformedNotes);
            console.log('Notes Data is', transformedNotes);
        } catch (error) {
            console.error('Error fetching notes:', error);
        }
    };

    // useFocusEffect to fetch notes every time screen comes into focus
    useFocusEffect(
        useCallback(() => {
            fetchNotes();
        }, [])
    );

    const addNote = (note: Note) => {
        setNotes(prevNotes => [note, ...prevNotes]);
    };

    return (
        <SafeAreaView style={GlobalStyles.container}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={images.DOROASLOGO} style={styles.logo} />
                    <View style={styles.headerSub}>
                        <TouchableOpacity onPress={fetchNotes}>
                            <Image source={images.RELOAD_ICON} style={styles.btnLogo} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.headerBtn}>
                            <Text style={styles.btnTitle}>End Visit</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.listHeader}>
                    <Text style={styles.listHeaderTitle}>Customer Notes</Text>
                    <View style={GlobalStyles.spacer} />
                    <TouchableOpacity
                        style={styles.listHeaderBtn}
                        onPress={() => navigation.navigate('AddNote', { addNote })}
                    >
                        <Text style={styles.listBtnTitle}>Add New Order</Text>
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

                <NotesComponent notes={notes} />
            </View>
        </SafeAreaView>
    );
};

export default CustomerNotesScreen;

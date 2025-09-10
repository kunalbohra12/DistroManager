import firestore from '@react-native-firebase/firestore';

// Define the Note type
export type Note = {
  id: string;
  create_at: Date;
  created_by_username: string;
  last_modified_date: Date;
  images_id: [];
  note_body: string;
  note_subject_id: string;
  note_subject_name: string;
};

const notesCollection = firestore().collection('notes');
// 🔹 Add a new note
export const addNote = async (note: Omit<Note, 'id'>): Promise<void> => {
  try {
    await notesCollection.add(note);
    console.log('Note added!');
  } catch (error) {
    console.error('Error adding note:', error);
  }
};
// 🔹 Get all notes
export const getAllNotes = async (): Promise<Note[]> => {
  try {
    const snapshot = await notesCollection.get();
    const notes: Note[] = snapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        create_at: data.create_at?.toDate?.() ?? new Date(),
        created_by_username: data.created_by_username || '',
        last_modified_date: data.last_modified_date?.toDate?.() ?? new Date(),
        images_id: data.images_id || [],
        note_body: data.note_body || '',
        note_subject_id: data.note_subject_id || '',
        note_subject_name: data.note_subject_name || '',
      };
    });
    console.log();
    
    return notes;
  } catch (error) {
    console.error('Error fetching notes:', error);
    return [];
  }
};

// 🔹 Update a note
export const updateNote = async (id: string, updatedFields: Partial<Omit<Note, 'id'>>): Promise<void> => {
  try {
    await notesCollection.doc(id).update(updatedFields);
    console.log('Note updated!');
  } catch (error) {
    console.error('Error updating note:', error);
  }
};

// 🔹 Delete a note
export const deleteNote = async (id: string): Promise<void> => {
  try {
    await notesCollection.doc(id).delete();
    console.log('Note deleted!');
  } catch (error) {
    console.error('Error deleting note:', error);
  }
};

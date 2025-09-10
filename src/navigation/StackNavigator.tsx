// src/navigation/AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NotesListScreen from '../screens/NotesList/NotesListScreen';
import SplashScreen from '../screens/Splash/SplashScreen';
import LoginScreen from '../screens/Login/LoginScreen';
import NotesScreen from '../screens/Notes/NotesScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import CustomerNotesScreen from '../screens/CustomerNotes/CustomerNotesScreen';
import AddNotesScreen from '../screens/AddNotes/AddNotesScreen';
import NotesDetailScreen from '../screens/NotesDetailScreen/NotesDetailScreen';
// Import your screens

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Splash">
                    <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="NotesList" component={NotesListScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="Notes" component={NotesScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="CustomerNotes" component={CustomerNotesScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="AddNote" component={AddNotesScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="NotesDetail" component={NotesDetailScreen} options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
        </GestureHandlerRootView>
    );
};
export default StackNavigator;

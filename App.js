import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {ListGrade } from './app/screens/ListGrades';
import {GradeForm } from './app/screens/GradeForm';


export default function App() {
  const StackGrades = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StackGrades.Navigator>    
        <StackGrades.Screen  name='ListGrades' component={ListGrade}/>
        <StackGrades.Screen  name='GradeFormNav' component={GradeForm}/>  
      </StackGrades.Navigator>
    </NavigationContainer>
  );
}

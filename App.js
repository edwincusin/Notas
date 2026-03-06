import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ListGrade } from './app/screens/ListGrades';
import { GradeForm } from './app/screens/GradeForm';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon} from '@rneui/base';

//para ejemplos 
import { Home } from './app/screens/HomeScreen'
import { Contacts } from './app/screens/ContactsScreen'


const Tab = createBottomTabNavigator();
const TabNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='TabContenidoA' component={Home}
        options={{
          headerShown: false,
          tabBarLabel: "configuracion",
          tabBarIcon:({size,tintColor})=>{
            return <Icon name='bug' size={size} color={tintColor} type='antdesign'/>
          }
        }}
      />
      <Tab.Screen
        name='TabContenidoB' component={Contacts}
        options={{
          headerShown: false,
          tabBarLabel: "Acerca de",
          tabBarIcon:()=>{
            return <Icon name='codepen-circle' size={24} color="blue" type='antdesign'/>
          }
          
        }}
      />
    </Tab.Navigator>

  );
};


const Drawer = createDrawerNavigator();
const DrawerNav = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name='DrawerListGrades' component={StackNav}
        options={{
          title: "Lista Notas",
        }}
      />
      <Drawer.Screen
        name='DawerEjemplosTabs' component={TabNav}
        options={{
          title: "EjemploTabs",
        }}

      />
      <Drawer.Screen
        name='DrawerFinSesion' component={StackNav}
        options={{
          title: "Finalizar sesion",
        }}

      />
    </Drawer.Navigator>
  );
};


const StackGrades = createNativeStackNavigator();

const StackNav = () => {
  return (
    <StackGrades.Navigator>
      <StackGrades.Screen name='ListGrades' component={ListGrade} />
      <StackGrades.Screen name='GradeFormNav' component={GradeForm} />
    </StackGrades.Navigator>
  );
};


//con drawenav
export default function App() {
  return (
    <NavigationContainer>
      <DrawerNav />
    </NavigationContainer>
  );
}


//con stsck
// export default function App() {
//   const StackGrades = createNativeStackNavigator();
//   return (
//     <NavigationContainer>
//       <StackGrades.Navigator>
//         <StackGrades.Screen name='ListGrades' component={ListGrade} />
//         <StackGrades.Screen name='GradeFormNav' component={GradeForm} />
//       </StackGrades.Navigator>
//     </NavigationContainer>
//   );
// }

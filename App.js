/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 **/

import React, {useState} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/component/Home/Home';
import LoginScreen from './src/component/Login/Login';
import HaveId from './src/component/Login/HaveId/HaveId';
import SignUp from './src/component/SignUp/SignUp';
import Nickname from './src/component/SignUp/Nickname/Nickname';
import Calendar from './src/component/Calender/Calender';
import Sidebar_longin from './src/component/Sidebar/sidebar_login';
import Sidebar_longined from './src/component/Sidebar/sidebar_logined';
import Add_diary from './src/component/Calender/add_diary';
import MtoE from './src/component/Data/MtoE';
import enterfood from './src/component/Data/enterfood';
import details from './src/component/Calender/details';
import Users from './src/component/test';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HaveId"
          component={HaveId}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="nickname"
          component={Nickname}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Calender"
          component={Calendar}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Sidebar"
          component={Sidebar_longin}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Sidebar_logined"
          component={Sidebar_longined}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Add_diary"
          component={Add_diary}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MtoE"
          component={MtoE}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EnterFood"
          component={enterfood}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="details"
          component={details}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

{
  /* <Text style={styles.mainText} onPress={() => alert('text touch event')}>
        Hello World
      </Text>
      <Generator add={onAddRandomNumber} />
      <ScrollView style={{width: '100%'}}>
        <Numlist num={random} />
      </ScrollView> */
}

//const [random, setrandom] = useState([36, 99]);
// const onAddRandomNumber = () => {
//   const randomNum = Math.floor(Math.random() * 100) + 1;
//   setrandom([...random, randomNum]);
// };

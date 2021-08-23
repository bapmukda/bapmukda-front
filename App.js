/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

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
import enterfood from './src/component/Data/enterfood'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{title: '로그인/회원가입'}}
        />
        <Stack.Screen
          name="HaveId"
          component={HaveId}
          options={{title: '로그인'}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{title: '회원가입'}}
        />
        <Stack.Screen
          name="nickname"
          component={Nickname}
          options={{title: '회원가입'}}
        />
        <Stack.Screen
          name="Calender"
          component={Calendar}
          options={{title: '캘린더'}}
        />
        <Stack.Screen
          name="Sidebar"
          component={Sidebar_longin}
          options={{title: '사이드바_로그아웃'}}
        />
        <Stack.Screen
          name="Sidebar_logined"
          component={Sidebar_longined}
          options={{title: '사이드바_로그인'}}
        />
        <Stack.Screen
          name="Add_diary"
          component={Add_diary}
          options={{title: '기분등록'}}
        />
        <Stack.Screen
          name="MtoE"
          component={MtoE}
          options={{title: '데이터'}}
        />
        <Stack.Screen
          name="EnterFood"
          component={enterfood}
          options={{title: '음식등록'}}
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

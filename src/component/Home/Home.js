import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, Button, TextInput} from 'react-native';

export default function Home(props) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>HomeScreen</Text>
      <Button
        title="To Login Screen"
        onPress={() => {
          props.navigation.navigate('Login');
        }}
      />
      <Button
        title="To Calender Screen"
        onPress={() => {
          props.navigation.navigate('Calender');
        }}
      />
      <Button
        title="Sidebar Screen"
        onPress={() => {
          props.navigation.navigate('Add_diary');
        }}
      />
    </View>
  );
}

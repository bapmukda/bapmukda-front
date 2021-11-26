import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import Modal from 'react-native-modal';
export default function Home(props) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Home</Text>
      <Button
        title="To Login Screen"
        onPress={() => {
          props.navigation.navigate('Login');
        }}
      />
      <Button
        title=" Calender Screen"
        onPress={() => {
          props.navigation.navigate('Calender');
        }}
      />
      <Button
        title="식단등록 Screen"
        onPress={() => {
          props.navigation.navigate('MtoE');
        }}
      />
    </View>
  );
}

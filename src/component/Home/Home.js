import 'react-native-gesture-handler';
<<<<<<< HEAD
import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  SafeAreaView,
  StyleSheet,
  FlatList,
} from 'react-native';
import Modal from 'react-native-modal';
import SwipetoDelete from '../Calender/modal/swipetoDelete';
const data = [
  {id: '1', name: 'sbj'},
  {id: '2', name: 'sbj'},
  {id: '3', name: 'sbj'},
  {id: '4', name: 'sbj'},
];
=======
import React from 'react';
import {View, Text, Button, TextInput} from 'react-native';
>>>>>>> 92936ac61acee4dea25793779656277f4895f669

export default function Home(props) {
  const [Lists, setLists] = useState(data);
  const deleteItem = index => {
    const arr = [...Lists];
    arr.splice(index, 1);
    setLists(arr);
  };
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
<<<<<<< HEAD
      {/* <View>
        <FlatList
          data={Lists}
          renderItem={({item, index}) => {
            return (
              <>
                {' '}
                <SwipetoDelete
                  data={item}
                  handleDelete={() => deleteItem(index)}
                />
              </>
            );
          }}
          ItemSeparatorComponent={() => {
            return <><View style={styles.seperateLine}> </View></>;
          }}
        />
      </View> */}
=======
      <Button
        title="details Screen"
        onPress={() => {
          props.navigation.navigate('details');
        }}
      />
>>>>>>> 92936ac61acee4dea25793779656277f4895f669
    </View>
  );
}

const styles = StyleSheet.create({
  seperateLine: {
    height: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: 16,
  },
});

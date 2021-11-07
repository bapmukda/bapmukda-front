import 'react-native-gesture-handler';
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
        title="Sidebar Screen"
        onPress={() => {
          props.navigation.navigate('Add_diary');
        }}
      />
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

import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  TouchableOpacity,
} from 'react-native';
import {Swipeable} from 'react-native-gesture-handler';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function SwipetoDelete(props) {
  const [lists, setLists] = [];
  const leftSwipe = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    });
    return (
      <TouchableOpacity activeOpacity={0.6} onPress={deleteItem}>
        <View style={styles.deleteBox}>
          <Animated.Text style={{transform: [{scale: scale}]}}>
            Delete
          </Animated.Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Swipeable renderLeftActions={leftSwipe}>
      <View>
        <Text>my name is {props.data.name}</Text>
      </View>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  deleteBox: {
    backgroundColor: 'red',
    justifyContent: 'center',
    width: 100,
  },
  Container: {
    height: '80',
    width: SCREEN_WIDTH,
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: '16',
  },
});

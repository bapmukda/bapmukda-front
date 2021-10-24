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

const SCREEN_WIDTH = Dimensions.get(window).width;

export default function swipetoDelete() {
  const [lists, setLists] = [];
  const leftSwipe = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    });
    return (
      <TouchableOpacity activeOpacity={0.6} onPress={}>
        <View style={styles.deleteBox}>
          <Animated.Text style={{transform: [{scale: scale}]}}>
            Delete
          </Animated.Text>
        </View>
      </TouchableOpacity>
    );
  };

  const deleteItem = index => {
    const arr = [...lists];
    arr.splice(index, 1);
    setLists(arr);
  };

  return (
    <Swipeable renderLeftActions={leftSwipe}>
      <View>
        <Text>start swipe to delete</Text>
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
});

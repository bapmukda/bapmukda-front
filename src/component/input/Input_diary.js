import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';

export default function Input_diary() {
  const [myTextInput, setmyTextInput] = useState('');
  const [isFocused, setisFocused] = useState(true);
  const [cnt, setcnt] = useState(0);
  const onChangeInput = event => {
    setmyTextInput(event);
    // setcnt();
  };
  const handleFocus = () => setisFocused(true);
  const handleBlur = () => setisFocused(false);
  const maxlen=80;
  return (
      <View>
        <TextInput
          width="100%"
          hieght="100%"
          value={myTextInput}
          placeholder="오늘 하루는 어떠셨나요?"
          onChangeText={onChangeInput}
          multiline={true}
          maxLength={maxlen}
          autoCapitalize={'none'}
          editable={true}
          textAlign={'center'}
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={[styles.input,{borderColor: isFocused ? '#333842' : '#D6D7D9',}]}
        />
        <Text style={styles.cnt}>
          {myTextInput.length}/80
        </Text>
      </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: "100%",
    paddingBottom: 0,
    paddingTop: 0,
    justifyContent: 'center',
    lineHeight: 20,
    fontFamily: "SpoqaHanSans",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    lineHeight: 21,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    letterSpacing: 0.02,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 1,
  },
  cnt:{
    // width: "100%",
    // height: "100%",
    // paddingBottom: 0,
    // paddingTop: 0,
    justifyContent: 'center',
    fontFamily: "SpoqaHanSans",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    lineHeight: 21,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    letterSpacing: 0.02,
    color:"#999BA0",
    marginLeft:"88%"
  }
});

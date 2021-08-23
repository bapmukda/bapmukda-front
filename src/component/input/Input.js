import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';

export default function Input() {
  const [myTextInput, setmyTextInput] = useState('');
  const [isFocused, setisFocused] = useState(true);
  const onChangeInput = event => {
    setmyTextInput(event);
  };
  const handleFocus = () => setisFocused(true);
  const handleBlur = () => setisFocused(false);

  return (
    <View
      style={{
        paddingTop: 50,
        paddingBottom: 48,
        width: '100%',
        alignItems: 'center',
      }}>
      <TextInput
        value={myTextInput}
        placeholder="이메일을 입력하세요"
        onChangeText={onChangeInput}
        multiline={true}
        maxLength={10}
        autoCapitalize={'none'}
        editable={true}
        textAlign={'center'}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={[
          styles.input,
          {
            borderColor: isFocused ? '#333842' : '#D6D7D9',
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: '70%',
    height: 56,
    backgroundColor: '#FBFBFB',
    marginTop: 20,
    borderRadius: 12,
    borderColor: '#D6D7D9',
    borderWidth: 1,
    paddingBottom: 0,
    paddingTop: 0,
    justifyContent: 'center',
    lineHeight: 20,
  },
});

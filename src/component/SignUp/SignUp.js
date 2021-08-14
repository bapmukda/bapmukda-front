import React from 'react';
import {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

export default function SignUp(props) {
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [passWordInput, setPassWordInput] = useState('');
  const [passwordConfirmInput, setPasswordConfirmInput] = useState(true);
  const handlepwcFocus = () => setPasswordConfirmInput(true);
  const handlepwcBlur = () => setPasswordConfirmInput(false);
  const onPassWordInput = event => {
    setPassWordInput(event);
  };
  const onConfirmInput = event => {
    setPasswordConfirm(event);
  };
  return (
    <View style={styles.mainView}>
      <Text style={{fontWeight: 'bold', paddingTop: 24}}>밥먹다와 함께 할</Text>
      <Text style={{fontWeight: 'bold'}}>메일주소를 적어주세요</Text>
      <Text style={{paddingTop: 10, color: '#999BA0'}}>
        영문,숫자를 포함하여 10자 이상 입력해주세요
      </Text>

      <TextInput
        style={styles.input}
        placeholder="비밀번호를 입력하세요"
        type="password"
        secureTextEntry={true}
        value={passWordInput}
        onChangeText={onPassWordInput}></TextInput>

      <TextInput
        style={styles.input}
        placeholder="비밀번호를 입력하세요"
        type="password"
        secureTextEntry={true}
        value={passwordConfirm}
        onChangeText={onConfirmInput}></TextInput>
      {passWordInput === '' || passwordConfirm === '' ? (
        <View style={styles.ButtonDesign}>
          <Button
            title="다음"
            color="#D6D7D9"
            onPress={() => {
              props.navigation.navigate('nickname');
            }}
          />
        </View>
      ) : (
        <View style={styles.ButtonDesign2}>
          <Button
            title="다음"
            color="white"
            backgroundColor="#E17551"
            onPress={() => {
              props.navigation.navigate('nickname');
            }}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'white',
    flex: 1, //화면을 차지 하는 비율, 1/1 다른게 3이면 1/4 : 3/4
    paddingTop: 50,
    alignItems: 'center', //수평정렬
  },
  mainText: {
    fontSize: 20,
    fontWeight: 'normal',
    color: 'red',
    padding: 20,
  },
  ButtonDesign: {
    backgroundColor: '#EBEBEC',
    borderRadius: 10,
    width: 160,
    height: 48,
    justifyContent: 'center',
    marginTop: 50,
  },
  input: {
    width: '70%',
    height: 56,
    backgroundColor: '#FBFBFB',
    marginTop: 50,
    borderRadius: 12,
    borderColor: '#D6D7D9',
    borderWidth: 1,
    justifyContent: 'center',
    lineHeight: 20,
    textAlign: 'center',
  },
  ButtonDesign2: {
    borderRadius: 10,
    width: 160,
    height: 48,
    justifyContent: 'center',
    marginTop: 50,
    backgroundColor: '#E17551',
  },
});

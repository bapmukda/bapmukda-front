import React from 'react';
import {useState} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Image,
} from 'react-native';
import close from '../imgs/close.png';
import back from '../imgs/Vector1.png';

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
    <>
      <View
        style={{
          marginTop: 50,
          height: 40,
          width: '100%',
          backgroundColor: 'white',
          justifyContent: 'center',
          borderBottomWidth: 1,
          borderBottomColor: 'rgb(212, 212, 212)',
        }}>
        <Text style={{textAlign: 'center'}}>회원가입</Text>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Home');
          }}>
          <Image
            source={close}
            style={{position: 'absolute', right: 30, top: -20}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('HaveId');
          }}>
          <Image
            source={back}
            style={{position: 'absolute', left: 30, top: -18}}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.mainView}>
        <Text style={{fontWeight: 'bold', paddingTop: 24}}>환영합니다!</Text>
        <Text style={{fontWeight: 'bold'}}>비밀번호를 입력해주세요.</Text>
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
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('nickname');
            }}
            style={styles.ButtonDesign}>
            <Text style={{color: 'rgba(214, 215, 217,1)'}}>다음</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('nickname', {
                LoginName: props.route.params.LoginName,
                passWordInput: passWordInput,
              });
            }}
            style={styles.ButtonDesign2}>
            <Text style={{color: 'white'}}>다음</Text>
          </TouchableOpacity>
        )}
      </View>
    </>
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
    alignItems: 'center',
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
    alignItems: 'center',
  },
});

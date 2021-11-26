import React, {useState} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  TextInput,
  Image,
} from 'react-native';
import close from '../..//imgs/close.png';
import back from '../../imgs/Vector1.png';
import Users_login from '../../password_check';

export default function HaveId(props) {
  const [PasswordInput, setPasswordInput] = useState('');
  const [R, setR] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);
  const [success, setSuccess] = useState('false');

  const onChangeInput = event => {
    setPasswordInput(event);
  };
  return (
    <>
      <View style={styles.HeaderStyle}>
        <Text style={{textAlign: 'center'}}>로그인</Text>
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
            props.navigation.navigate('Login');
          }}>
          <Image
            source={back}
            style={{position: 'absolute', left: 30, top: -18}}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.mainView}>
        <Text style={{fontWeight: 'bold', paddingTop: 24, fontsize: 16}}>
          이미 회원이시네요!
        </Text>
        <Text style={{fontWeight: 'bold', fontSize: 16}}>
          비밀번호를 입력해주세요.
        </Text>
        {PasswordInput === '' ? (
          <TextInput
            style={styles.input}
            placeholder="비밀번호를 입력하세요"
            type="password"
            value={PasswordInput}
            onChangeText={onChangeInput}
            secureTextEntry={true}></TextInput>
        ) : (
          <TextInput
            style={styles.inputX}
            placeholder="비밀번호를 입력하세요"
            type="password"
            value={PasswordInput}
            onChangeText={onChangeInput}
            secureTextEntry={true}></TextInput>
        )}
        {PasswordInput === '' ? (
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('SignUp');
            }}
            style={styles.ButtonDesign}>
            <Text style={{color: 'rgba(214, 215, 217,1)'}}>완료</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              console.log('-------' + accessToken + '-------');
              accessToken !== '' && refreshToken !== ''
                ? props.navigation.navigate('Sidebar_logined', {
                    accessToken: accessToken,
                    refreshToken: refreshToken,
                  })
                : console.log('올바르지 않은 비밀번호입니다.');
            }}
            style={styles.ButtonDesign2}>
            <Text style={{color: 'white'}}>완료</Text>
          </TouchableOpacity>
        )}
        <Users_login
          LoginName={props.route.params.LoginName}
          PasswordInput={PasswordInput}
          accessToken={accessToken}
          setAccessToken={setAccessToken}
          refreshToken={refreshToken}
          setrefreshToken={setRefreshToken}></Users_login>
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
  inputX: {
    width: '70%',
    height: 56,
    backgroundColor: '#FBFBFB',
    marginTop: 50,
    borderRadius: 12,
    borderColor: '#333842',
    borderWidth: 1,
    justifyContent: 'center',
    lineHeight: 20,
    textAlign: 'center',
  },
  mainText: {
    fontSize: 20,
    fontWeight: 'normal',
    color: 'red',
    padding: 20,
  },
  ButtonDesign: {
    marginTop: 50,
    backgroundColor: '#EBEBEC',
    borderRadius: 10,
    width: 160,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
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
  HeaderStyle: {
    marginTop: 50,
    height: 60,
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(212, 212, 212)',
  },
});

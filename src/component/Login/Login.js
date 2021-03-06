import 'react-native-gesture-handler';
import React, {useState} from 'react';
import close from '../imgs/close.png';
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
import Users from '../email_check';
import {isEamil} from '../check_id_pw';

export default function LoginScreen(props) {
  const [LoginName, setLoginName] = useState('');
  const onChangeInput = event => {
    setLoginName(event);
  };
  const [R, setR] = useState(null);
  const [email, setEmail] = useState(null);
  const validate = text => {
    console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text) === false) {
      console.log('Email is Not Correct');
      setLoginName(text);
      return false;
    } else {
      setLoginName(text);
      console.log('Email is Correct');
    }
  };

  return (
    <>
      <View style={styles.HeaderStyle}>
        <Text style={{textAlign: 'center'}}>로그인/회원가입</Text>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Home');
          }}>
          <Image
            source={close}
            style={{position: 'absolute', right: 50, top: -20}}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.mainView}>
        <Text style={{fontSize: 16}}>밥먹다와 함께 할</Text>
        <Text style={{fontSize: 16}}>메일주소를 적어주세요</Text>
        {LoginName === '' ? (
          <TextInput
            autoCapitalize={'none'}
            autoFocus={true}
            style={styles.input}
            type="email"
            placeholder="메일주소 입력"
            value={LoginName}
            onChangeText={text => validate(text)}></TextInput>
        ) : (
          <TextInput
            autoCapitalize={'none'}
            autoFocus={true}
            style={styles.inputX}
            type="email"
            placeholder="메일주소 입력"
            value={LoginName}
            onChangeText={text => validate(text)}></TextInput>
        )}

        {LoginName === '' ? (
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('HaveId');
            }}
            style={styles.ButtonDesign}>
            <Text style={{color: 'rgba(214, 215, 217,1)'}}>다음</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              console.log(R, LoginName);
              R === true
                ? props.navigation.navigate('HaveId', {LoginName: LoginName})
                : props.navigation.navigate('SignUp', {LoginName: LoginName});
            }}
            style={styles.ButtonDesign2}>
            <Text style={{color: 'white'}}>다음</Text>
          </TouchableOpacity>
        )}
        <Users
          R={R}
          setR={setR}
          LoginName={LoginName}
          setLoginName={setLoginName}></Users>
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
    borderRadius: 10,
    width: 160,
    height: 48,
    justifyContent: 'center',
    marginTop: 50,
    backgroundColor: '#EBEBEC',
    alignItems: 'center',
  },
  ButtonDesign2: {
    borderRadius: 10,
    width: 160,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    backgroundColor: '#E17551',
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

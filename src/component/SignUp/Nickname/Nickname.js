import React from 'react';
import {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
  Image,
} from 'react-native';
import close from '../..//imgs/close.png';
import back from '../../imgs/Vector1.png';
import CheckBox from '@react-native-community/checkbox';
import Users_login from '../../create_handle';

export default function Nickname(props) {
  const [myTextInput, setMyTextInput] = useState('');
  const [passWordInput, setPassWordInput] = useState(true);
  const [isInput, setisInput] = useState(false);
  const handlepwFocus = () => setPassWordInput(true);
  const handlepwBlur = () => setPassWordInput(false);
  const [isSelected, setSelection] = useState(false);
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);

  const onChangeInput = event => {
    setMyTextInput(event);
  };
  return (
    <>
      <View style={styles.HeaderStyle}>
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
            props.navigation.navigate('SignUp');
          }}>
          <Image
            source={back}
            style={{position: 'absolute', left: 30, top: -18}}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.mainView}>
        <Text style={{fontWeight: 'bold', fontSize: 16}}>마지막으로</Text>
        <Text style={{fontWeight: 'bold', fontSize: 16}}>
          닉네임을 입력해주세요
        </Text>
        <Text style={{paddingTop: 10, color: '#999BA0'}}>
          최대 20자로 닉네임을 입력해주세요
        </Text>
        <View
          style={{
            paddingBottom: 24,
            width: '100%',
            alignItems: 'center',
          }}>
          {myTextInput === '' ? (
            <TextInput
              style={styles.input}
              type="text"
              value={myTextInput}
              onChangeText={onChangeInput}
              placeholder="닉네임 입력"></TextInput>
          ) : (
            <TextInput
              style={styles.inputX}
              type="text"
              value={myTextInput}
              onChangeText={onChangeInput}
              placeholder="닉네임 입력"></TextInput>
          )}
        </View>
        <View style={styles.container}>
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox}
              onCheckColor="white"
              onFillColor="#E17551"
              onTintColor="#E17551"
              boxType="square"
            />

            <Text style={styles.label}>개인정보 처리방침 </Text>
            <Text style={{marginTop: 8, marginLeft: -15, fontWeight: 'bold'}}>
              {' '}
              에 동의합니다.
            </Text>
          </View>
        </View>
        <View style={{marginTop: 50}}>
          {myTextInput === '' ? (
            <TouchableOpacity
              onPress={() => {
                // props.navigation.navigate('Home');
              }}
              style={styles.ButtonDesign}>
              <Text style={{color: 'rgba(214, 215, 217,1)'}}>가입완료</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Sidebar_logined', {
                  name: myTextInput,
                });
              }}
              style={styles.ButtonDesign2}>
              <Text style={{color: 'white'}}>가입완료</Text>
            </TouchableOpacity>
          )}
        </View>
        <Users_login
          LoginName={props.route.params.LoginName}
          PasswordInput={props.route.params.passWordInput}
          myTextInput={myTextInput}
          setMyTextInput={setMyTextInput}
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
    alignItems: 'center',
  },
  afterButtonDesign: {
    backgroundColor: '#E17551',
    borderRadius: 10,
    width: 160,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ButtonDesign2: {
    borderRadius: 10,
    width: 160,
    height: 48,
    justifyContent: 'center',
    backgroundColor: '#E17551',
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
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
    transform: [{scaleX: 0.8}, {scaleY: 0.8}],
    marginTop: 5,
    marginRight: -15,
  },
  label: {
    margin: 8,
    textDecorationLine: 'underline',
    color: '#E17551',
    fontWeight: 'bold',
  },
  HeaderStyle: {
    marginTop: 50,
    height: 60,
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(210, 210, 210)',
  },
});

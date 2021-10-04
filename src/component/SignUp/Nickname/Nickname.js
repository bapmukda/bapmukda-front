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
export default function Nickname(props) {
  const [myTextInput, setmyTextInput] = useState('');
  const [passWordInput, setPassWordInput] = useState(true);
  const [isInput, setisInput] = useState(false);
  const handlepwFocus = () => setPassWordInput(true);
  const handlepwBlur = () => setPassWordInput(false);
  const [isSelected, setSelection] = useState(false);

  const onChangeInput = event => {
    setmyTextInput(event);
  };
  return (
    <>
      <View
        style={{
          marginTop: 50,
          height: 60,
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
            props.navigation.navigate('SignUp');
          }}>
          <Image
            source={back}
            style={{position: 'absolute', left: 30, top: -18}}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.mainView}>
        <Text style={{fontWeight: 'bold', paddingTop: 24, fontSize: 18}}>
          마지막으로
        </Text>
        <Text style={{fontWeight: 'bold', fontSize: 18}}>
          닉네입을 입력해주세요
        </Text>
        <Text style={{paddingTop: 10, color: '#999BA0'}}>
          최대 20자로 닉네임을 입력해주세요
        </Text>
        <View
          style={{
            paddingTop: 50,
            paddingBottom: 24,
            width: '100%',
            alignItems: 'center',
          }}>
          <TextInput
            style={styles.input}
            type="text"
            value={myTextInput}
            onChangeText={onChangeInput}
            placeholder="닉네임 입력"></TextInput>
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
            />
            <Text style={styles.label}>개인정보방침 </Text>
            <Text style={{marginTop: 8, marginLeft: -15}}> 에 동의합니다.</Text>
          </View>
        </View>
        <View style={{marginTop: 50}}>
          {myTextInput === '' ? (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Home');
              }}
              style={styles.ButtonDesign}>
              <Text style={{color: 'rgba(214, 215, 217,1)'}}>가입완료</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Home');
              }}
              style={styles.ButtonDesign2}>
              <Text style={{color: 'white'}}>가입완료</Text>
            </TouchableOpacity>
          )}
        </View>
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
  },
  label: {
    margin: 8,
    textDecorationLine: 'underline',
    color: '#E17551',
  },
});

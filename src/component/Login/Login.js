import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  TextInput,
} from 'react-native';

export default function Longin(props) {
  const [LonginName, setLonginName] = useState('');
  const onChangeInput = event => {
    setLonginName(event);
  };
  return (
    <View style={styles.mainView}>
      <Text
        style={{
          fontWeight: 'bold',
          paddingTop: 24,
          fontSize: 18,
        }}>
        밥먹다와 함께 할
      </Text>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 18,
        }}>
        메일주소를 적어주세요
      </Text>
      <TextInput
        style={styles.input}
        type="email"
        placeholder="메일주소 입력"
        value={LonginName}
        onChangeText={onChangeInput}></TextInput>

      {LonginName === '' ? (
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
            props.navigation.navigate('HaveId');
          }}
          style={styles.ButtonDesign2}>
          <Text style={{color: 'white'}}>다음</Text>
        </TouchableOpacity>
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
});

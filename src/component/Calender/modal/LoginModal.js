import React from 'react';
import {TouchableOpacity, Image, View, Text} from 'react-native';
import Modal from 'react-native-modal';
import signin from '../../imgs/signin.png';
export default function LoginModal(props) {
  const toGoLoginPage = () => {
    props.onEntermodal;
  };
  return (
    <Modal isVisible={props.enterModal}>
      <View
        style={{
          backgroundColor: 'white',
          height: 400,
          borderRadius: 10,
          alignItems: 'center',
        }}>
        <Image
          source={signin}
          style={{width: 250, height: 144, marginTop: 30}}
        />
        <Text style={{fontSize: 16}}> 밥먹다에 가입하고</Text>
        <Text style={{fontSize: 16, marginTop: 8}}> 기록을 시작해보세요</Text>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate('Login') & props.onEntermodal()
          }>
          <View
            style={{
              backgroundColor: '#E17551',
              width: 300,
              borderRadius: 10,
              height: 60,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 30,
            }}>
            <Text style={{color: 'white', fontSize: 15}}>
              {' '}
              10초만에 가입하기
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={props.onEntermodal}>
          <View
            style={{
              backgroundColor: 'white',
              width: 300,
              borderRadius: 10,
              height: 60,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: '#E17551'}}> 닫기</Text>
          </View>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

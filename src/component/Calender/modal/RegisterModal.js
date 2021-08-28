import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import close from '../../imgs/close.png';
import Modal from 'react-native-modal';
export default function RegisterModal(props) {
  return (
    <Modal
      isVisible={registerModal}
      style={{
        justifyContent: 'flex-end',
        margin: 0,
      }}
      transparent={true}
      coverScreen={false}
      backdropColor="rgba(r,g,b,a)"
      backdropOpacity={1}
      onBackdropPress={handleregisterModal}
      borderRadius={10}>
      <View
        style={{
          flex: 0.4,
          backgroundColor: 'white',
          top: '50%',
          justifyContent: 'space-around',
          height: '40%',
          borderRadius: 10,
          shadowColor: 'rgb(196, 196, 196)',
          shadowOffset: {width: 0, height: 1},
          shadowOpacity: 1,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{marginLeft: 20, fontSize: 16, fontWeight: 'bold'}}>
            등록하기
          </Text>
        </View>
        <TouchableOpacity
          style={{position: 'absolute', right: '5%', top: '10%'}}
          onPress={handleregisterModal}>
          <Image source={close} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{marginLeft: 20}}>식단등록</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{marginLeft: 20, marginBottom: 20}}>기분등록</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

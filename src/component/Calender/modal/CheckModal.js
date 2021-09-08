import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
export default function CheckModal(props) {
  return (
    <Modal isVisible={props.isCheckModal} style={{alignItems: 'center'}}>
      <View
        style={{
          backgroundColor: 'white',
          width: 300,
          height: 300,
          borderRadius: 16,
        }}>
        <TouchableOpacity onPress={props.handleCheckModal}>
          <Text style={{textAlign: 'center', fontSize: 18, top: 40}}>
            식사시간
          </Text>
        </TouchableOpacity>
        <Text style={{top: 80, textAlign: 'center'}}>
          어제 기준 오늘의 식사 시간입니다.
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center', left: 50}}>
          <Text style={{top: 120, fontSize: 16, color: '#E17551'}}>+30분</Text>
          <Text style={{top: 120, marginLeft: 10, color: '#999BA0'}}>
            어제보다 30분 늦은 식사
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', left: 50}}>
          <Text style={{top: 130, fontSize: 16, color: '#738CC1'}}>- 30분</Text>
          <Text style={{top: 130, marginLeft: 10, color: '#999BA0'}}>
            어제보다 30분 빨리 식사
          </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: '#E17551',
            width: 200,
            left: 50,
            height: 50,
            justifyContent: 'center',
            borderRadius: 10,
            top: 160,
          }}
          onPress={props.handleCheckModal}>
          <Text
            style={{color: 'white', textAlign: 'center', fontWeight: 'bold'}}>
            닫기
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

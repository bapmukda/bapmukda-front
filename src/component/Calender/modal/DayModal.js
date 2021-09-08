import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Modalize} from 'react-native-modalize';
const styles = StyleSheet.create({
  ContainImoji: {
    backgroundColor: '#FBFBFB',
    borderWidth: 1,
    borderColor: '#EBEBEC',
    shadowOffset: {width: 2, height: 2},
    width: 35,
    height: 35,
    margin: 20,
    shadowColor: 'rgb(196, 196, 196)',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ContainFull: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    shadowOpacity: 1,
    shadowOffset: {width: 0, height: 1},
    width: '80%',
    height: 70,
    shadowColor: 'rgb(196, 196, 196)',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 30,
  },
});

export default function DayModal(props) {
  return (
    <Modalize
      ref={props.modalizeRef}
      isVisible={props.isModalVisible}
      style={{marginBottom: 100}}
      backdropColor="rgba(r,g,b,a)"
      modalHeight={400}
      borderRadius={10}>
      <View
        style={{
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
          shadowColor: 'rgb(196, 196, 196)',
          shadowOffset: {width: 0, height: 1},
          shadowOpacity: 1,
        }}>
        <Text
          style={{
            left: '-30%',
            fontSize: 18,
            marginTop: 20,
            marginBottom: 30,
          }}>
          {' '}
          {props.isMonth}월 {props.isDay}일 {props.isDate}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#ffffff',
            shadowOpacity: 1,
            shadowOffset: {width: 0, height: 1},
            width: '80%',
            height: 70,
            shadowColor: 'rgb(196, 196, 196)',
            alignItems: 'center',
            borderRadius: 10,
            marginBottom: 30,
          }}>
          <View
            style={{
              backgroundColor: '#FBFBFB',

              shadowOffset: {width: 2, height: 2},
              width: 35,
              height: 35,
              margin: 20,
              shadowColor: 'rgb(196, 196, 196)',
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 1,
              borderColor: '#EBEBEC',
            }}>
            <Text style={{textAlign: 'center', fontSize: 20, width: 20}}>
              🍳
            </Text>
          </View>
          <Text style={{textAlign: 'center'}}>계란후라이</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{flexDirection: 'row', left: '-33%', marginBottom: 20}}>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>식단기록</Text>
          </View>
          <View
            style={{
              backgroundColor: '#FBFBFB',
              borderWidth: 1,
              borderColor: '#EBEBEC',
              shadowOffset: {width: 2, height: 2},
              width: 35,
              height: 35,
              marginTop: -10,
              shadowColor: 'rgb(196, 196, 196)',
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
              left: 100,
            }}>
            <Text onPress={props.handleCheckModal}>+</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            left: '-13%',
            marginBottom: 30,
            marginTop: 30,
          }}>
          <View
            style={{
              width: 8,
              height: 8,
              marginTop: 4,
              borderRadius: 35,
              backgroundColor: 'green',
            }}></View>
          <Text style={{marginLeft: 2, fontSize: 13}}> 아침</Text>
          <Text style={{marginLeft: 2}}> 09:00</Text>

          <Text
            onPress={props.handleCheckModal}
            style={{left: '1200%', color: 'red'}}>
            + 30분
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#ffffff',
            shadowOpacity: 1,
            shadowOffset: {width: 0, height: 1},
            width: '80%',
            height: 70,
            shadowColor: 'rgb(196, 196, 196)',
            alignItems: 'center',
            borderRadius: 10,
            marginBottom: 30,
          }}>
          <View
            style={{
              backgroundColor: '#FBFBFB',
              borderWidth: 1,
              borderColor: '#EBEBEC',
              shadowOffset: {width: 2, height: 2},
              width: 35,
              height: 35,
              margin: 20,
              shadowColor: 'rgb(196, 196, 196)',
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{textAlign: 'center', fontSize: 20, width: 20}}>
              🍳
            </Text>
          </View>
          <Text style={{textAlign: 'center'}}>계란후라이</Text>
        </View>

        <View style={{flexDirection: 'row', left: '-13%', marginBottom: 30}}>
          <View
            style={{
              width: 8,
              height: 8,
              marginTop: 4,
              borderRadius: 35,
              backgroundColor: 'red',
            }}></View>
          <Text style={{marginLeft: 2, fontSize: 13}}> 점심</Text>
          <Text style={{marginLeft: 2}}> 09:00</Text>
          <Text style={{left: '1200%', color: 'blue'}}> - 30분</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#ffffff',
            shadowOpacity: 1,
            shadowOffset: {width: 0, height: 1},
            width: '80%',
            height: 70,
            shadowColor: 'rgb(196, 196, 196)',
            alignItems: 'center',
            borderRadius: 10,
            marginBottom: 30,
          }}>
          <View
            style={{
              backgroundColor: '#FBFBFB',
              borderWidth: 1,
              borderColor: '#EBEBEC',
              shadowOffset: {width: 2, height: 2},
              width: 35,
              height: 35,
              margin: 20,
              shadowColor: 'rgb(196, 196, 196)',
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{textAlign: 'center', fontSize: 20, width: 20}}>
              🍳
            </Text>
          </View>
          <Text style={{textAlign: 'center'}}>계란후라이</Text>
        </View>

        <View style={{flexDirection: 'row', left: '-13%', marginBottom: 30}}>
          <View
            style={{
              width: 8,
              height: 8,
              marginTop: 4,
              borderRadius: 35,
              backgroundColor: 'orange',
            }}></View>
          <Text style={{marginLeft: 2, fontSize: 13}}> 저녁</Text>
          <Text style={{marginLeft: 2}}> 19:00</Text>
          <Text style={{left: '1200%', color: 'blue'}}> - 00분</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#ffffff',
            shadowOpacity: 1,
            shadowOffset: {width: 0, height: 1},
            width: '80%',
            height: 70,
            shadowColor: 'rgb(196, 196, 196)',
            alignItems: 'center',
            borderRadius: 10,
            marginBottom: 30,
          }}>
          <View
            style={{
              backgroundColor: '#FBFBFB',
              borderWidth: 1,
              borderColor: '#EBEBEC',
              shadowOffset: {width: 2, height: 2},
              width: 35,
              height: 35,
              margin: 20,
              shadowColor: 'rgb(196, 196, 196)',
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{textAlign: 'center', fontSize: 20, width: 20}}>
              🍳
            </Text>
          </View>

          <Text style={{textAlign: 'center'}}>계란후라이</Text>
        </View>

        <View style={{flexDirection: 'row', left: '-13%', marginBottom: 30}}>
          <View
            style={{
              width: 8,
              height: 8,
              marginTop: 4,
              borderRadius: 35,
              backgroundColor: 'blue',
            }}></View>
          <Text style={{marginLeft: 2, fontSize: 13}}> 간식</Text>
          <Text style={{marginLeft: 2}}> 19:00</Text>
          <Text style={{left: '1200%', color: 'blue'}}> - 00분</Text>
        </View>
        <View style={styles.ContainFull}>
          <View style={styles.ContainImoji}>
            <Text style={{textAlign: 'center', fontSize: 20, width: 20}}>
              🍳
            </Text>
          </View>
          <Text style={{textAlign: 'center'}}>계란후라이</Text>
        </View>
      </View>
    </Modalize>
  );
}

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Platform,
} from 'react-native';
import Modal from 'react-native-modal';
import GestureRecognizer from 'react-native-swipe-gestures';
export default function DayModal(props) {
  return (
    <GestureRecognizer
      style={{flex: 1}}
      onSwipeDown={() => props.setIsModalVisible(false)}>
      <Modal
        backdropColor={'transparent'}
        isVisible={props.isModalVisible}
        onBackdropPress={() => props.setIsModalVisible(false)}
        style={{justifyContent: 'flex-end', margin: 0}}>
        <View style={styles.FullModalView}>
          <ScrollView style={{width: '100%'}}>
            <Text style={styles.Dateword}>
              {' '}
              {props.isMonth}์ {props.isDay}์ผ {props.isDate}
            </Text>
            <View style={styles.ContainFull}>
              <View style={styles.ContainImoji}>
                <Text style={{textAlign: 'center', fontSize: 20, width: 20}}>
                  ๐ณ
                </Text>
              </View>
              <Text style={{marginLeft: '5%', textAlign: 'center'}}>
                ๊ณ๋ํ๋ผ์ด
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{flexDirection: 'row', left: '8%', marginBottom: 20}}>
                <Text style={{fontWeight: 'bold', fontSize: 16}}>์๋จ๊ธฐ๋ก</Text>
              </View>

              <TouchableOpacity
                onPress={() => props.navigation.navigate('MtoE')}>
                <View style={styles.AddButton}>
                  <Text>+</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.ContainTextAndDot}>
              <View
                style={[styles.dotdot, {backgroundColor: '#7D9E6B'}]}></View>
              <Text style={{marginLeft: 2, fontSize: 13}}> ์์นจ</Text>
              <Text style={styles.TimeText}> 09:00</Text>

              <Text
                onPress={props.handleCheckModal}
                style={{
                  marginLeft: '55%',
                  color: '#E17551',
                  fontWeight: 'bold',
                }}>
                + 30๋ถ
              </Text>
            </View>

            <View style={styles.ContainFull}>
              <View style={styles.ContainImoji}>
                <Text style={{textAlign: 'center', fontSize: 20, width: 20}}>
                  ๐ณ
                </Text>
              </View>
              <Text style={{marginLeft: '5%', textAlign: 'center'}}>
                ๊ณ๋ํ๋ผ์ด
              </Text>
            </View>

            <View style={styles.ContainTextAndDot}>
              <View
                style={[styles.dotdot, {backgroundColor: '#E17551'}]}></View>
              <Text style={{marginLeft: 2, fontSize: 13}}> ์?์ฌ</Text>
              <Text style={styles.TimeText}> 09:00</Text>
              <Text style={styles.minusFont}> - 30๋ถ</Text>
            </View>
            <View style={styles.ContainFull}>
              <View style={styles.ContainImoji}>
                <Text style={{textAlign: 'center', fontSize: 20, width: 20}}>
                  ๐ณ
                </Text>
              </View>
              <Text style={{marginLeft: '5%', textAlign: 'center'}}>
                ๊ณ๋ํ๋ผ์ด
              </Text>
            </View>

            <View style={styles.ContainTextAndDot}>
              <View
                style={[styles.dotdot, {backgroundColor: '#F7BC6E'}]}></View>
              <Text style={{marginLeft: 2, fontSize: 13}}> ์?๋</Text>
              <Text style={styles.TimeText}> 19:00</Text>
              <Text style={styles.minusFont}> - 00๋ถ</Text>
            </View>
            <View style={styles.ContainFull}>
              <View style={styles.ContainImoji}>
                <Text style={{textAlign: 'center', fontSize: 20, width: 20}}>
                  ๐ณ
                </Text>
              </View>

              <Text style={{marginLeft: '5%', textAlign: 'center'}}>
                ๊ณ๋ํ๋ผ์ด
              </Text>
            </View>

            <View style={styles.ContainTextAndDot}>
              <View
                style={[styles.dotdot, {backgroundColor: '#738CC1'}]}></View>
              <Text style={{marginLeft: 2, fontSize: 13}}> ๊ฐ์</Text>
              <Text style={styles.TimeText}> 19:00</Text>
              <Text style={styles.minusFont}> - 00๋ถ</Text>
            </View>
            <View style={styles.ContainFull}>
              <View style={styles.ContainImoji}>
                <Text style={{textAlign: 'center', fontSize: 20, width: 20}}>
                  ๐ณ
                </Text>
              </View>
              <Text style={{marginLeft: '5%', textAlign: 'center'}}>
                ๊ณ๋ํ๋ผ์ด
              </Text>
            </View>
          </ScrollView>
        </View>
      </Modal>
    </GestureRecognizer>
  );
}

const styles = StyleSheet.create({
  FullModalView: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 35,

    ...Platform.select({
      ios: {
        shadowColor: 'rgb(196, 196, 196)',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 1,
      },
      android: {
        elevation: 15,
      },
    }),

    height: 500,
    width: '100%',
  },
  Dateword: {
    left: '5%',
    fontSize: 18,
    marginTop: 20,
    marginBottom: 30,
    fontWeight: 'bold',
  },
  ContainImoji: {
    backgroundColor: '#FBFBFB',
    borderWidth: 1,
    borderColor: '#EBEBEC',
    shadowOffset: {width: 2, height: 2},
    width: 35,
    height: 35,
    // margin: 20,
    shadowColor: 'rgb(196, 196, 196)',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '5%',
  },
  ContainFull: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    width: '80%',
    height: 70,
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 30,
    marginLeft: '10%',
    ...Platform.select({
      ios: {
        shadowColor: 'rgb(196, 196, 196)',
        shadowOpacity: 1,
        shadowOffset: {width: 0, height: 1},
      },
      android: {
        elevation: 1.5,
      },
    }),
  },
  ContainTextAndDot: {
    flexDirection: 'row',
    marginBottom: 30,
    marginTop: 30,
    width: '100%',
    left: 40,
  },
  dotdot: {
    width: 8,
    height: 8,
    marginTop: 4,
    borderRadius: 35,
  },
  minusFont: {
    marginLeft: '55%',
    color: '#738CC1',
    fontWeight: 'bold',
  },
  TimeText: {
    marginLeft: 2,
    color: '#999BA0',
    fontWeight: 'bold',
  },
  AddButton: {
    backgroundColor: '#FBFBFB',
    borderWidth: 1,
    borderColor: '#EBEBEC',

    width: 35,
    height: 35,

    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '80%',

    ...Platform.select({
      ios: {
        shadowColor: 'rgb(196, 196, 196)',
        shadowOffset: {width: 2, height: 2},
        // shadowOpacity: 1,
      },
      android: {
        elevation: 3,
      },
    }),
  },
});

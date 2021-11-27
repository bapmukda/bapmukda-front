import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  TouchableOpacity,
  Image,
  Modal,
  Dimensions,
  PixelRatio,
} from 'react-native';
import moment, {locale} from 'moment';
import 'moment/locale/ko';
import 'moment-timezone';
import Picker from '@gregfrench/react-native-wheel-picker';

import Input_diary from '../input/Input_diary';

var PickerItem = Picker.Item;

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: '#FBFBFB',
    flex: 1, //화면을 차지 하는 비율, 1/1 다른게 3이면 1/4 : 3/4
    // paddingTop: 100,
    alignItems: 'center', //수평정렬
  },
  mainText: {
    fontSize: 20,
    fontWeight: 'normal',
    padding: 20,
  },
  top: {
    // position: "absolute"6,
    backgroundColor: 'red',
    width: '100%',
    height: '5.44%',
    // top: "5.44%",
    justifyContent: 'center',
  },
  diary_Check_box: {
    // backgroundColor:"yellow",
    position: 'absolute',
    width: '5.33%',
    height: '45.45%',
    // left: 355, //"88.27%",
    // marginLeft:"84%",
    right: '4%',
    top: '27.28%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  diary_X: {
    // backgroundColor: 'white',
    left: '6.45%',
    width: '6.45%',
    height: '34.1%',
    // marginLeft: 447,
    position: 'absolute',
    top: '32%',
    justifyContent: 'center',
  },
  diary_Check: {
    // backgroundColor: 'white',
    width: 18, //"6.45%",
    height: 13, //"34.1%",
    // top:"25%",
    justifyContent: 'center',
  },

  toptext: {
    // position: "relative",
    // width: 50,
    // height: 18,
    // left: 165,
    // top: 13,

    /* sub/12/0/reg */

    fontFamily: 'SpoqaHanSansNeo-Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 18,
    /* identical to box height */
    // marginTop: "3%",
    textAlign: 'center',
    // textAlignVertical: "top",
    /* Gray 1 */
    justifyContent: 'center',
    color: '#333333',
  },

  diarydate: {
    backgroundColor: 'white',
    width: '100%',
    height: '8.9%',
    justifyContent: 'center',
    alignItems: 'center',

    fontFamily: 'SpoqaHanSansNeo-Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 18,
    lineHeight: 21,
    /* identical to box height */

    letterSpacing: 0.02,

    /* grey04 */

    color: '#333842',
  },
  diaryemo: {
    backgroundColor: 'white',
    width: '100%',
    height: '10.88%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '1%',
  },
  emo: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 12,
    borderStyle: 'solid',
    borderColor: '#EBEBEC',
  },
  bottomtext: {
    position: 'absolute',
    // width: 50,
    // height: 18,
    // left: 165,
    // top: 13,

    /* sub/12/0/reg */

    fontFamily: 'SpoqaHanSansNeo-Regular',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 21,
    /* identical to box height */
    // marginTop: "3%",
    textAlign: 'center',
    letterSpacing: 0.02,
    // textAlignVertical: "top",
    /* Gray 1 */

    color: '#FFFFFF',
  },
  date_time: {
    backgroundColor: 'purple',
    width: '100%',
    height: '8.9%',
    marginTop: '1%',
    justifyContent: 'center',
    // alignContent:"center",
    alignItems: 'center',

    fontFamily: 'SpoqaHanSansNeo-Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 18,
    lineHeight: 21,
    /* identical to box height */

    letterSpacing: 0.02,

    /* grey04 */

    color: '#333842',
  },
  wrapperVertical: {
    backgroundColor: 'white',
    width: '100%',
    height: '37.08%',
    justifyContent: 'center',
    alignItems: 'center',
    // margin: 'auto',
    color: 'black',
    position: 'relative',
    // marginLeft: Dimensions.get('window').width / 4 ,
    marginTop: Dimensions.get('window').height / 4,
    // boxShadow: "0px 2px 6px rgba(196, 196, 196, 0.2)",
    // borderRadius: 24px 24px 0px 0px;

    shadowColor: 'rgba(196, 196, 196, 0.2)',
    shadowOffset: {width: 0, height: -2},
    shadowRadius: 6, // only IOS
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
  goBack: {
    // backgroundColor:"yellow",
    width: '5.3%',
    height: '45.45%',
    alignSelf: 'center',
    position: 'absolute',
    left: '3%',
  },
  aligntop: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  enter: {
    // backgroundColor:"green",
    width: '5.3%',
    height: '45.45%',
    alignSelf: 'center',
    position: 'absolute',
    right: '3%',
  },
});

export default function Add_diary(props) {
  const [Colr, setColor] = useState('#FFFFFF');
  const [Colr1, setColor1] = useState('#FFFFFF');
  const [Colr2, setColor2] = useState('#FFFFFF');
  const [Colr3, setColor3] = useState('#FFFFFF');
  const [Colr4, setColor4] = useState('#FFFFFF');

  // const [Colr, setColor] = useState('#FFFFFF');
  // const [Colr1, setColor1] = useState('#FFFFFF');
  // const [Colr2, setColor2] = useState('#FFFFFF');
  // const [Colr3, setColor3] = useState('#FFFFFF');
  // const [Colr4, setColor4] = useState('#FFFFFF');

  const [date, setDate] = useState(
    moment()
      .locale('ko')
      .utcOffset(+9),
  );

  const [parentHeight, setParentHeight] = useState(0);
  const onLayout = event => {
    const {height} = event.nativeEvent.layout;
    setParentHeight(height);
  };

  const [a, setA] = useState(
    moment()
      .locale('ko')
      .utcOffset(+9)
      .format('   a     hh:mm'),
  );
  const [item, setItem] = useState(null);
  const [minute, setMinute] = useState(null);
  const [selectedItem, setSelectedItem] = useState(2);
  const [itemList, setItemList] = useState([
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
  ]);
  const [selectedMinute, setSelectedMinute] = useState(2);
  const [minuteList, setMinuteList] = useState([
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
    '25',
    '26',
    '27',
    '28',
    '29',
    '30',
    '31',
    '32',
    '33',
    '34',
    '35',
    '36',
    '37',
    '38',
    '39',
    '40',
    '41',
    '42',
    '43',
    '44',
    '45',
    '46',
    '47',
    '48',
    '49',
    '50',
    '51',
    '52',
    '53',
    '54',
    '55',
    '56',
    '57',
    '58',
    '59',
  ]);
  const [selectedA, setSelectedA] = useState(1);
  const [aList, setAList] = useState(['오전', '오후']);
  const [show, setShow] = useState(false);

  const confirm = () => {
    setShow(false);
    if (
      (selectedItem + 1).toString.length == 1 &&
      Number(selectedItem + 1) < 10
    ) {
      setItem('0' + (selectedItem + 1));
    } else {
      setItem(selectedItem + 1);
    }
    if (selectedA == '0') {
      setA('오전');
    } else {
      setA('오후');
    }
    if (selectedMinute.toString.length == 1 && Number(selectedMinute) < 10) {
      setMinute(':' + '0' + selectedMinute);
    } else {
      setMinute(':' + selectedMinute);
    }
  };

  const _onBigsmile = () => {
    if (Colr === '#FFFFFF') {
      setColor('#E17551');
      setColor1('#FFFFFF');
      setColor2('#FFFFFF');
      setColor3('#FFFFFF');
      setColor4('#FFFFFF');
    } else {
      setColor('#FFFFFF');
    }
  };

  const _onSmile = () => {
    if (Colr1 === '#FFFFFF') {
      setColor('#FFFFFF');
      setColor1('#E17551');
      setColor2('#FFFFFF');
      setColor3('#FFFFFF');
      setColor4('#FFFFFF');
    } else {
      setColor1('#FFFFFF');
    }
  };

  const _onNormal = () => {
    if (Colr2 === '#FFFFFF') {
      setColor('#FFFFFF');
      setColor1('#FFFFFF');
      setColor2('#E17551');
      setColor3('#FFFFFF');
      setColor4('#FFFFFF');
    } else {
      setColor2('#FFFFFF');
    }
  };

  const _onSad = () => {
    if (Colr3 === '#FFFFFF') {
      setColor('#FFFFFF');
      setColor1('#FFFFFF');
      setColor2('#FFFFFF');
      setColor3('#E17551');
      setColor4('#FFFFFF');
    } else {
      setColor3('#FFFFFF');
    }
  };

  const _onBigsad = () => {
    if (Colr4 === '#FFFFFF') {
      setColor('#FFFFFF');
      setColor1('#FFFFFF');
      setColor2('#FFFFFF');
      setColor3('#FFFFFF');
      setColor4('#E17551');
    } else {
      setColor4('#FFFFFF');
    }
  };

  return (
    <View style={styles.mainView}>
      <View style={styles.top}>
        {/* {additionalCnt != 0 && addMode == true ? <View style={styles.addition}>
            <Text>{additionalCnt}</Text>
          </View> : <View></View>} */}
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('MtoE');
          }}
          style={styles.goBack}>
          <View style={styles.aligntop}>
            <Image source={require('../imgs/Vector1.png')} />
          </View>
        </TouchableOpacity>

        <View style={{width: '12%', height: '40.91%', alignSelf: 'center'}}>
          <Text style={styles.toptext}>기분등록</Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('MtoE');
          }}
          style={styles.enter}>
          <View style={styles.aligntop}>
            <Image source={require('../imgs/check.png')} />
          </View>
        </TouchableOpacity>
      </View>

      {/* <View style={styles.diarytop}>

        <View style = {[styles.diary_X]}>  
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Home');
            }}>
            <Image source={require('../imgs/close.png')} />
          </TouchableOpacity>
        </View>

        <Text style={styles.toptext}>기분등록</Text>

        <View style={styles.diary_Check_box}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Details');
            }}>
            <Image
              source={require('../imgs/check.png')}
              style={[styles.diary_Check]}
            />
          </TouchableOpacity>
        </View>
        
      </View> */}



      <TouchableOpacity
        style={[styles.date_time]}
        // activeOpacity={0}
        onPress={() => setShow(true)}>
        <View style={{backgroundColor: 'green', alignSelf: 'center'}}>
          <Text style={{textAlign: 'center'}}>
            {a} {item}
            {minute}
          </Text>
        </View>
        <Modal
          transparent={true}
          animationType="slide"
          visible={show}
          supportedOrientations={['portrait']}
          onRequestClose={() => setShow(false)}>
          <View style={[styles.wrapperVertical, {}]} onLayout={onLayout}>
            <View
              style={{
                width: '69.9%',
                height: '36%',
                flexDirection: 'row',
                backgroundColor: 'white',
                justifyContent: 'center',
              }}>
              <Picker
                style={{
                  flex: 1 / 3,
                  width: '20%',
                  height: parentHeight * 0.36,
                  position: 'absolute',
                  left: 0,
                }} //
                lineColor="#E17551" //to set top and bottom line color (Without gradients)
                lineGradientColorFrom="#E17551" //to set top and bottom starting gradient line color
                lineGradientColorTo="#E17551" //to set top and bottom ending gradient
                selectedValue={selectedA}
                itemSpace={35}
                visibleItemCount={1}
                itemStyle={{
                  color: '#D6D7D9',
                  fontFamily: 'SpoqaHanSansNeo-Regular',
                  fontWeight: 'bold',
                  fontSize: 20,
                  lineHeight: 24,
                }}
                // selectedItemTextColor="black"
                onValueChange={index => setSelectedA(index)}>
                {aList.map((value, i) => (
                  <PickerItem label={value} value={i} key={i} />
                ))}
              </Picker>

              <Picker
                style={{
                  flex: 1 / 3,
                  width: '20%',
                  height: parentHeight * 0.36,
                  position: 'absolute',
                }} //
                lineColor="#E17551" //to set top and bottom line color (Without gradients)
                lineGradientColorFrom="#E17551" //to set top and bottom starting gradient line color
                lineGradientColorTo="#E17551" //to set top and bottom ending gradient
                selectedValue={selectedItem}
                itemSpace={35}
                visibleItemCount={1}
                itemStyle={{
                  color: '#D6D7D9',
                  fontFamily: 'SpoqaHanSansNeo-Regular',
                  fontWeight: 'bold',
                  fontSize: 20,
                  lineHeight: 24,
                }}
                // selectedItemTextColor="black"
                onValueChange={index => setSelectedItem(index)}>
                {itemList.map((value, i) => (
                  <PickerItem label={value} value={i} key={i} />
                ))}
              </Picker>

              <Text
                style={{
                  color: '#333842',
                  fontFamily: 'SpoqaHanSansNeo-Regular',
                  fontWeight: 'bold',
                  fontSize: 20,
                  lineHeight: 24,
                  position: 'absolute',
                  right: '29%',
                  top: '39%',
                }}>
                :
              </Text>
              
              <Picker // 분 선택
                style={{
                  flex: 1 / 3,
                  width: '20%',
                  height: parentHeight * 0.36,
                  position: 'absolute',
                  right: 0,
                }} //
                lineColor="#E17551" //to set top and bottom line color (Without gradients)
                lineGradientColorFrom="#E17551" //to set top and bottom starting gradient line color
                lineGradientColorTo="#E17551" //to set top and bottom ending gradient
                selectedValue={selectedMinute}
                itemSpace={35}
                visibleItemCount={1}
                // isCurved={false}
                itemStyle={{
                  color: '#D6D7D9',
                  fontFamily: 'SpoqaHanSansNeo-Regular',
                  fontWeight: 'bold',
                  fontSize: 20,
                  lineHeight: 24,
                }}
                // selectedItemTextColor="black"
                onValueChange={index => setSelectedMinute(index)}>
                {minuteList.map((value, i) => (
                  <PickerItem label={value} value={i} key={i} />
                ))}
              </Picker>
            </View>

            <View
              style={{
                width: '87.5%',
                height: '18.67%',
                top: '16%',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{width: '48.17%', height: '100%'}}
                onPressOut={() => setShow(false)}>
                <View
                  style={{
                    position: 'absolute',
                    left: 0,
                    justifyContent: 'center',
                    flex: 1,
                    width: '100%',
                    height: '100%',
                    borderWidth: 2,
                    borderColor: '#E17551',
                    borderStyle: 'solid',
                    borderRadius: 10,
                  }}>
                  <Text
                    style={{
                      color: '#E17551',
                      alignSelf: 'center',
                      fontFamily: 'SpoqaHanSansNeo-Regular',
                      fontStyle: 'normal',
                      fontWeight: 'bold',
                      fontSize: 17,
                      lineHeight: 21,
                    }}>
                    취소
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={{width: '48.17%', height: '100%'}}
                onPressOut={() => confirm()}>
                <View
                  style={{
                    backgroundColor: '#E17551',
                    position: 'absolute',
                    left: '7.5%',
                    justifyContent: 'center',
                    flex: 1,
                    width: '100%',
                    height: '100%',
                    borderWidth: 2,
                    borderColor: '#E17551',
                    borderStyle: 'solid',
                    borderRadius: 10,
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      alignSelf: 'center',
                      fontFamily: 'SpoqaHanSansNeo-Regular',
                      fontStyle: 'normal',
                      fontWeight: 'bold',
                      fontSize: 17,
                      lineHeight: 21,
                    }}>
                    완료
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </TouchableOpacity>
      {/* <View style={[styles.diarydate, {top:"-5%"}]}>
          <Text>
            {date.format('YYYY.M.D(dd)')}
          </Text>
      </View> */}

      <View style={[styles.diaryemo, {backgroundColor: 'yellow'}]}>
        <TouchableOpacity
          style={{
            flex: 1,
            width: '14.93%',
            height: '54.55%',
            marginLeft: '6.4%',
            alignSelf: 'center',
          }}
          onPressOut={() => _onBigsmile()}>
          <View style={[styles.emo, {backgroundColor: Colr}]}>
            <Image source={require('../imgs/bigsmile.png')} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flex: 1,
            width: '14.93%',
            height: '54.55%',
            marginLeft: '3.2%',
            alignSelf: 'center',
          }}
          onPressOut={() => _onSmile()}>
          <View style={[styles.emo, {backgroundColor: Colr1}]}>
            <Image source={require('../imgs/smile.png')} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flex: 1,
            width: '14.93%',
            height: '54.55%',
            marginLeft: '3.2%',
            alignSelf: 'center',
          }}
          onPressOut={() => _onNormal()}>
          <View style={[styles.emo, {backgroundColor: Colr2}]}>
            <Image source={require('../imgs/normal.png')} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flex: 1,
            width: '14.93%',
            height: '54.55%',
            marginLeft: '3.2%',
            alignSelf: 'center',
          }}
          onPressOut={() => _onSad()}>
          <View style={[styles.emo, {backgroundColor: Colr3}]}>
            <Image source={require('../imgs/sad.png')} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flex: 1,
            width: '14.93%',
            height: '54.55%',
            marginLeft: '3.2%',
            marginRight: '6.4%',
            alignSelf: 'center',
          }}
          onPressOut={() => _onBigsad()}>
          <View style={[styles.emo, {backgroundColor: Colr4}]}>
            <Image source={require('../imgs/bigsad.png')} />
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: '100%',
          height: '17.06%',
          backgroundColor: 'white',
          marginTop: '3%',
        }}>
        <Input_diary />
      </View>

      <TouchableOpacity
        style={{
          width: '100%',
          height: '8.65%',
          position: 'absolute',
          bottom: 0,
        }}>
        <View
          style={{
            backgroundColor: '#E17551',
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={{width: '14.13%', height: '30%', alignItems: 'center'}}>
            <Text style={styles.bottomtext}>등록하기</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

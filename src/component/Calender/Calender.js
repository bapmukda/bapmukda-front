import React, {useState, useCallback, useRef} from 'react';
import MonthPicker from 'react-native-month-year-picker';
import {
  View,
  Button,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import moment from 'moment';
import {Fonts} from '../../font';
import back from '../imoji/back.png';
import right from '../imoji/right.png';
import Modal from 'react-native-modal';
import close from '../imgs/close.png';
import signin from '../imgs/signin.png';
import Union from '../imoji/Union.png';
import {LocaleConfig} from 'react-native-calendars';
import RegisterModal from './modal/RegisterModal';
import {Modalize} from 'react-native-modalize';
import Swipeable from 'react-native-swipeable-row';
function getFormatDate(date) {
  var year = date.getFullYear(); //yyyy
  var month = 1 + date.getMonth(); //M
  month = month >= 10 ? month : '0' + month; //month 두자리로 저장
  var day = date.getDate(); //d
  day = day >= 10 ? day : '0' + day; //day 두자리로 저장
  return year + '-' + month + '-' + day; //'-' 추가하여 yyyy-mm-dd 형태 생성 가능
}

LocaleConfig.locales['fr'] = {
  monthNames: [
    '1월',
    '2월',
    '3월',
    '4월',
    '4월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ],
  monthNamesShort: [
    '1',
    '2',
    '3',
    '4',
    '4',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
  ],
  dayNames: [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
  ],
  dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
  today: "Aujourd'hui",
};
LocaleConfig.defaultLocale = 'fr';
export default function Calender() {
  // const vacation = {key: 'vacation', color: 'red', selectedDotColor: 'blue'};
  // const massage = {key: 'massage', color: 'blue', selectedDotColor: 'blue'};
  // const workout = {key: 'workout', color: 'green'};
  const today = moment().format('YYYY-MM-DD');
  const [uperDate, setUperDate] = useState(moment().format('YYYY-MM'));
  const [isModalVisible, setModalVisible] = useState(false);
  const [monthModal, setMonthModal] = useState(false);

  const [isDate, setIsDate] = useState('');
  const [isDay, setisDay] = useState('');
  const [isMonth, setIsMonth] = useState('');
  const [registerModal, setregisterModal] = useState(false);
  const [CheckModal, setCheckModal] = useState(false);
  const [Pickdate, setpickDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const [enterModal, setenterModal] = useState(true);

  const onEntermodal = () => {
    setenterModal(!enterModal);
  };

  const modalizeRef = useRef();

  const onOpen = (day, month, dateString) => {
    modalizeRef.current?.open();
    setisDay(day);
    setIsMonth(month);
    var date = new Date(dateString).getDay();
    var todate = week[date];
    setIsDate(todate);
  };

  const showPicker = useCallback(value => setShow(value), []);

  const onValueChange = useCallback(
    (event, newDate) => {
      const selectedDate = newDate || Pickdate;
      showPicker(false);
      setpickDate(selectedDate);
      uperDate === moment(Pickdate, 'YYYY-MM');
    },
    [Pickdate, showPicker],
  );

  var week = new Array(
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
  );

  const handleMonthModal = () => {
    setMonthModal(!isModalVisible);
  };
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const handleregisterModal = () => {
    setregisterModal(!registerModal);
  };
  const handleCheckModal = () => {
    setCheckModal(!CheckModal);
  };
  const sendDate = (day, month, dateString) => {
    setModalVisible(!isModalVisible);
    setisDay(day);
    setIsMonth(month);
    var date = new Date(dateString).getDay();
    var todate = week[date];
    setIsDate(todate);
  };
  const images = {
    union: {
      union: require('../imoji/Union.png'),
    },
  };
  // const [datearray, setdatearray] = useState([today]);
  // for (let i = 0; i < 1; i++) {
  //   setdatearray(datearray.getDay - i);
  // }
  let date = new Date();
  const nextDays = [getFormatDate(date)];
  const wowoo = [];
  const allday = [];
  for (var i = 1; i < 365; i++) {
    wowoo[i] = new Date(date.setDate(date.getDate() - i));
    wowoo[i] = getFormatDate(date);
    date = new Date();
  }

  let newDaysObject = {};

  nextDays.forEach(day => {
    newDaysObject[day] = {
      dots: [
        {key: '1', color: 'rgba(214, 215, 217, 1)'},
        {key: '2', color: 'rgba(214, 215, 217, 1)'},
        {key: '3', color: 'rgba(214, 215, 217, 1)'},
        {key: '4', color: 'rgba(214, 215, 217, 1)'},
      ],
      selected: true,
      selectedColor: '#111',
    };
  });
  wowoo.forEach(day => {
    newDaysObject[day] = {
      dots: [
        {key: '1', color: 'rgba(214, 215, 217, 1)'},
        {key: '2', color: 'rgba(214, 215, 217, 1)'},
        {key: '3', color: 'rgba(214, 215, 217, 1)'},
        {key: '4', color: 'rgba(214, 215, 217, 1)'},
      ],
    };
  });

  return (
    <View style={{}}>
      <Modal isVisible={enterModal}>
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
          <TouchableOpacity onPress={onEntermodal}>
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
          <TouchableOpacity onPress={onEntermodal}>
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
      <TouchableOpacity
        style={{
          backgroundColor: 'white',
          alignItems: 'flex-start',
          flexDirection: 'row',
          paddingLeft: 15,
        }}
        onPress={() => showPicker(true)}>
        <Text
          style={{
            fontSize: 20,
            color: 'rgba(51, 56, 66, 1)',
            marginLeft: 20,
            marginTop: 20,
            fontWeight: 'bold',
          }}>
          {moment(Pickdate).format('YYYY년MM월')}
        </Text>
        <Image
          source={back}
          style={{marginTop: 30, marginLeft: 8, width: 10}}
        />
      </TouchableOpacity>
      {show && (
        <MonthPicker
          onChange={onValueChange}
          value={Pickdate}
          minimumDate={new Date(2020, 8)}
          maximumDate={new Date(2022, 5)}
          locale="ko"
        />
      )}

      <View style={{height: 450}}>
        <CalendarList
          current={Pickdate}
          onVisibleMonthsChange={months => {
            console.log('now these months are visibl', months);
          }}
          style={{height: 400}}
          monthFormat={''}
          // horizontal={true}
          // Max amount of months allowed to scroll to the past. Default = 50
          scrollEnabled={true}
          // Enable or disable vertical scroll indicator. Default = false
          theme={{
            'stylesheet.day.basic': {
              dayTextAtIndex0: {
                color: 'red',
              },
              dayTextAtIndex6: {
                color: 'blue',
              },
            },

            todayTextColor: 'white',
          }}
          showScrollIndicator={true}
          markingType={'multi-dot'}
          maxDate={new Date()}
          markedDates={newDaysObject}
          onDayPress={({day, month, dateString}) =>
            onOpen(day, month, dateString)
          }
          locale="ko"
        />
      </View>
      <View style={{alignItems: 'center', top: 90}}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button}
          onPress={handleregisterModal}>
          <Text style={styles.text}>오늘</Text>
          <Image source={right} />
        </TouchableOpacity>
      </View>

      <Modalize
        ref={modalizeRef}
        isVisible={isModalVisible}
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
            {isMonth}월 {isDay}일 {isDate}
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
            <View
              style={{flexDirection: 'row', left: '-33%', marginBottom: 20}}>
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
              <Text onPress={handleCheckModal}>+</Text>
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
              onPress={handleCheckModal}
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

          <Button title="Hide modal" onPress={toggleModal} />
        </View>
      </Modalize>
      {/* 확인 피커 */}
      <Modal isVisible={CheckModal} style={{alignItems: 'center'}}>
        <View
          style={{
            backgroundColor: 'white',
            width: 300,
            height: 300,
            borderRadius: 16,
          }}>
          <TouchableOpacity onPress={handleCheckModal}>
            <Text style={{textAlign: 'center', fontSize: 18, top: 40}}>
              식사시간
            </Text>
          </TouchableOpacity>
          <Text style={{top: 80, textAlign: 'center'}}>
            어제 기준 오늘의 식사 시간입니다.
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center', left: 50}}>
            <Text style={{top: 120, fontSize: 16, color: '#E17551'}}>
              +30분
            </Text>
            <Text style={{top: 120, marginLeft: 10, color: '#999BA0'}}>
              어제보다 30분 늦은 식사
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', left: 50}}>
            <Text style={{top: 130, fontSize: 16, color: '#738CC1'}}>
              - 30분
            </Text>
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
            onPress={handleCheckModal}>
            <Text
              style={{color: 'white', textAlign: 'center', fontWeight: 'bold'}}>
              닫기
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
      {/* registerModal */}
      <Modal
        isVisible={registerModal}
        style={{
          justifyContent: 'flex-end',
          margin: 0,
        }}
        animationType="none"
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
            top: '40%',
            justifyContent: 'space-around',
            height: '50%',
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
      <Agenda />
    </View>
  );
}

const styles = StyleSheet.create({
  modalStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  button: {
    width: 70,
    height: 40,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    flexDirection: 'row',
  },
  text: {
    color: '#999BA0',
  },
});

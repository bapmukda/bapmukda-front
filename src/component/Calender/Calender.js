import React, {useState, useCallback} from 'react';
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
} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import moment from 'moment';
import union from '../imoji/Union.png';
import back from '../imoji/back.png';
import right from '../imoji/right.png';
import Modal from 'react-native-modal';
import close from '../imgs/close.png';
import signin from '../imgs/signin.png';
import {LocaleConfig} from 'react-native-calendars';
import RegisterModal from './modal/RegisterModal';

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
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre',
  ],
  monthNamesShort: [
    'Janv.',
    'Févr.',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juil.',
    'Août',
    'Sept.',
    'Oct.',
    'Nov.',
    'Déc.',
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
  const [Pickdate, setpickDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const [enterModal, setenterModal] = useState(true);

  const onEntermodal = () => {
    setenterModal(!enterModal);
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
          maximumDate={new Date(2025, 5)}
          locale="ko"
        />
      )}

      <View style={{height: 400}}>
        <CalendarList
          current={Pickdate}
          onVisibleMonthsChange={months => {
            console.log('now these months are visibl', months);
          }}
          monthFormat={''}
          horizontal={true}
          calendarHeight={350}
          // Max amount of months allowed to scroll to the past. Default = 50

          scrollEnabled={true}
          // Enable or disable vertical scroll indicator. Default = false
          theme={{
            todayTextColor: 'white',
          }}
          showScrollIndicator={true}
          markingType={'multi-dot'}
          maxDate={new Date()}
          markedDates={newDaysObject}
          onDayPress={({day, month, dateString}) =>
            sendDate(day, month, dateString)
          }
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

      <Modal
        isVisible={isModalVisible}
        style={{
          justifyContent: 'flex-end',
          margin: 0,
        }}
        swipeDirection={['down']}
        transparent={true}
        coverScreen={false}
        backdropColor="rgba(r,g,b,a)"
        backdropOpacity={1}
        onBackdropPress={toggleModal}
        borderRadius={10}>
        <View
          style={{
            flex: 0.5,
            backgroundColor: 'white',
            top: '50%',
            justifyContent: 'space-around',
            alignItems: 'center',
            height: '50%',
            borderRadius: 10,
            shadowColor: 'rgb(196, 196, 196)',
            shadowOffset: {width: 0, height: 1},
            shadowOpacity: 1,
          }}>
          <Text style={{left: '-30%', fontSize: 20}}>
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
              height: '40%',
              shadowColor: 'rgb(196, 196, 196)',
              alignItems: 'center',
              borderRadius: 10,
            }}>
            <View
              style={{
                backgroundColor: '#FBFBFB',
                shadowOpacity: 1,
                shadowOffset: {width: 2, height: 2},
                width: '15%',
                height: '70%',
                margin: 20,
                shadowColor: 'rgb(196, 196, 196)',
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{textAlign: 'center', fontSize: 20}}>🍳</Text>
            </View>
            <Text style={{textAlign: 'center'}}>계란후라이</Text>
          </View>
          <Button title="Hide modal" onPress={toggleModal} />
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

import React, {useState, useCallback, useRef} from 'react';

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
import back from '../imoji/back.png';
import right from '../imoji/right.png';
import {LocaleConfig} from 'react-native-calendars';
import RegisterModal from './modal/RegisterModal';
import CheckModal from './modal/CheckModal';
import DayModal from './modal/DayModal';
import LoginModal from './modal/LoginModal';
import MonthPicker from './modal/MonthPicker';
function getFormatDate(date) {
  var year = date.getFullYear(); //yyyy
  var month = 1 + date.getMonth(); //M
  month = month >= 10 ? month : '0' + month; //month 두자리로 저장
  var day = date.getDate(); //d
  day = day >= 10 ? day : '0' + day; //day 두자리로 저장
  return year + '-' + month + '-' + day; //'-' 추가하여 yyyy-mm-dd 형태 생성 가능
}

LocaleConfig.locales['ko'] = {
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
LocaleConfig.defaultLocale = 'ko';
export default function Calender() {
  const today = moment().format('YYYY-MM-DD');
  const [uperDate, setUperDate] = useState(moment().format('YYYY-MM'));
  const [isModalVisible, setModalVisible] = useState(false);
  const [isDate, setIsDate] = useState('');
  const [isDay, setisDay] = useState('');
  const [isMonth, setIsMonth] = useState('');
  const [registerModal, setregisterModal] = useState(false);
  const [isCheckModal, setisCheckModal] = useState(false);
  const [Pickdate, setpickDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [isMonthPicker, setisMonthPicker] = useState(false);
  const [enterModal, setenterModal] = useState(true);

  const handleMothpicker = () => {
    setisMonthPicker(!isMonthPicker);
  };
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

  const handleregisterModal = () => {
    setregisterModal(!registerModal);
  };
  const handleCheckModal = () => {
    setisCheckModal(!isCheckModal);
  };

  let date = new Date();
  const nextDays = [getFormatDate(date)];

  const allday = [];
  for (var i = 1; i < 365; i++) {
    allday[i] = new Date(date.setDate(date.getDate() - i));
    allday[i] = getFormatDate(date);
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
  allday.forEach(day => {
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
      {/* 첫 입장 모달 */}
      <LoginModal enterModal={enterModal} onEntermodal={onEntermodal} />

      <TouchableOpacity
        style={{
          backgroundColor: 'white',
          alignItems: 'flex-start',
          flexDirection: 'row',
          paddingLeft: 15,
        }}
        // onPress={() => showPicker(true)}>
        onPress={handleMothpicker}>
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

      <MonthPicker
        handleMothpicker={handleMothpicker}
        isMonthPicker={isMonthPicker}
      />
      {/* {show && (
        <MonthPicker
          onChange={onValueChange}
          value={Pickdate}
          minimumDate={new Date(2020, 8)}
          maximumDate={new Date(2022, 5)}
          locale="ko"
        />
      )} */}

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
          scrollEnabled={false}
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

      {/* 오늘 버튼 */}
      <View style={{alignItems: 'center', top: 90}}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button}
          onPress={handleregisterModal}>
          <Text style={styles.text}>오늘</Text>
          <Image source={right} />
        </TouchableOpacity>
      </View>
      <DayModal
        modalizeRef={modalizeRef}
        isModalVisible={isModalVisible}
        isMonth={isMonth}
        isDate={isDate}
        isDay={isDay}
        handleCheckModal={handleCheckModal}
      />

      {/* 확인 피커 */}
      <CheckModal
        isCheckModal={isCheckModal}
        handleCheckModal={handleCheckModal}
      />
      {/* registerModal */}
      <RegisterModal
        registerModal={registerModal}
        handleregisterModal={handleregisterModal}
      />
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

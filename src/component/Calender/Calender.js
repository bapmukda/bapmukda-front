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
import tololgin from '../imgs/tologin.png';
import {LocaleConfig} from 'react-native-calendars';
import RegisterModal from './modal/RegisterModal';
import CheckModal from './modal/CheckModal';
import DayModal from './modal/DayModal';
import LoginModal from './modal/LoginModal';
import MonthPicker from './modal/MonthPicker';
import DaymodlaDumData from './modal/DayModaldumdata';
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
export default function Calender(props) {
  const today = moment().format('YYYY-MM-DD');
  const [uperDate, setUperDate] = useState(moment().format('YYYY-MM'));
  const [isDate, setIsDate] = useState('');
  const [isDay, setisDay] = useState('');
  const [isMonth, setIsMonth] = useState('');
  const [registerModal, setregisterModal] = useState(false);
  const [isCheckModal, setisCheckModal] = useState(false);
  const [curDate, setCurDate] = useState('');
  const [show, setShow] = useState(false);
  const [isMonthPicker, setisMonthPicker] = useState(false);
  const [enterModal, setenterModal] = useState(true);
  const [selectedMonth, setSelectedMonth] = useState(8);
  const [selectedYear, setSelectedYear] = useState(2);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [ind, setind] = useState(0);
  const [year, setYear] = useState(
    moment()
      .locale('ko')
      .utcOffset(+9)
      .format('YYYY년 MM월'),
  );
  const [month, setMonth] = useState('');

  const handleMothpicker = () => {
    setisMonthPicker(!isMonthPicker);
  };
  const onEntermodal = () => {
    setenterModal(!enterModal);
  };

  const modalizeRef = useRef();

  const onOpen = (day, month, dateString) => {
    // modalizeRef.current?.open();
    setIsModalVisible(!isModalVisible);
    setisDay(day);
    setIsMonth(month);
    var date = new Date(dateString).getDay();
    var todate = week[date];
    setIsDate(todate);
  };

  const todayOpen = () => {
    var D = new Date();
    setIsModalVisible(!isModalVisible);
    setisDay(D.getDate());
    setIsMonth(D.getMonth() + 1);
    var date = D.getDay();
    var todate = week[date];
    setIsDate(todate);
  };

  const showPicker = useCallback(value => setShow(value), []);

  // const onValueChange = useCallback(
  //   (event, newDate) => {
  //     const selectedDate = newDate || Pickdate;
  //     showPicker(false);
  //     setpickDate(selectedDate);
  //     uperDate === moment(Pickdate, 'YYYY-MM');
  //   },
  //   [Pickdate, showPicker],
  // );

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
  DaymodlaDumData.map(id => {
    let dum = new Date();
    const dumtoday = [getFormatDate(dum)];
    if (id.date == dumtoday) {
      newDaysObject[id.date] = {
        dots: [
          id.MoMeun === ''
            ? {key: '1', color: 'rgba(214, 215, 217, 1)'}
            : {key: '1', color: '#7D9E6B'},
          id.LuMeun === ''
            ? {key: '2', color: 'rgba(214, 215, 217, 1)'}
            : {key: '2', color: '#E17551'},
          ,
          id.DiMeun === ''
            ? {key: '3', color: 'rgba(214, 215, 217, 1)'}
            : {key: '3', color: '#F7BC6E'},
          ,
          id.SnMeun === ''
            ? {key: '4', color: 'rgba(214, 215, 217, 1)'}
            : {key: '4', color: '#738CC1'},
          ,
        ],
        selected: true,
        selectedColor: '#111',
      };
    } else {
      newDaysObject[id.date] = {
        dots: [
          id.MoMeun === ''
            ? {key: '1', color: 'rgba(214, 215, 217, 1)'}
            : {key: '1', color: '#7D9E6B'},
          id.LuMeun === ''
            ? {key: '2', color: 'rgba(214, 215, 217, 1)'}
            : {key: '2', color: '#E17551'},
          ,
          id.DiMeun === ''
            ? {key: '3', color: 'rgba(214, 215, 217, 1)'}
            : {key: '3', color: '#F7BC6E'},
          ,
          id.SnMeun === ''
            ? {key: '4', color: 'rgba(214, 215, 217, 1)'}
            : {key: '4', color: '#738CC1'},
          ,
        ],
      };
    }
  });

  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <View
        style={{
          backgroundColor: 'white',
          height: 50,
          width: '100%',
          marginTop: 50,
        }}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Login');
          }}>
          <Image
            source={tololgin}
            style={{position: 'absolute', top: 30, left: 30}}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleregisterModal}>
          <Text
            style={{position: 'absolute', top: 30, right: 30, fontSize: 20}}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      {/* 첫 입장 모달 */}
      <LoginModal
        enterModal={enterModal}
        onEntermodal={onEntermodal}
        navigation={props.navigation}
      />

      <MonthPicker
        handleMothpicker={handleMothpicker}
        isMonthPicker={isMonthPicker}
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
        year={year}
        setYear={setYear}
        month={month}
        setMonth={setMonth}
        curDate={curDate}
        setCurDate={setCurDate}
        setind={setind}
      />

      <View style={{height: 450}}>
        {ind === 0 ? (
          <CalendarList
            current={new Date()}
            onVisibleMonthsChange={months => {
              console.log('now these months are visibl', months);
            }}
            style={{height: 400}}
            monthFormat={''}
            scrollEnabled={false}
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
        ) : (
          <CalendarList
            current={curDate}
            onVisibleMonthsChange={months => {
              console.log('now these months are visibl', months);
            }}
            style={{height: 400}}
            monthFormat={''}
            scrollEnabled={false}
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
        )}
      </View>

      {/* 오늘 버튼 */}
      <View style={{alignItems: 'center', top: 90}}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button}
          onPress={() => todayOpen()}>
          <Text style={styles.text}>오늘</Text>
          <Image source={right} />
        </TouchableOpacity>
      </View>
      <DayModal
        modalizeRef={modalizeRef}
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        isMonth={isMonth}
        isDate={isDate}
        isDay={isDay}
        handleCheckModal={handleCheckModal}
        navigation={props.navigation}
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
        navigation={props.navigation}
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
    shadowColor: '#000000',
    shadowOffset: {width: 0.3, height: 0.3},
    shadowOpacity: 0.5,
    shadowRadius: 1,
  },
  text: {
    color: '#999BA0',
  },
});

import 'react-native-gesture-handler';
import React, {useState, useRef} from 'react';
import {
  Dimensions,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  TouchableOpacity,
  Image,
  PixelRatio,
  Modal,
  TouchableHighlight,
} from 'react-native';
import moment, {locale} from 'moment';
import 'moment/locale/ko';
import Picker from '@gregfrench/react-native-wheel-picker';

import axios from 'axios';
import {response} from 'express';
import {anything} from 'expect';

var PickerItem = Picker.Item;

// state = {open: false};
const styles = StyleSheet.create({
  mainView: {
    backgroundColor: '#FBFBFB',
    flex: 1, //화면을 차지 하는 비율, 1/1 다른게 3이면 1/4 : 3/4
    // paddingTop: 100,
    alignItems: 'center', //수평정렬
  },
  top: {
    // position: "absolute"6,
    backgroundColor: 'red',
    width: '100%',
    height: '5.44%',
    // top: "5.44%",
    justifyContent: 'center',
  },
  addition: {
    position: 'absolute',
    width: '6.4%',
    height: '54.5%',
    backgroundColor: '#E17551',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    left: '4%',
    textAlign: 'center',
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
  diary_Check: {
    // backgroundColor: 'white',
    width: 18, //"6.45%",
    height: 13, //"34.1%",
    // top:"25%",
    justifyContent: 'center',
  },
  toptext: {
    position: 'relative',
    // width: 50,
    // height: 18,
    // left: 165,
    // top: 13,

    /* sub/12/0/reg */

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
  dining_type: {
    width: '100%',
    height: '6.92%',
    backgroundColor: 'green',
    marginTop: '1%',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    // position:"absolute",
  },
  dining_box: {
    flex: 1,
    width: '17.1%',
    height: '71.43%',

    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 21,
    /* identical to box height */
    textAlign: 'center',
    letterSpacing: 0.02,
    justifyContent: 'center',
    // backgroundColor:"purple",
    alignItems: 'center',
  },
  date_time: {
    backgroundColor: 'purple',
    width: '100%',
    height: '8.9%',
    marginTop: '1%',
    justifyContent: 'center',
    alignItems: 'center',

    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 18,
    lineHeight: 21,
    /* identical to box height */

    letterSpacing: 0.02,

    /* grey04 */

    color: '#333842',
  },
  foodselect: {
    width: '100%',
    height: '12.86%',
    backgroundColor: 'white',
    marginTop: '1%',
    justifyContent: 'center',
    alignItems: 'center',

    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 18,
    lineHeight: 21,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    /* identical to box height */

    letterSpacing: 0.02,

    /* grey04 */

    color: '#999BA0',
  },
  bottomtext: {
    position: 'absolute',
    // width: 50,
    // height: 18,
    // left: 165,
    // top: 13,

    /* sub/12/0/reg */

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

  container: {
    paddingTop: 60,
    paddingBottom: 30,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
  OptionWrapper: {
    // justifyContent: 'center',
    // alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 50,
    borderWidth: 3,
    borderRadius: 10,
  },
  Foodpicker: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Foodicon: {
    borderWidth: 2,
    borderRadius: 12,
    borderColor: '#FBFBFB',
    borderStyle: 'solid',
    width: '12.8%',
    height: '46.15%',
    backgroundColor: '#EBEBEC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  enterfood: {
    display: 'flex',

    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 21,
    alignItems: 'center',
    textAlign: 'center',
    letterSpacing: 0.02,
    color: '#999BA0',
  },
  registerModalTop: {
    width: '100%',
    height: '22%',
    position: 'absolute',
    top: 0,
    justifyContent: 'center',
    alignContent: 'center',
    // backgroundColor:"green"
  },
  registerText: {
    width: '23.47%',
    height: '36.37%',
    // alignSelf:"center",
    // position:"absolute",
    left: '3%',
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',

    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 24,
    // backgroundColor:"green"
  },
  registerModalClose: {
    width: '4.8%',
    height: '36.37%',
    alignSelf: 'center',
    position: 'absolute',
    right: '3%',
    // backgroundColor:"green"
  },
  aligntop: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  registerModalMiddleText: {
    width: '23.47%',
    height: '7%',
    justifyContent: 'center',
    alignContent: 'center',
    position: 'absolute',
    left: '3%',
    top: '27.33%',
    flexDirection: 'row',
    backgroundColor: 'red',
  },
  registerModalFood: {
    width: '87.2%',
    height: '24%',
    shadowColor: 'rgba(196, 196, 196, 0.2)',
    shadowOffset: {width: 0, height: 2, top: 1, bottom: 6},
    shadowRadius: 6,
    borderRadius: 12,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'absolute',
  },
  registerModalFoodIcon: {
    borderWidth: 1,
    borderRadius: 18,
    borderColor: '#FBFBFB',
    borderStyle: 'solid',
    width: '14.67%',
    height: '66.68%',
    backgroundColor: '#EBEBEC',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
    left: '4.9%',
  },
  registerModalTrashIcon: {
    width: '8.56%',
    height: '38.9%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
    right: '8.38%', //76.57
  },
});

export default function MtoE(props) {
  const [addMode, setAddMode] = useState(false);
  const [additionalCnt, setAdditionalCnt] = useState(0);
  const [colorChoice, setColorChoice] = useState('#E17551');
  const [colorChoiceText, setColorChoiceText] = useState('white');

  const [disable, setDisable] = useState(false);
  const [parentHeight, setParentHeight] = useState(0);
  const onLayout = event => {
    const {height} = event.nativeEvent.layout;
    setParentHeight(height);
  };
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

  const [selectedYear, setSelectedYear] = useState(0);
  const [yearList, setYearList] = useState([
    '2019년',
    '2020년',
    '2021년',
    '2022년',
  ]);
  const [selectedMonth, setSelectedMonth] = useState(0);
  const [monthList, setMonthList] = useState([
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ]);
  const [selectedDate, setSelectedDate] = useState(1);
  const [dateList31, setDateList31] = useState([
    '1일',
    '2일',
    '3일',
    '4일',
    '5일',
    '6일',
    '7일',
    '8일',
    '9일',
    '10일',
    '11일',
    '12일',
    '13일',
    '14일',
    '15일',
    '16일',
    '17일',
    '18일',
    '19일',
    '20일',
    '21일',
    '22일',
    '23일',
    '24일',
    '25일',
    '26일',
    '27일',
    '28일',
    '29일',
    '30일',
    '31일',
  ]);

  const [isleaf, setIsLeaf] = useState(false);

  // For time picker
  const [a, setA] = useState(
    moment()
      .locale('ko')
      .utcOffset(+9)
      .format('   a     hh:mm'),
  );

  const [item, setItem] = useState(null);
  const [minute, setMinute] = useState(null);

  //For date picker
  const [year, setYear] = useState(
    moment()
      .locale('ko')
      .utcOffset(+9)
      .format('YYYY.MM.DD (dd)'),
  );
  const [month, setMonth] = useState('');
  const [date_, setDate_] = useState('');

  const [Colr, setColor] = useState('#FFFFFF');
  const [Colr1, setColor1] = useState('#FFFFFF');
  const [Colr2, setColor2] = useState('#FFFFFF');
  const [Colr3, setColor3] = useState('#FFFFFF');

  const [showRegister, setShowRegister] = useState(false);

  const leaf = () => {
    if (
      Number(yearList[selectedYear].slice(0, -1)) % 4 == 0 &&
      Number(yearList[selectedYear].slice(0, -1)) % 100 != 0 &&
      Number(yearList[selectedYear].slice(0, -1)) % 400 == 0
    ) {
      setIsLeaf(true);
    } else {
      setIsLeaf(false);
    }
  };

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
  
  const changeYear = index => {
    setSelectedYear(index);
    if (
      Number(yearList[index].slice(0, -1)) >
        Number(
          moment()
            .locale('ko')
            .utcOffset(+9)
            .format('YYYY'),
        ) ||
      (Number(yearList[index].slice(0, -1)) ==
        Number(
          moment()
            .locale('ko')
            .utcOffset(+9)
            .format('YYYY'),
        ) &&
        Number(monthList[selectedMonth].slice(0, -1)) >
          Number(
            moment()
              .locale('ko')
              .utcOffset(+9)
              .format('MM'),
          )) ||
      (Number(yearList[index].slice(0, -1)) ==
        Number(
          moment()
            .locale('ko')
            .utcOffset(+9)
            .format('YYYY'),
        ) &&
        Number(monthList[selectedMonth].slice(0, -1)) ==
          Number(
            moment()
              .locale('ko')
              .utcOffset(+9)
              .format('MM'),
          ) &&
        Number(dateList31[selectedDate].slice(0, -1)) >
          Number(
            moment()
              .locale('ko')
              .utcOffset(+9)
              .format('DD'),
          ))
    ) {
      setColorChoice('#EBEBEC');
      setColorChoiceText('#D6D7D9');
      setDisable(true);
    } else {
      setColorChoice('#E17551');
      setColorChoiceText('white');
      setDisable(false);
    }
  };
  
  const changeMonth = index => {
    setSelectedMonth(index);
    leaf();

    if (isleaf) {
      if (
        (Number(monthList[index].slice(0, -1)) % 2 == 1 &&
          Number(monthList[index].slice(0, -1)) < 8) ||
        (Number(monthList[index].slice(0, -1)) % 2 == 0 &&
          Number(monthList[index].slice(0, -1)) > 7)
      ) {
        // 31일 까지 있는 달
        setDateList31([
          '1일',
          '2일',
          '3일',
          '4일',
          '5일',
          '6일',
          '7일',
          '8일',
          '9일',
          '10일',
          '11일',
          '12일',
          '13일',
          '14일',
          '15일',
          '16일',
          '17일',
          '18일',
          '19일',
          '20일',
          '21일',
          '22일',
          '23일',
          '24일',
          '25일',
          '26일',
          '27일',
          '28일',
          '29일',
          '30일',
          '31일',
        ]);
      } else if (Number(monthList[index].slice(0, -1)) == 2) {
        setDateList31([
          '1일',
          '2일',
          '3일',
          '4일',
          '5일',
          '6일',
          '7일',
          '8일',
          '9일',
          '10일',
          '11일',
          '12일',
          '13일',
          '14일',
          '15일',
          '16일',
          '17일',
          '18일',
          '19일',
          '20일',
          '21일',
          '22일',
          '23일',
          '24일',
          '25일',
          '26일',
          '27일',
          '28일',
          '29일',
        ]);
      } else {
        setDateList31([
          '1일',
          '2일',
          '3일',
          '4일',
          '5일',
          '6일',
          '7일',
          '8일',
          '9일',
          '10일',
          '11일',
          '12일',
          '13일',
          '14일',
          '15일',
          '16일',
          '17일',
          '18일',
          '19일',
          '20일',
          '21일',
          '22일',
          '23일',
          '24일',
          '25일',
          '26일',
          '27일',
          '28일',
          '29일',
          '30일',
        ]);
      }
    } else {
      // console.log(index);
      if (
        (Number(monthList[index].slice(0, -1)) % 2 == 1 &&
          Number(monthList[index].slice(0, -1)) < 8) ||
        (Number(monthList[index].slice(0, -1)) % 2 == 0 &&
          Number(monthList[index].slice(0, -1)) > 7)
      ) {
        // 31일 까지 있는 달
        setDateList31([
          '1일',
          '2일',
          '3일',
          '4일',
          '5일',
          '6일',
          '7일',
          '8일',
          '9일',
          '10일',
          '11일',
          '12일',
          '13일',
          '14일',
          '15일',
          '16일',
          '17일',
          '18일',
          '19일',
          '20일',
          '21일',
          '22일',
          '23일',
          '24일',
          '25일',
          '26일',
          '27일',
          '28일',
          '29일',
          '30일',
          '31일',
        ]);
        // console.log("31일 까지 있는 달입니다."+dateList31+monthList[index].slice(0,-1) )
      } else if (Number(monthList[index].slice(0, -1)) == 2) {
        setDateList31([
          '1일',
          '2일',
          '3일',
          '4일',
          '5일',
          '6일',
          '7일',
          '8일',
          '9일',
          '10일',
          '11일',
          '12일',
          '13일',
          '14일',
          '15일',
          '16일',
          '17일',
          '18일',
          '19일',
          '20일',
          '21일',
          '22일',
          '23일',
          '24일',
          '25일',
          '26일',
          '27일',
          '28일',
        ]);
        // console.log("29일 까지 있는 달입니다."+dateList31+monthList[index].slice(0,-1) )
      } else {
        setDateList31([
          '1일',
          '2일',
          '3일',
          '4일',
          '5일',
          '6일',
          '7일',
          '8일',
          '9일',
          '10일',
          '11일',
          '12일',
          '13일',
          '14일',
          '15일',
          '16일',
          '17일',
          '18일',
          '19일',
          '20일',
          '21일',
          '22일',
          '23일',
          '24일',
          '25일',
          '26일',
          '27일',
          '28일',
          '29일',
          '30일',
        ]);
        // console.log("30일 까지 있는 달입니다."+dateList31+monthList[index].slice(0,-1) )
      }
    }

    if (
      Number(yearList[selectedYear].slice(0, -1)) >
        Number(
          moment()
            .locale('ko')
            .utcOffset(+9)
            .format('YYYY'),
        ) ||
      (Number(yearList[selectedYear].slice(0, -1)) ==
        Number(
          moment()
            .locale('ko')
            .utcOffset(+9)
            .format('YYYY'),
        ) &&
        Number(monthList[index].slice(0, -1)) >
          Number(
            moment()
              .locale('ko')
              .utcOffset(+9)
              .format('MM'),
          )) ||
      (Number(yearList[selectedYear].slice(0, -1)) ==
        Number(
          moment()
            .locale('ko')
            .utcOffset(+9)
            .format('YYYY'),
        ) &&
        Number(monthList[index].slice(0, -1)) ==
          Number(
            moment()
              .locale('ko')
              .utcOffset(+9)
              .format('MM'),
          ) &&
        Number(dateList31[selectedDate].slice(0, -1)) >
          Number(
            moment()
              .locale('ko')
              .utcOffset(+9)
              .format('DD'),
          ))
    ) {
      setColorChoice('#EBEBEC');
      setColorChoiceText('#D6D7D9');
      setDisable(true);
    } else {
      setColorChoice('#E17551');
      setColorChoiceText('white');
      setDisable(false);
    }
  };
  const changeDate = index => {
    setSelectedDate(index);
    if (
      Number(yearList[selectedYear].slice(0, -1)) >
        Number(
          moment()
            .locale('ko')
            .utcOffset(+9)
            .format('YYYY'),
        ) ||
      (Number(yearList[selectedYear].slice(0, -1)) ==
        Number(
          moment()
            .locale('ko')
            .utcOffset(+9)
            .format('YYYY'),
        ) &&
        Number(monthList[selectedMonth].slice(0, -1)) >
          Number(
            moment()
              .locale('ko')
              .utcOffset(+9)
              .format('MM'),
          )) ||
      (Number(yearList[selectedYear].slice(0, -1)) ==
        Number(
          moment()
            .locale('ko')
            .utcOffset(+9)
            .format('YYYY'),
        ) &&
        Number(monthList[selectedMonth].slice(0, -1)) ==
          Number(
            moment()
              .locale('ko')
              .utcOffset(+9)
              .format('MM'),
          ) &&
        Number(dateList31[index].slice(0, -1)) >
          Number(
            moment()
              .locale('ko')
              .utcOffset(+9)
              .format('DD'),
          ))
    ) {
      setColorChoice('#EBEBEC');
      setColorChoiceText('#D6D7D9');
      setDisable(true);
    } else {
      setColorChoice('#E17551');
      setColorChoiceText('white');
      setDisable(false);
    }
  };
  const comeBack = index => {
    // selectedDate //이게 이전값
    console.log('Before' + selectedDate);
    if (
      Number(dateList31[index].slice(0, -1)) >
      Number(
        moment()
          .locale('ko')
          .utcOffset(+9)
          .format('DD'),
      )
    ) {
      console.log(Number(dateList31[index].slice(0, -1)));
      console.log(
        Number(
          moment()
            .locale('ko')
            .utcOffset(+9)
            .format('DD'),
        ),
      );
      setSelectedDate(selectedDate);
      console.log('After' + selectedDate);
    } else {
      setSelectedDate(index);
    }
  };

  const confirmDate = () => {
    setShowDate(false);
    setYear(yearList[selectedYear]);
    setMonth(monthList[selectedMonth]);
    setDate_(dateList31[selectedDate]);
  };

  const [show, setShow] = useState(false);
  const [showDate, setShowDate] = useState(false);

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

  const overDate = () => {
    if (
      Number(year) >
      Number(
        moment()
          .locale('ko')
          .utcOffset(+9)
          .format('YYYY'),
      )
    ) {
      console.log('띠리띠띠');
      setDisable(true);
      return '#E17551';
    } else {
      setDisable(false);
      return '#EBEBEC';
    }
  };

  const addtionalRegister = () => {
    setShowRegister(false);
    setAdditionalCnt(additionalCnt + 1);
    setAddMode(true);
  };

  const getDailyMealHistory = () => {
    try {
      axios
        .get(
          'http://ec2-54-180-32-86.ap-northeast-2.compute.amazonaws.com:8080/swagger-ui.html#/meal-controller/getDailyMealHistoryUsingGET',
        )
        .then(response => {
          console.log(response.data);
        })
        .catch(err => console.log(err));
    } catch (error) {
      console.log('Fetch Error:', error);
    }
  };

  return (
    <View style={styles.mainView}>
      <View style={styles.top}>
        {additionalCnt != 0 && addMode == true ? (
          <View style={styles.addition}>
            <Text>{additionalCnt}</Text>
          </View>
        ) : (
          <View></View>
        )}

        <Text style={styles.toptext}>식단등록</Text>

        <View style={[styles.diary_Check_box, {backgroundColor: '#E17551'}]}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Sidebar_logined');
            }}>
            <Image
              source={require('../imgs/close.png')}
              style={[styles.diary_Check]}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.dining_type}>
        <View style={[styles.dining_box]}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Sidebar_logined');
            }}>
            <Text>아침</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.dining_box]}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Sidebar_logined');
            }}>
            <Text>점심</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.dining_box]}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Sidebar_logined');
            }}>
            <Text>저녁</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.dining_box]}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Sidebar_logined');
            }}>
            <Text>간식</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={[styles.date_time]}>
        <TouchableOpacity onPress={() => setShowDate(true)}>
          <Text>
            {month != ''
              ? moment(
                  year.slice(0, -1) +
                    '-' +
                    month.slice(0, -1) +
                    '-' +
                    date_.slice(0, -1),
                  'YYYY-MM-DD',
                ).format('YYYY.MM.DD (dd)')
              : year}
            {/* {getCurrentDate()} */}
          </Text>
          <Modal
            transparent={true}
            animationType="slide"
            visible={showDate}
            supportedOrientations={['portrait']}
            onRequestClose={() => setShowDate(false)}>
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
                    width: '35%',
                    height: parentHeight * 0.36,
                    position: 'absolute',
                    left: 0,
                  }} //
                  lineColor="#E17551" //to set top and bottom line color (Without gradients)
                  lineGradientColorFrom="#E17551" //to set top and bottom starting gradient line color
                  lineGradientColorTo="#E17551" //to set top and bottom ending gradient
                  selectedValue={selectedYear}
                  itemSpace={35}
                  visibleItemCount={1}
                  itemStyle={{
                    color: '#D6D7D9',
                    fontWeight: 'bold',
                    fontSize: 20,
                    lineHeight: 24,
                  }}
                  // selectedItemTextColor="black"
                  onValueChange={index => changeYear(index)}>
                  {yearList.map((value, i) => (
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
                  selectedValue={selectedMonth}
                  itemSpace={35}
                  visibleItemCount={1}
                  itemStyle={{
                    color: '#D6D7D9',
                    fontWeight: 'bold',
                    fontSize: 20,
                    lineHeight: 24,
                  }}
                  // selectedItemTextColor="black"
                  // onValueChange={(index) => setSelectedMonth(index)}>
                  onValueChange={index => changeMonth(index)}>
                  {monthList.map((value, i) => (
                    <PickerItem label={value} value={i} key={i} />
                  ))}
                </Picker>

                <Picker
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
                  selectedValue={selectedDate}
                  itemSpace={35}
                  visibleItemCount={1}
                  enabled={false}
                  // isCurved={false}
                  itemStyle={{
                    color: '#D6D7D9',
                    fontWeight: 'bold',
                    fontSize: 20,
                    lineHeight: 24,
                  }}
                  // selectedItemTextColor="black"
                  // onValueChange={(index) => setSelectedDate(index)}>
                  onValueChange={index => changeDate(index)}>
                  {dateList31.map((value, i) => (
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
                  onPressOut={() => setShowDate(false)}>
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
                  onPressOut={() => confirmDate()}
                  disabled={disable}>
                  <View
                    style={{
                      backgroundColor: colorChoice,
                      position: 'absolute',
                      left: '7.5%',
                      justifyContent: 'center',
                      flex: 1,
                      width: '100%',
                      height: '100%',
                      borderColor: '#E17551',
                      borderStyle: 'solid',
                      borderRadius: 10,
                    }}>
                    <Text
                      style={{
                        color: colorChoiceText,
                        alignSelf: 'center',
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
      </View>
      <TouchableOpacity
        style={[styles.date_time]}
        // activeOpacity={0}
        onPress={() => setShow(true)}>
        <Text style={{textAlign: 'center'}}>
          {a} {item}
          {minute}
        </Text>
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
                  fontWeight: 'bold',
                  fontSize: 20,
                  lineHeight: 24,
                  position: 'absolute',
                  right: '29%',
                  top: '39%',
                }}>
                :
              </Text>

              <Picker
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

      <TouchableHighlight
        style={[styles.foodselect]}
        onPress={() => {
          props.navigation.navigate('EnterFood');
        }}>
        <View style={styles.Foodpicker}>
          <View style={styles.Foodicon}>
            <Image source={require('../imgs/🍚.png')} />
          </View>
          <View style={{width: '36%', height: '20.19%'}}>
            <Text style={styles.enterfood}>음식명을 입력해주세요</Text>
          </View>
        </View>
      </TouchableHighlight>

      <TouchableOpacity
        style={{
          width: '100%',
          height: '8.65%',
          position: 'absolute',
          bottom: 0,
        }}
        onPress={() => setShowRegister(true)}>
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
        <Modal
          transparent={true}
          animationType="slide"
          visible={showRegister}
          supportedOrientations={['portrait']}
          onRequestClose={() => setShowRegister(false)}>
          <View style={[styles.wrapperVertical, {backgroundColor: 'green'}]}>
            <View style={styles.registerModalTop}>
              <Text style={styles.registerText}>추가 목록(1)</Text>
              <TouchableOpacity
                onPress={() => setShowRegister(false)}
                style={styles.registerModalClose}>
                <View style={styles.aligntop}>
                  <Image source={require('../imgs/close.png')} />
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.registerModalMiddleText}>
              <Image
                source={require('../imgs/Rectangle_135.png')}
                style={[
                  {
                    width: '9.1%',
                    height: '38.1%',
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignSelf: 'center',
                  },
                ]}
              />
              <Text
                style={[
                  {
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignSelf: 'center',
                  },
                ]}>
                {' '}
                아침{' '}
              </Text>
              <Text
                style={[
                  {
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignSelf: 'center',
                  },
                ]}>
                {' '}
                11:01{' '}
              </Text>
            </View>

            <View style={[styles.registerModalFood]}>
              <View style={styles.registerModalFoodIcon}>
                <Image source={require('../imgs/🍚.png')} />
              </View>

              <Text
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'center',
                  position: 'absolute',
                  left: '24.46%',
                }}>
                {' '}
                생선구이{' '}
              </Text>

              <View style={[styles.registerModalTrashIcon]}>
                <Image source={require('../imgs/trash_can.png')} />
              </View>
            </View>

            <View
              style={{
                width: '88.17%',
                height: '18.67%',
                bottom: '14%',
                position: 'absolute',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{width: '48.17%', height: '100%'}}
                onPressOut={() => addtionalRegister()}>
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
                      fontStyle: 'normal',
                      fontWeight: 'bold',
                      fontSize: 17,
                      lineHeight: 21,
                    }}>
                    추가등록
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={{width: '48.17%', height: '100%'}}
                onPress={getDailyMealHistory}>
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
                      fontStyle: 'normal',
                      fontWeight: 'bold',
                      fontSize: 17,
                      lineHeight: 21,
                    }}>
                    등록완료
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </TouchableOpacity>
    </View>
  );
}

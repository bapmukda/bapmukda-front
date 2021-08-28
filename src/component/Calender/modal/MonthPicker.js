import React from 'react';
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
var PickerItem = Picker.Item;
export default function MonthPicker() {
  const [year, setYear] = useState(
    moment()
      .locale('ko')
      .utcOffset(+9)
      .format('YYYY.MM.DD (dd)'),
  );
  const [month, setMonth] = useState('');
  const [date_, setDate_] = useState('');
  const [disable, setDisable] = useState(false);
  const [colorChoice, setColorChoice] = useState('#E17551');
  const [colorChoiceText, setColorChoiceText] = useState('white');
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
    // console.log("index"+index);
    // console.log("selectedMonth"+selectedMonth);
    // console.log("Before"+monthList[selectedMonth]);
    setSelectedMonth(index);
    // console.log("index"+selectedMonth);
    // console.log("After"+monthList[selectedMonth]);
    leaf();

    if (isleaf) {
      //(Number(yearList[selectedYear]) % 4 == 0 && Number(yearList[selectedYear]) % 100 != 0 && Number(yearList[selectedYear]) % 400 == 0) // 윤년
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
  const confirmDate = () => {
    setShowDate(false);
    setYear(yearList[selectedYear]);
    setMonth(monthList[selectedMonth]);
    setDate_(dateList31[selectedDate]);
  };

  const [show, setShow] = useState(false);

  return (
    <div>
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
                    width: '20%',
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
                    fontFamily: 'SpoqaHanSans',
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
                    fontFamily: 'SpoqaHanSans',
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
                    fontFamily: 'SpoqaHanSans',
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
                        fontFamily: 'SpoqaHanSans',
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
                        fontFamily: 'SpoqaHanSans',
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
    </div>
  );
}

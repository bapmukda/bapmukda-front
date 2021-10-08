import 'react-native-gesture-handler';
import React, {useState, useRef} from 'react';
import {Dimensions, View, Text, StyleSheet, ScrollView, Button, TouchableOpacity, Image, PixelRatio, Modal, TouchableHighlight} from 'react-native';
import moment, { locale } from 'moment';
import 'moment/locale/ko';
import Picker from '@gregfrench/react-native-wheel-picker';
import Input_food from '../input/Input_food';


var PickerItem = Picker.Item;


// state = {open: false};
const styles = StyleSheet.create({
  mainView: {
    backgroundColor: '#FBFBFB',
    flex: 1, //화면을 차지 하는 비율, 1/1 다른게 3이면 1/4 : 3/4
    // paddingTop: 100,
    // alignItems: 'center', //수평정렬
  },
  top: {
    // position: "absolute"6,
    backgroundColor:"red",
    width: "100%",
    height: "5.44%",
    // top: "5.44%",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row",
  },
goBack:{
    // backgroundColor:"yellow",
    width:"5.3%",
    height:"45.45%",
    alignSelf:"center",
    position:"absolute",
    left:"3%"
},
enter:{
    // backgroundColor:"green",
    // width:"5.3%",
    // height:"45.45%",
    alignSelf:"center",
    position:"absolute",
    right:"3%"
},
aligntop:{
    // width:"100%",
    // height:"100%",
    alignItems:"center",
    justifyContent:"center"
},
foodselect:{
    
    width:"100%",
    height:"12.86%",
    backgroundColor:"white",
    
    backgroundColor:"yellow",

    marginTop:"1%",
    justifyContent:"center",
    alignItems:"center",
    
    fontFamily: "SpoqaHanSansNeo-Regular",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 18,
    lineHeight: 21,
    display:"flex",
    alignItems:"center",
    textAlign:"center",
    /* identical to box height */
  
    letterSpacing:0.02,
  
    /* grey04 */
  
    color: "#999BA0",
  },
  Foodpicker: {
    width:"100%", 
    height:"100%",
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  Foodicon:{
    borderWidth:2,
    borderRadius: 12,
    borderColor:"#FBFBFB",
    borderStyle:"solid",
    width: 48,//"12.8%",
    height: 48,//"46.15%",
    backgroundColor:"#EBEBEC",
    justifyContent:'center',
    alignItems:'center',
  },
  trashcan:{
    position:"absolute",
    bottom:"45%",
    borderWidth:2,
    borderRadius: 10,
    borderColor:"#D6D7D9",
    borderStyle:"solid",
    backgroundColor:"#FBFBFB",
    justifyContent:'center',
    alignContent:"center",
    alignItems:"center",
    alignSelf:"center",
    width:"87.2%",
    height:"5.93%"
  },
  enterfood:{
    display:"flex",
    fontFamily: "SpoqaHanSansNeo-Regular",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    lineHeight: 21,
    alignItems: "center",
    textAlign:"center",
    letterSpacing:0.02,
    color: "#999BA0"
  },
  editText:{
    color:"#E17551",
    fontFamily: "SpoqaHanSansNeo-Regular",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    lineHeight: 21,
    /* identical to box height */
    
    textAlign: "center",
    letterSpacing: 0.02
  },
  toptext:{
    // position: "relative",
    // width: 50,
    // height: 18,
    // left: 165,
    // top: 13,

    /* sub/12/0/reg */

    fontFamily: "SpoqaHanSansNeo-Regular",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    lineHeight: 18,
    /* identical to box height */
    // marginTop: "3%",
    textAlign: "center",
    // textAlignVertical: "top",
    /* Gray 1 */
    justifyContent:"center",
    color: "#333333",
  },
  date_time:{
    backgroundColor:"purple",
    width:"100%",
    height:"8.9%",
    marginTop:"1%",
    justifyContent:"center",
    alignItems:"center",
    
    fontFamily: "SpoqaHanSansNeo-Regular",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 18,
    lineHeight: 21,
    /* identical to box height */
  
    letterSpacing:0.02,
  
    /* grey04 */
  
    color: "#333842",
  },
  wrapperVertical: {
    backgroundColor:'white',
    width: "100%",
    height: "37.08%",
    justifyContent: 'center',
    alignItems: 'center',
    // margin: 'auto',
    color: 'black',
    position:'relative',
    // marginLeft: Dimensions.get('window').width / 4 ,
    marginTop: Dimensions.get('window').height / 4 ,
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
  wrapperDelete:{
    backgroundColor:"white",
    width:"74.4%",
    height:"22.74%",
    shadowColor: 'rgba(0, 0, 0, 0.12)',
    shadowOffset: {width: 0, height: 0, top:8, bottom:1},
    borderRadius:16,
    
    justifyContent: 'center',
    alignItems: 'center',
    // margin: 'auto',
    position:'relative',
    marginLeft: Dimensions.get('window').width / 8 ,
    marginTop: Dimensions.get('window').height / 4 ,
    // boxShadow: "0px 2px 6px rgba(196, 196, 196, 0.2)",
    // borderRadius: 24px 24px 0px 0px;
  }
});



export default function details(props) {

    const [parentHeight, setParentHeight] = useState(0);
    const onLayout = event => {
        const {height} = event.nativeEvent.layout;
        setParentHeight(height);
    };
    const [disable, setDisable] = useState(false);
    const [colorChoice, setColorChoice] = useState("#E17551");
    const [colorChoiceText, setColorChoiceText] = useState("white");
    
    const [selectedItem, setSelectedItem ] = useState(2);
    const [itemList, setItemList] = useState(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']);
    const [selectedMinute, setSelectedMinute ] = useState(2);
    const [minuteList, setMinuteList] = useState(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59']);
    const [selectedA, setSelectedA ] = useState(1);
    const [aList, setAList] = useState(['오전', '오후']);
  
    const [selectedYear, setSelectedYear ] = useState(0);
    const [yearList, setYearList] = useState(['2019년','2020년', '2021년','2022년']);
    const [selectedMonth, setSelectedMonth ] = useState(0);
    const [monthList, setMonthList] = useState(['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월']);
    const [selectedDate, setSelectedDate ] = useState(1);
    const [dateList28, setDateList28] = useState(['1일', '2일', '3일', '4일', '5일', '6일', '7일', '8일', '9일', '10일', '11일', '12일', '13일', '14일', '15일', '16일', '17일', '18일', '19일', '20일', '21일', '22일', '23일', '24일', '25일', '26일', '27일', '28일']);
    const [dateList29, setDateList29] = useState(['1일', '2일', '3일', '4일', '5일', '6일', '7일', '8일', '9일', '10일', '11일', '12일', '13일', '14일', '15일', '16일', '17일', '18일', '19일', '20일', '21일', '22일', '23일', '24일', '25일', '26일', '27일', '28일', '29일']);
    const [dateList30, setDateList30] = useState(['1일', '2일', '3일', '4일', '5일', '6일', '7일', '8일', '9일', '10일', '11일', '12일', '13일', '14일', '15일', '16일', '17일', '18일', '19일', '20일', '21일', '22일', '23일', '24일', '25일', '26일', '27일', '28일', '29일', '30일']);
    const [dateList31, setDateList31] = useState(['1일', '2일', '3일', '4일', '5일', '6일', '7일', '8일', '9일', '10일', '11일', '12일', '13일', '14일', '15일', '16일', '17일', '18일', '19일', '20일', '21일', '22일', '23일', '24일', '25일', '26일', '27일', '28일', '29일', '30일', '31일']);
    const [isleaf, setIsLeaf] = useState(false);
    const [is31, setIs31] = useState(false);
    
  
    // For time picker
    const [a, setA] = useState(moment().locale('ko').utcOffset(+9).format('   a     hh:mm'));
    const [item, setItem] = useState(null);
    const [minute, setMinute] = useState(null);
    
    
    //For date picker
    const [year, setYear] = useState(moment().locale('ko').utcOffset(+9).format('YYYY.MM.DD (dd)'));
    const [month, setMonth] = useState('');
    const [date_, setDate_] = useState('');
  
    const [Colr, setColor] = useState("#FFFFFF");
    const [Colr1, setColor1] = useState("#FFFFFF");
    const [Colr2, setColor2] = useState("#FFFFFF");
    const [Colr3, setColor3] = useState("#FFFFFF");
  
    const [date, setDate] = useState(moment().locale('ko').utcOffset(+9));
  
   
    const leaf = () => {
      if ( Number( (yearList[selectedYear]).slice(0, -1) )% 4 == 0 && Number( (yearList[selectedYear]).slice(0, -1) ) % 100 != 0 && Number( (yearList[selectedYear]).slice(0, -1) ) % 400 == 0 )
      {
        setIsLeaf(true);
      }
      else
      {
        setIsLeaf(false);
      }
    }
  
    const confirm = () => {
      setShow(false);
      if((selectedItem+1).toString.length == 1 && Number(selectedItem+1) < 10){
        setItem('0'+(selectedItem+1));
      }
      else{
        setItem(selectedItem+1);
      }
      if(selectedA == '0'){
        setA("오전");
      }
      else{
        setA("오후");
      }
      if((selectedMinute).toString.length == 1 && Number(selectedMinute) < 10){
        setMinute(':'+'0'+selectedMinute);
      }
      else{
        setMinute(':'+selectedMinute);
      }  
    };
    
    
    const changeYear = (index) => {
      setSelectedYear(index);
      if ( Number(yearList[index].slice(0,-1)) > Number(moment().locale('ko').utcOffset(+9).format('YYYY')) || ( Number(yearList[index].slice(0,-1)) == Number(moment().locale('ko').utcOffset(+9).format('YYYY')) && Number(monthList[selectedMonth].slice(0,-1)) > Number(moment().locale('ko').utcOffset(+9).format('MM')) ) || ( Number(yearList[index].slice(0,-1)) == Number(moment().locale('ko').utcOffset(+9).format('YYYY')) && Number(monthList[selectedMonth].slice(0,-1)) == Number(moment().locale('ko').utcOffset(+9).format('MM') ) && Number(dateList31[selectedDate].slice(0,-1)) > Number(moment().locale('ko').utcOffset(+9).format('DD') )))
      {
        setColorChoice("#EBEBEC");
        setColorChoiceText("#D6D7D9");
        setDisable(true);
      }
      else
      {
        setColorChoice("#E17551");
        setColorChoiceText("white");
        setDisable(false);
      }
    };
    const changeMonth = (index) => {
      // console.log("index"+index);
      // console.log("selectedMonth"+selectedMonth);
      // console.log("Before"+monthList[selectedMonth]);
      setSelectedMonth(index);
      // console.log("index"+selectedMonth);
      // console.log("After"+monthList[selectedMonth]);
      leaf();
      
      if (isleaf)//(Number(yearList[selectedYear]) % 4 == 0 && Number(yearList[selectedYear]) % 100 != 0 && Number(yearList[selectedYear]) % 400 == 0) // 윤년
      {
        if ( (Number(monthList[index].slice(0,-1) ) % 2 == 1 && Number(monthList[index].slice(0,-1) ) < 8) || (Number(monthList[index].slice(0,-1) ) % 2 == 0 && Number(monthList[index].slice(0,-1) ) > 7) ) // 31일 까지 있는 달
        {
          setDateList31(['1일', '2일', '3일', '4일', '5일', '6일', '7일', '8일', '9일', '10일', '11일', '12일', '13일', '14일', '15일', '16일', '17일', '18일', '19일', '20일', '21일', '22일', '23일', '24일', '25일', '26일', '27일', '28일', '29일', '30일', '31일']);
        }
        else if (Number(monthList[index].slice(0,-1) ) == 2)
        {
          setDateList31(['1일', '2일', '3일', '4일', '5일', '6일', '7일', '8일', '9일', '10일', '11일', '12일', '13일', '14일', '15일', '16일', '17일', '18일', '19일', '20일', '21일', '22일', '23일', '24일', '25일', '26일', '27일', '28일', '29일']);
        }
        else
        {
          setDateList31(['1일', '2일', '3일', '4일', '5일', '6일', '7일', '8일', '9일', '10일', '11일', '12일', '13일', '14일', '15일', '16일', '17일', '18일', '19일', '20일', '21일', '22일', '23일', '24일', '25일', '26일', '27일', '28일', '29일', '30일']);
        }
      }
      else
      {
        // console.log(index);
        if ( (Number(monthList[index].slice(0,-1) ) % 2 == 1 && Number(monthList[index].slice(0,-1) ) < 8) || (Number(monthList[index].slice(0,-1) ) % 2 == 0 && Number(monthList[index].slice(0,-1) ) > 7) ) // 31일 까지 있는 달
        {
          setDateList31(['1일', '2일', '3일', '4일', '5일', '6일', '7일', '8일', '9일', '10일', '11일', '12일', '13일', '14일', '15일', '16일', '17일', '18일', '19일', '20일', '21일', '22일', '23일', '24일', '25일', '26일', '27일', '28일', '29일', '30일','31일']);
          // console.log("31일 까지 있는 달입니다."+dateList31+monthList[index].slice(0,-1) )
          
        }
        else if (Number(monthList[index].slice(0,-1) ) == 2)
        {
          setDateList31(['1일', '2일', '3일', '4일', '5일', '6일', '7일', '8일', '9일', '10일', '11일', '12일', '13일', '14일', '15일', '16일', '17일', '18일', '19일', '20일', '21일', '22일', '23일', '24일', '25일', '26일', '27일', '28일']);
          // console.log("29일 까지 있는 달입니다."+dateList31+monthList[index].slice(0,-1) )
        }
        else
        {
          setDateList31(['1일', '2일', '3일', '4일', '5일', '6일', '7일', '8일', '9일', '10일', '11일', '12일', '13일', '14일', '15일', '16일', '17일', '18일', '19일', '20일', '21일', '22일', '23일', '24일', '25일', '26일', '27일', '28일', '29일', '30일']);
          // console.log("30일 까지 있는 달입니다."+dateList31+monthList[index].slice(0,-1) )
        }
      }
  
      if ( Number(yearList[selectedYear].slice(0,-1)) > Number(moment().locale('ko').utcOffset(+9).format('YYYY')) || ( Number(yearList[selectedYear].slice(0,-1)) == Number(moment().locale('ko').utcOffset(+9).format('YYYY')) && Number(monthList[index].slice(0,-1)) > Number(moment().locale('ko').utcOffset(+9).format('MM')) ) || ( Number(yearList[selectedYear].slice(0,-1)) == Number(moment().locale('ko').utcOffset(+9).format('YYYY')) && Number(monthList[index].slice(0,-1)) == Number(moment().locale('ko').utcOffset(+9).format('MM') ) && Number(dateList31[selectedDate].slice(0,-1)) > Number(moment().locale('ko').utcOffset(+9).format('DD') )))
      {
        setColorChoice("#EBEBEC");
        setColorChoiceText("#D6D7D9");
        setDisable(true);
      }
      else
      {
        setColorChoice("#E17551");
        setColorChoiceText("white");
        setDisable(false);
      }
    };
    const changeDate = (index) => {
      setSelectedDate(index);
      if ( Number(yearList[selectedYear].slice(0,-1)) > Number(moment().locale('ko').utcOffset(+9).format('YYYY')) || ( Number(yearList[selectedYear].slice(0,-1)) == Number(moment().locale('ko').utcOffset(+9).format('YYYY')) && Number(monthList[selectedMonth].slice(0,-1)) > Number(moment().locale('ko').utcOffset(+9).format('MM')) ) || ( Number(yearList[selectedYear].slice(0,-1)) == Number(moment().locale('ko').utcOffset(+9).format('YYYY')) && Number(monthList[selectedMonth].slice(0,-1)) == Number(moment().locale('ko').utcOffset(+9).format('MM') ) && Number(dateList31[index].slice(0,-1)) > Number(moment().locale('ko').utcOffset(+9).format('DD') )))
      {
        setColorChoice("#EBEBEC");
        setColorChoiceText("#D6D7D9");
        setDisable(true);
      }
      else
      {
        setColorChoice("#E17551");
        setColorChoiceText("white");
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
    const [showDate, setShowDate] = useState(false);   
    const [showDelete, setShowDelete] = useState(false);

  return (
    <View style={styles.mainView}>
      
<View style={styles.top}>
            <TouchableOpacity
                onPress={() => {
                props.navigation.navigate('MtoE');
                }}
                style ={styles.goBack}>
                <View style={styles.aligntop}>
                    <Image source = {require('../imgs/close.png')}/>
                </View>  
            </TouchableOpacity>
          
            <View style={{width:"12%", height:"40.91%",alignSelf:"center"}}>
                <Text style={styles.toptext}>아침</Text>
            </View>
          
            <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('MtoE');
            }}
            style ={styles.enter}>
                <View style={styles.aligntop}>
                    <Text style={styles.editText}>수정</Text>
                </View> 
            </TouchableOpacity>
        </View>

        <View style={[styles.date_time]}>
          <TouchableOpacity onPress={() => setShowDate(true)}>
          
            <Text>
              {month != '' ? moment(year.slice(0,-1)+'-'+month.slice(0,-1)+'-'+date_.slice(0,-1), 'YYYY-MM-DD').format("YYYY.MM.DD (dd)") : year}
              {/* {getCurrentDate()} */}
            </Text>
            <Modal
              transparent={true}
              animationType='slide'
              visible={showDate}
              supportedOrientations={['portrait']}
              onRequestClose={() => setShowDate(false)}>
              
              <View style={[styles.wrapperVertical,{}]} onLayout={onLayout}>
                <View style={{width:"69.9%", height:"36%",flexDirection:"row",backgroundColor:"white",justifyContent:"center"}}>
                  <Picker style={{flex:1/3 ,width: "20%", height: parentHeight * 0.36,position:"absolute",left:0}} // 
                      lineColor="#E17551" //to set top and bottom line color (Without gradients)
                      lineGradientColorFrom="#E17551" //to set top and bottom starting gradient line color
                      lineGradientColorTo="#E17551" //to set top and bottom ending gradient
                      selectedValue={selectedYear}
                      itemSpace={35}
                      visibleItemCount={1}
                      
                      itemStyle={{color:"#D6D7D9", fontFamily: "SpoqaHanSansNeo-Regular", fontWeight: "bold", fontSize: 20, lineHeight: 24,}}
                      // selectedItemTextColor="black"
                      onValueChange={(index) => changeYear(index)}>
                      {yearList.map((value, i) => (
                        <PickerItem label={value} value={i} key={i}/>
                      ))}
                  </Picker>

                  <Picker style={{flex:1/3 ,width: "20%", height: parentHeight * 0.36,position:"absolute"}} // 
                    lineColor="#E17551" //to set top and bottom line color (Without gradients)
                    lineGradientColorFrom="#E17551" //to set top and bottom starting gradient line color
                    lineGradientColorTo="#E17551" //to set top and bottom ending gradient
                    selectedValue={selectedMonth}
                    itemSpace={35}
                    visibleItemCount={1}
                    
                    itemStyle={{color:"#D6D7D9", fontFamily: "SpoqaHanSansNeo-Regular", fontWeight: "bold", fontSize: 20, lineHeight: 24,}}
                    // selectedItemTextColor="black"
                    // onValueChange={(index) => setSelectedMonth(index)}>
                    onValueChange={(index) => changeMonth(index)}>
                    {monthList.map((value, i) => (
                      <PickerItem label={value} value={i} key={i}/>
                    ))}
                  </Picker>

                  
                  <Picker style={{flex:1/3 ,width: "20%", height: parentHeight * 0.36,position:"absolute",right:0}} // 
                    lineColor="#E17551" //to set top and bottom line color (Without gradients)
                    lineGradientColorFrom="#E17551" //to set top and bottom starting gradient line color
                    lineGradientColorTo="#E17551" //to set top and bottom ending gradient
                    selectedValue={selectedDate}
                    itemSpace={35}
                    visibleItemCount={1}
                    enabled={false}
                    // isCurved={false}
                    itemStyle={{color:"#D6D7D9", fontFamily: "SpoqaHanSansNeo-Regular", fontWeight: "bold", fontSize: 20, lineHeight: 24,}}
                    // selectedItemTextColor="black"
                    // onValueChange={(index) => setSelectedDate(index)}>
                    onValueChange={(index) => changeDate(index)}>

                    {
                      dateList31.map((value, i) => (
                        <PickerItem label={value} value={i} key={i}/>
                      ))
                    }
                  </Picker>
                </View>
                  
                  <View style={{width:"87.5%", height:"18.67%", top:"16%",flexDirection:"row"}}>
                    <TouchableOpacity style={{width:"48.17%", height:"100%"}}
                    onPressOut={() => setShowDate(false)}>
                      <View style={{position:"absolute",left:0,justifyContent:"center",flex:1,width:"100%", height:"100%",borderWidth: 2,borderColor:"#E17551",borderStyle:"solid", borderRadius: 10}}>
                        <Text style={{color:"#E17551",alignSelf:"center",fontFamily: "SpoqaHanSansNeo-Regular",fontStyle: "normal",fontWeight: "bold",fontSize: 17,lineHeight: 21}}>취소</Text>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{width:"48.17%", height:"100%"}}
                    onPressOut={() => confirmDate()}
                    disabled = {disable}>
                      <View style={{backgroundColor: colorChoice, position:"absolute",left:"7.5%",justifyContent:"center",flex:1,width:"100%", height:"100%",borderColor:"#E17551",borderStyle:"solid", borderRadius: 10}}>
                        <Text style={{color:colorChoiceText, alignSelf:"center",fontFamily: "SpoqaHanSansNeo-Regular",fontStyle: "normal",fontWeight: "bold",fontSize: 17,lineHeight: 21}}>완료</Text>
                      </View>
                    </TouchableOpacity>

                  </View>
              </View>
            </Modal>
          </TouchableOpacity>
      </View>

      <TouchableOpacity style={[styles.date_time]}
      // activeOpacity={0}
      onPress={() => setShow(true)}>
        <Text style={{textAlign:'center'}}>{a}     {item}{minute}</Text>
        <Modal
            transparent={true}
            animationType='slide'
            visible={show}
            supportedOrientations={['portrait']}
            onRequestClose={() => setShow(false)}>
              <View style={[styles.wrapperVertical,{}]} onLayout={onLayout}>
                <View style={{width:"69.9%", height:"36%",flexDirection:"row",backgroundColor:"white",justifyContent:"center"}}>
                  <Picker style={{flex:1/3 ,width: "20%", height: parentHeight * 0.36,position:"absolute",left:0}} // 
                      lineColor="#E17551" //to set top and bottom line color (Without gradients)
                      lineGradientColorFrom="#E17551" //to set top and bottom starting gradient line color
                      lineGradientColorTo="#E17551" //to set top and bottom ending gradient
                      selectedValue={selectedA}
                      itemSpace={35}
                      visibleItemCount={1}
                      
                      itemStyle={{color:"#D6D7D9", fontFamily: "SpoqaHanSansNeo-Regular", fontWeight: "bold", fontSize: 20, lineHeight: 24,}}
                      // selectedItemTextColor="black"
                      onValueChange={(index) => setSelectedA(index) }>
                      {aList.map((value, i) => (
                        <PickerItem label={value} value={i} key={i}/>
                      ))}
                  </Picker>

                  <Picker style={{flex:1/3 ,width: "20%", height: parentHeight * 0.36,position:"absolute"}} // 
                    lineColor="#E17551" //to set top and bottom line color (Without gradients)
                    lineGradientColorFrom="#E17551" //to set top and bottom starting gradient line color
                    lineGradientColorTo="#E17551" //to set top and bottom ending gradient
                    selectedValue={selectedItem}
                    itemSpace={35}
                    visibleItemCount={1}
                    
                    itemStyle={{color:"#D6D7D9", fontFamily: "SpoqaHanSansNeo-Regular", fontWeight: "bold", fontSize: 20, lineHeight: 24,}}
                    // selectedItemTextColor="black"
                    onValueChange={(index) => setSelectedItem(index) }>
                    {itemList.map((value, i) => (
                      <PickerItem label={value} value={i} key={i}/>
                    ))}
                  </Picker>

                  <Text style={{color:"#333842", fontFamily: "SpoqaHanSansNeo-Regular", fontWeight: "bold", fontSize: 20, lineHeight: 24, position:"absolute",right:"29%",top:"39%"}}>:</Text>
                  
                  <Picker style={{flex:1/3 ,width: "20%", height: parentHeight * 0.36,position:"absolute",right:0}} // 
                    lineColor="#E17551" //to set top and bottom line color (Without gradients)
                    lineGradientColorFrom="#E17551" //to set top and bottom starting gradient line color
                    lineGradientColorTo="#E17551" //to set top and bottom ending gradient
                    selectedValue={selectedMinute}
                    itemSpace={35}
                    visibleItemCount={1}
                    // isCurved={false}
                    itemStyle={{color:"#D6D7D9", fontFamily: "SpoqaHanSansNeo-Regular", fontWeight: "bold", fontSize: 20, lineHeight: 24,}}
                    // selectedItemTextColor="black"
                    onValueChange={(index) => setSelectedMinute(index) }>
                    
                    {minuteList.map((value, i) => (
                      <PickerItem label={value} value={i} key={i}/>
                    ))}

                  </Picker>
                </View>
                  
                  <View style={{width:"87.5%", height:"18.67%", top:"16%",flexDirection:"row"}}>
                    <TouchableOpacity style={{width:"48.17%", height:"100%"}}
                    onPressOut={() => setShow(false)}>
                      <View style={{position:"absolute",left:0,justifyContent:"center",flex:1,width:"100%", height:"100%",borderWidth: 2,borderColor:"#E17551",borderStyle:"solid", borderRadius: 10}}>
                        <Text style={{color:"#E17551",alignSelf:"center",fontFamily: "SpoqaHanSansNeo-Regular",fontStyle: "normal",fontWeight: "bold",fontSize: 17,lineHeight: 21}}>취소</Text>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{width:"48.17%", height:"100%"}}
                    onPressOut={() => confirm()}>
                      <View style={{backgroundColor: "#E17551",position:"absolute",left:"7.5%",justifyContent:"center",flex:1,width:"100%", height:"100%",borderWidth: 2,borderColor:"#E17551",borderStyle:"solid", borderRadius: 10}}>
                        <Text style={{color:"white",alignSelf:"center",fontFamily: "SpoqaHanSansNeo-Regular",fontStyle: "normal",fontWeight: "bold",fontSize: 17,lineHeight: 21}}>완료</Text>
                      </View>
                    </TouchableOpacity>

                  </View>
              </View>
            </Modal>
      </TouchableOpacity>

      <View style={{width:"100%", height:"21.38%", marginTop:"1%", justifyContent:"center", alignItems:"center",backgroundColor:"blue"}}>
            <View style={styles.Foodicon}>
                <Image source = {require('../imgs/🍚.png')}/>
            </View>
            
            <Text style={{position:"absolute", bottom:"15%"}}>
                계란후라이
            </Text>
      </View>

      <TouchableOpacity style={styles.trashcan}
      onPressOut={() => setShowDelete(true)}>
          <Image source = {require('../imgs/trash_can.png')}/>
          <Modal
              transparent={true}
              animationType='slide'
              visible={showDelete}
              supportedOrientations={['portrait']}
              onRequestClose={() => setShowDelete(false)}>
                  <View style={styles.wrapperDelete}>
                      <Text style={{alignSelf:"center",bottom:"15%",fontSize:16,fontWeight:"bold"}}>
                          식단을 삭제할까요?
                      </Text>

                      <View style={{width:"82.8%",height:"26.1%",flexDirection:"row",position:"absolute",bottom:"10%"}}>
                          
                        <TouchableOpacity style={{width:"48.17%", height:"100%"}}
                        onPressOut={() => setShowDelete(false)}>
                            <View style={{position:"absolute",left:0,justifyContent:"center",flex:1,width:"100%", height:"100%",borderWidth: 2,borderColor:"#E17551",borderStyle:"solid", borderRadius: 10}}>
                                <Text style={{color:"#E17551",alignSelf:"center",fontFamily: "SpoqaHanSansNeo-Regular",fontStyle: "normal",fontWeight: "bold",fontSize: 17,lineHeight: 21}}>취소</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={{width:"48.17%", height:"100%"}}
                        onPressOut={() => setShowDelete(false)}
                        disabled = {disable}>
                            <View style={{backgroundColor: "#E17551", position:"absolute",left:"7.5%",justifyContent:"center",flex:1,width:"100%", height:"100%",borderColor:"#E17551",borderStyle:"solid", borderRadius: 10}}>
                                <Text style={{color:"white", alignSelf:"center",fontFamily: "SpoqaHanSansNeo-Regular",fontStyle: "normal",fontWeight: "bold",fontSize: 17,lineHeight: 21}}>삭제</Text>
                            </View>
                        </TouchableOpacity>

                      </View>
                  </View>
          </Modal>
      </TouchableOpacity>     
    </View>
    

  
  );

}



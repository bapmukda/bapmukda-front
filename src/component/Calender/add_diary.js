import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Button, TouchableOpacity, Image, PixelRatio} from 'react-native';
import moment, { locale } from 'moment';
import 'moment/locale/ko';
import 'moment-timezone';

import Input_diary from '../input/Input_diary';

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: '#FBFBFB',
    flex: 1, //화면을 차지 하는 비율, 1/1 다른게 3이면 1/4 : 3/4
    paddingTop: 100,
    alignItems: 'center', //수평정렬
  },
  mainText: {
    fontSize: 20,
    fontWeight: 'normal',
    padding: 20,
  },
  diarytop: {
    position: "absolute",
    backgroundColor:"white",
    width: "100%",
    height: "5.44%",
    // top: "5.44%",
    justifyContent:"center",
  },
  diary_Check_box:{
    // backgroundColor:"yellow",
    position: "absolute",
    width: 20, //"5.33%",
    height: 20, //"45.45%",
    // left: 355, //"88.27%",
    marginLeft:"84%",
    top: "27.28%",
    justifyContent:"center",
    alignItems:"center"
  },
  diary_X: {
    // backgroundColor: 'white',
    left:"6.45%",
    width: "6.45%",
    height: "34.1%",
    // marginLeft: 447,
    position: "absolute",
    top:"32%",
    justifyContent:"center",
  },
  diary_Check: {
    // backgroundColor: 'white',
    width: 18,//"6.45%",
    height: 13,//"34.1%",
    // top:"25%",
    justifyContent:"center",
  },
  toptext:{
    position: "relative",
    // width: 50,
    // height: 18,
    // left: 165,
    // top: 13,

    /* sub/12/0/reg */

    fontFamily: "SpoqaHanSans",
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
  diarydate:{
    backgroundColor:"white",
    width:"100%",
    height:"8.9%",
    justifyContent:"center",
    alignItems:"center",
    
    fontFamily: "SpoqaHanSans",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 18,
    lineHeight: 21,
    /* identical to box height */

    letterSpacing:0.02,

    /* grey04 */

    color: "#333842",

  },
  diaryemo:{
    backgroundColor:"white",
    width:"100%",
    height:"10.88%",
    flexDirection:"row",
    justifyContent:"center", 
    marginTop:"-6%"
  },
  emo:{
    backgroundColor:"white",
    width:"100%",
    height:"100%",
    justifyContent:"center",
    alignItems:"center",
    borderWidth: 1,
    borderRadius: 12,
    borderStyle: 'solid',
    borderColor: "#EBEBEC"
  },
  bottomtext:{
    position: "absolute",
    // width: 50,
    // height: 18,
    // left: 165,
    // top: 13,

    /* sub/12/0/reg */

    fontFamily: "SpoqaHanSans",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 21,
    /* identical to box height */
    // marginTop: "3%",
    textAlign: "center",
    letterSpacing:0.02,
    // textAlignVertical: "top",
    /* Gray 1 */

    color: "#FFFFFF",
  },
});

export default function Add_diary(props) {

  const [Colr, setColor] = useState("#FFFFFF");
  const [Colr1, setColor1] = useState("#FFFFFF");
  const [Colr2, setColor2] = useState("#FFFFFF");
  const [Colr3, setColor3] = useState("#FFFFFF");
  const [Colr4, setColor4] = useState("#FFFFFF");

  const [date, setDate] = useState(moment().locale('ko').utcOffset(+9));



  const _onBigsmile = () => {
    if ( Colr === "#FFFFFF" ){
      setColor("#E17551");
      setColor1("#FFFFFF");
      setColor2("#FFFFFF");
      setColor3("#FFFFFF");
      setColor4("#FFFFFF");
    }
    else{
      setColor("#FFFFFF");
    }
  }

  const _onSmile = () => {
    if ( Colr1 === "#FFFFFF" ){
      setColor("#FFFFFF");
      setColor1("#E17551");
      setColor2("#FFFFFF");
      setColor3("#FFFFFF");
      setColor4("#FFFFFF");
    }
    else{
      setColor1("#FFFFFF");
    }
  }

  const _onNormal = () => {
    if ( Colr2 === "#FFFFFF" ){
      setColor("#FFFFFF");
      setColor1("#FFFFFF");
      setColor2("#E17551");
      setColor3("#FFFFFF");
      setColor4("#FFFFFF");
    }
    else{
      setColor2("#FFFFFF");
    }
  }

  const _onSad = () => {
    if ( Colr3 === "#FFFFFF" ){
      setColor("#FFFFFF");
      setColor1("#FFFFFF");
      setColor2("#FFFFFF");
      setColor3("#E17551");
      setColor4("#FFFFFF");
    }
    else{
      setColor3("#FFFFFF");
    }
  }

  const _onBigsad = () => {
    if ( Colr4 === "#FFFFFF" ){
      setColor("#FFFFFF");
      setColor1("#FFFFFF");
      setColor2("#FFFFFF");
      setColor3("#FFFFFF");
      setColor4("#E17551");
    }
    else{
      setColor4("#FFFFFF");
    }
  }
  
  return (
    <View style={styles.mainView}>
      
      <View style={styles.diarytop}>

        <View style = {[styles.diary_X]}>  
          <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Home');
          }}>
            <Image source = {require('../imgs/close.png')}/>
          </TouchableOpacity>
        </View>

        <Text style={styles.toptext}>기분등록</Text>
        
        <View style={styles.diary_Check_box}>
          <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Sidebar_logined');
          }}>
            <Image source = {require('../imgs/check.png')} style = {[styles.diary_Check]}/>
          </TouchableOpacity>
        </View>
        
      </View>
      
      <View style={[styles.diarydate, {top:"-5%"}]}>
          <Text>
            {date.format('YYYY.M.D(dd)')}
            {/* {getCurrentDate()} */}
          </Text>
      </View>
      <View style={[styles.diaryemo]}>
        <TouchableOpacity style={{flex:1,width:"14.93%", height:"54.55%", marginLeft:"6.4%",alignSelf:"center"}}
              onPressOut={() =>_onBigsmile()} >
          <View style={[styles.emo, {backgroundColor:Colr}]}>
            <Image source = {require('../imgs/bigsmile.png')}/>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{flex:1,width:"14.93%", height:"54.55%", marginLeft:"3.2%", alignSelf:"center"}}
              onPressOut={() =>_onSmile()} >
          <View style={[styles.emo, {backgroundColor:Colr1}]}>
            <Image source = {require('../imgs/smile.png')}/>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{flex:1,width:"14.93%", height:"54.55%", marginLeft:"3.2%", alignSelf:"center"}}
              onPressOut={() =>_onNormal()} >
          <View style={[styles.emo, {backgroundColor:Colr2}]}>
            <Image source = {require('../imgs/normal.png')}/>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{flex:1,width:"14.93%", height:"54.55%", marginLeft:"3.2%", alignSelf:"center"}}
              onPressOut={() =>_onSad()} >
          <View style={[styles.emo, {backgroundColor:Colr3}]}>
            <Image source = {require('../imgs/sad.png')}/>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{flex:1,width:"14.93%", height:"54.55%", marginLeft:"3.2%", marginRight:"6.4%", alignSelf:"center"}}
              onPressOut={() =>_onBigsad()} >
          <View style={[styles.emo, {backgroundColor:Colr4}]}>
            <Image source = {require('../imgs/bigsad.png')}/>
          </View>
        </TouchableOpacity>

      </View>
      <View style={{width:"100%", height:"17.06%", backgroundColor:"white",marginTop:"3%"}}>
        <Input_diary></Input_diary>
      </View>

      <TouchableOpacity style={{width:"100%",height:"8.65%",position:"absolute",bottom:0}}>
        <View style={{backgroundColor:"#E17551", width:"100%",height:"100%",alignItems:"center",justifyContent:"center"}}>
          <View style={{width:"14.13%", height:"30%",alignItems:"center"}}>
            <Text style={styles.bottomtext}>등록하기</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  
  );
}

import 'react-native-gesture-handler';
import React, {useState, useRef} from 'react';
import {Dimensions, View, Text, StyleSheet, ScrollView, Button, TouchableOpacity, Image, PixelRatio, Modal, TouchableHighlight} from 'react-native';
import moment, { locale } from 'moment';
import 'moment/locale/ko';
import Picker from '@gregfrench/react-native-wheel-picker'
import Input_food from '../input/Input_food';

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
    width:"5.3%",
    height:"45.45%",
    alignSelf:"center",
    position:"absolute",
    right:"3%"
},
aligntop:{
    width:"100%",
    height:"100%",
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
    
    fontFamily: "SpoqaHanSans",
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
    width:"12.8%",
    height:"46.15%",
    backgroundColor:"#EBEBEC",
    justifyContent:'center',
    alignItems:'center',
  },
  enterfood:{
    display:"flex",
    fontFamily: "SpoqaHanSans",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    lineHeight: 21,
    alignItems: "center",
    textAlign:"center",
    letterSpacing:0.02,
    color: "#999BA0"
  }
});



export default function MtoE(props) {
    
  return (
    <View style={styles.mainView}>
        <View style={styles.top}>
          

            <TouchableOpacity
            onPress={() => {
                props.navigation.navigate('MtoE');
            }}
            style ={styles.goBack}>
                <View style={styles.aligntop}>
                    <Image source = {require('../imgs/Vector1.png')}/>
                </View>  
            </TouchableOpacity>
          
        
            <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('MtoE');
            }}
            style ={styles.enter}>
                <View style={styles.aligntop}>
                    <Image source = {require('../imgs/check.png')}/>
                </View> 
            </TouchableOpacity>

      </View>  

      <View style={[styles.foodselect]}>
      
        <View style={styles.Foodpicker}>
            <View style={styles.Foodicon}>
              <Image source = {require('../imgs/🍚.png')}/>
            </View>
            <View style={{width:"70%",height:"46.15%",backgroundColor:"black",justifyContent:"center"}}>
              <Input_food></Input_food>
              {/* <Text style={styles.enterfood}>
              음식명을 입력해주세요
              </Text> */}
            </View>
        </View>

      </View>
    </View>
  
  );
}
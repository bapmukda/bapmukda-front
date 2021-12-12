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
} from 'react-native';

// constructor(props)
// {
//   super(props);

//   this.state = {
//     textColor: 'black' // default button color goes here
//   };
// }

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'white',
    flex: 1, //화면을 차지 하는 비율, 1/1 다른게 3이면 1/4 : 3/4
    alignItems: 'center', //수평정렬
  },
  top: {
    // position: "absolute",
    backgroundColor: 'white',
    width: '100%',
    height: '5.44%',
    // marginTop: "5.44%",
    backgroundColor: 'blue',
    justifyContent: 'center',
  },
  diary_Check_box: {
    position: 'absolute',
    width: '5.33%',
    height: '45.45%',
    right: '4%',
    top: '27.28%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  mainText: {
    fontSize: 20,
    fontWeight: 'normal',
    color: 'red',
    padding: 20,
  },
  ButtonDesign: {
    backgroundColor: '#EBEBEC',
    borderRadius: 10,
    width: 160,
    height: 48,
    justifyContent: 'center',
  },
  header: {
    backgroundColor:'green',
    width: "100%",
    // height: 132,
    height: "15.5%",
    justifyContent: 'center',
    alignItems: 'center',
  },
  img1: {
    width: 48,
    height: 48,
    // left: -190,
    marginRight: "79%",
    // top: 10,
    top: "8%",
  },
  img2: {
    width: 28,
    height: 28,
    top: 27,
    left: 33,
    borderRadius: 4,
    backgroundColor: '#ffffff',
  },
  nickname:{
    backgroundColor:'red',
    // width:63,
    width:"13%",
    // height:21,
    height:"16%",
    // left:-115,
    marginRight:"48%",
    top:-20,
    // marginTop:"3%",
    fontSize:16,
    // fontWeight:"700",
    // fontFamily: "SpoqaHanSansNeo-Regular",
    fontStyle: "normal",
    fontWeight: "bold",
    lineHeight: 21,
    /* identical to box height */
    color: '#333842',
    display: 'flex',
    alignItems: 'center',
  },
  listtext: {
    color: '#999BA0',
    width: 120,
    height: 21,
    left: 70,
    top: 3,
    letterSpacing: 0.02,
    fontSize: 16,
    fontStyle: "normal",
    // fontFamily: "SpoqaHanSansNeo-Regular"
  },
  listbound: {
    top: 8,
    width: '100%',
    height: 77,
    // backgroundColor:"gray",
    // alignItems:"flex-start"
  },
  sidebottom: {
    position: 'absolute',
    bottom: 0,
    marginBottom: "7%",
    width: '100%',
    // height: 117,
    marginLeft: "3%",
  },
});

export default function Sidebar_longined(props) {
  const [Colr, setColor] = useState('#999BA0');
  const [Colr1, setColor1] = useState('#999BA0');
  const [Colr2, setColor2] = useState('#999BA0');

  const _onCal = () => {
    if (Colr === '#999BA0') {
      setColor('#E17551');
      setColor1('#999BA0');
      setColor2('#999BA0');
    } else {
      setColor('#999BA0');
    }
  };

  const _onData = () => {
    if (Colr1 === '#999BA0') {
      setColor('#999BA0');
      setColor1('#E17551');
      setColor2('#999BA0');
    } else {
      setColor1('#999BA0');
    }
  };

  const _onGoal = () => {
    if (Colr2 === '#999BA0') {
      setColor('#999BA0');
      setColor1('#999BA0');
      setColor2('#E17551');
    } else {
      setColor2('#999BA0');
    }
  };

  return (
    <View style={styles.mainView}>
      <View style={styles.top}>
        <View style={[styles.diary_Check_box]}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Calender');
            }}>
            <Image source={require('../imgs/close.png')}/>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.header}>
        <Image source={require('../imgs/회원.png')} style={styles.img1} />
        <Text style={styles.nickname}>{}님</Text>
        {/* props.route.params.name */}
      </View>

      <View
        style={{
          marginTop: 8,
          borderBottomColor: '#EBEBEC',
          borderBottomWidth: 2,
          width: '100%',
        }}
      />

      <View style={styles.listbound}>
        <TouchableOpacity
          style={{backgroundColor: 'white'}}
          onPressOut={() => _onCal()}>
          <Image
            source={require('../imgs/식단캘린더.png')}
            style={[styles.img2, {tintColor: Colr}]}
          />
          <Text style={[styles.listtext, {color: Colr}]}>식단 캘린더</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.listbound}>
        <TouchableOpacity
          style={{backgroundColor: 'white'}}
          onPressOut={() => _onData()}
          onPress={() => {
            props.navigation.navigate('MtoE');
          }}>
          <Image
            source={require('../imgs/식단데이터.png')}
            style={[styles.img2, {tintColor: Colr1}]}
          />
          <Text style={[styles.listtext, {color: Colr1}]}>식단 데이터</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.listbound}>
        <TouchableOpacity
          style={{backgroundColor: 'white'}}
          onPressOut={() => _onGoal()}>
          <Image
            source={require('../imgs/식단목표.png')}
            style={[styles.img2, {tintColor: Colr2}]}
          />
          <Text style={[styles.listtext, {color: Colr2}]}>식단 목표</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.sidebottom}>
        <Image source={require('../imgs/logout.png')} style={styles.img2} />
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Sidebar');
          }}>
          <Text style={styles.listtext}>로그아웃</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

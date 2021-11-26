import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';
import {set} from 'react-native-reanimated';


function Users(props) {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [LoginName, setLoginName] = useState(props.LoginName);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError(null);
        setUsers(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const response = await axios({
          method: 'post',
          data: {
            email: props.LoginName,
          },
          url: 'https://api.bapmukda.net/v1/auth/validate/email',
          // url: "http://ec2-54-180-32-86.ap-northeast-2.compute.amazonaws.com:8080/v1/meal?fromDate=2021-05-01&toDate=2021-09-11",
          headers: {Authorization: 'Bearer 83e8a8c267f944f39583aa72674e5cac'},
        });

        console.log('실행');
        // console.log(resp
        console.log(response.data);
        // console.log(response._response.historeis);
        setUsers(response.data);
        console.log(users.isRegistered + '등록현황');
        props.setR(users.isRegistered);
        console.log('R' + props.R);
        if (users.isRegistered === true) {
          console.log('이미 존재하는 이메일입니다!');
        }
        // setUsers(response._response.histories); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchUsers();
  }, [props.LoginName]);

  if (loading) return <Text>로딩중..</Text>;
  if (error) return <Text>에러가 발생했습니다</Text>;
  if (!users) return <Text>유저가 아닙니다</Text>;
  return (
    <View>
      {/* {yearList.map((value, i) => (
                        <PickerItem label={value} value={i} key={i}/>
                      ))} */}

      {/* {users.map(user => (
        <View key={user.id}>
          {user.username} ({user.name})
        </View>
      ))} */}
      {/* users.fromDate */}
      <Text> {users['isRegistered']} </Text>
    </View>
  );
}

export default Users;

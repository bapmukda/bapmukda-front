import React, {useState, useEffect, useContext} from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';

function Users_login(props) {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [LoginName, setLoginName] = useState(props.LoginName);

  console.log(props.LoginName + '이메일');
  console.log(props.PasswordInput + '비밀번호');
  console.log(props.myTextInput + '닉네임');
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
            password: props.PasswordInput,
            name: props.myTextInput,
          },
          url:
            'https://api.bapmukda.net/v1/auth/sign-up',
          headers: {Authorization: 'Bearer 83e8a8c267f944f39583aa72674e5cac'},
        });
        // const response = await axios.get(
        //   'http://ec2-54-180-32-86.ap-northeast-2.compute.amazonaws.com:8080/v1/meal?fromDate=2021-05-01&toDate=2021-09-05',"Authorization: Bearer 83e8a8c267f944f39583aa72674e5cac'
        // );

        console.log('실행');
        // console.log(response);
        console.log(response.data);
        // console.log(response._response.historeis);
        setUsers(response.data);
        console.log(response.data.accessToken + '엑세스토큰');
        console.log(response.data.refreshToken + '리프레쉬토큰');

        props.setR(true);
        props.setAccessToken(response.data.accessToken);
        props.setRefreshToken(response.data.refreshToken);

        // props.setR(response.data.isRegistered);
        // console.log("R"+ R)
        // if (users.isRegistered == true)
        // {
        //   console.log("이미 존재하는 이메일입니다!")
        // }
        // setUsers(response._response.histories); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchUsers();
  }, [props.PasswordInput]);

  if (loading) return <Text>로딩중..</Text>;
  if (error) return <Text>에러가 발생했습니다</Text>;
  if (!users) return <Text>유저가 아닙니다</Text>;
  return <View></View>;
}

export default Users_login;

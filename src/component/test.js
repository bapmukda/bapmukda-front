import React, { useState, useEffect } from 'react';
import {View, Text} from 'react-native'
import axios from 'axios';

function Users() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError(null);
        setUsers(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const response = await axios.get(
            'http://ec2-54-180-32-86.ap-northeast-2.compute.amazonaws.com:8080/v1/goal/active'
            // 'http://ec2-54-180-32-86.ap-northeast-2.compute.amazonaws.com:8080/'
            // 'http://ec2-54-180-32-86.ap-northeast-2.compute.amazonaws.com:8080/swagger-ui.html#/meal-controller/getDailyMealHistoryUsingGET'
        //   'https://jsonplaceholder.typicode.com/users'
        );
        setUsers(response.data); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);

  if (loading) return <Text>로딩중..</Text>;
  if (error) return <Text>에러가 발생했습니다</Text>;
  if (!users) return null;
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
      <Text> {users} </Text>
      
    </View>
  );
}

export default Users;
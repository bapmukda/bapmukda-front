import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';

export default function AddMood(props) {
  const [HappinessLev, setHappinessLev] = useState(null);
  const [Memo, setMemo] = useState(null);
  const [createDate, setcreateDate] = useState(null);
  useEffect(() => {
    const fetchMood = async () => {
      try {
        const response = await axios({
          method: 'post',
          data: {
            happinessLevel: HappinessLev,
            memo: Memo,
            createdDate: createDate,
          },
          url: 'https://api.bapmukda.net/v1/mood',
          headers: {Authorization: 'Bearer 83e8a8c267f944f39583aa72674e5cac'},
        });
        setHappinessLev(response.data);
        setMemo(response.data);
        setcreateDate(response.data);
      } catch (e) {
        alert(e);
      }
    };
    fetchMood;
  }, []);
  return (
    <View>
      <Text></Text>
    </View>
  );
}

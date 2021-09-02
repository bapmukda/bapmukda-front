import React from 'react';

export default function RecordModal() {
  return (
    <div>
      <Modal
        isVisible={isModalVisible}
        style={{
          justifyContent: 'flex-end',
          margin: 0,
        }}
        transparent={true}
        coverScreen={false}
        backdropColor="rgba(r,g,b,a)"
        backdropOpacity={1}
        onBackdropPress={toggleModal}
        borderRadius={10}>
        <View
          style={{
            flex: 0.5,
            backgroundColor: 'white',
            top: '50%',
            justifyContent: 'space-around',
            alignItems: 'center',
            height: '50%',
            borderRadius: 10,
            shadowColor: 'rgb(196, 196, 196)',
            shadowOffset: {width: 0, height: 1},
            shadowOpacity: 1,
          }}>
          <Text style={{left: '-30%', fontSize: 20}}>
            {' '}
            {isMonth}월 {isDay}일 {isDate}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#ffffff',
              shadowOpacity: 1,
              shadowOffset: {width: 0, height: 1},
              width: '80%',
              height: '40%',
              shadowColor: 'rgb(196, 196, 196)',
              alignItems: 'center',
              borderRadius: 10,
            }}>
            <View
              style={{
                backgroundColor: '#FBFBFB',
                shadowOpacity: 1,
                shadowOffset: {width: 2, height: 2},
                width: '15%',
                height: '70%',
                margin: 20,
                shadowColor: 'rgb(196, 196, 196)',
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{textAlign: 'center', fontSize: 20}}>🍳</Text>
            </View>
            <Text style={{textAlign: 'center'}}>계란후라이</Text>
          </View>

          <Button title="Hide modal" onPress={toggleModal} />
        </View>
      </Modal>
    </div>
  );
}

import {View, Text} from 'react-native';
import React from 'react';

const NoDataFound = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30, color: 'black', fontWeight: '500'}}>
        No Data Found
      </Text>
      <Text
        style={{
          fontSize: 16,
          color: 'black',
          fontWeight: '500',
          marginTop: 18,
        }}>
        Click the Bellow Button for
      </Text>
      <Text
        style={{fontSize: 20, color: 'blue', fontWeight: '700', marginTop: 15}}>
        Api Call
      </Text>
    </View>
  );
};

export default NoDataFound;

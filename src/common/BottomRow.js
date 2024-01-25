import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import ContextApi from '../context/ContextApi';

const BottomRow = () => {
  const {array, AxiosCall} = useContext(ContextApi);

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 5,
      }}>
      <Text style={{fontSize: 18}}>
        Total Data : {array != null ? array.length : 0}
      </Text>
      <TouchableOpacity
        style={{
          padding: 5,
          paddingHorizontal: 30,
          borderRadius: 12,
          backgroundColor: '#50575680',
        }}
        onPress={() => AxiosCall()}>
        <Text style={{fontSize: 18, color: 'white'}}>Api Call</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomRow;

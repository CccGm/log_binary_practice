import {View, Text, TouchableOpacity} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import NoDataFound from '../common/NoDataFound';
import axios from 'axios';
import Indicator from '../common/ActivityIndicator';
import {useNavigation} from '@react-navigation/native';
import ContextApi from '../context/ContextApi';

const HomeScreen = () => {
  const {array, setArray, loading, setLoading} = useContext(ContextApi);
  const navigation = useNavigation();

  // useEffect(() => {
  //   AxiosCall();
  // }, []);

  // const AxiosCall = async () => {
  //   setLoading(true);
  //   await axios
  //     .post(
  //       'https://qaadmin.onzway.com/apis/get-orders-v3.json',

  //       {restaurant_id: '1', status: 4, page: 1, search: 'abc'},
  //     )
  //     .then(function (response) {
  //       setArray(response.data.data.orderInfo.orders);
  //       setLoading(false);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //       setLoading(false);
  //     });
  // };

  // const DeleteData = id => {
  //   const newData = [...array];
  //   const prevIndex = array.findIndex(item => item.order_id === id);
  //   newData.splice(prevIndex, 1);
  //   setArray(newData);
  // };

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          style={{
            width: '80%',
            borderRadius: 12,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#98629860',
            paddingVertical: 5,
          }}
          onPress={() => {
            navigation.navigate('Gesture');
          }}>
          <Text
            style={{
              fontSize: 16,
              padding: 10,
              color: 'white',
              fontWeight: '600',
            }}>
            Gesture Delete
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '80%',
            borderRadius: 12,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#98629860',
            marginTop: 20,
            paddingVertical: 5,
          }}
          onPress={() => {
            navigation.navigate('Swip');
          }}>
          <Text
            style={{
              fontSize: 16,
              padding: 10,
              color: 'white',
              fontWeight: '600',
            }}>
            Swipe Delete
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

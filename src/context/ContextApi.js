import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {ToastAndroid} from 'react-native';

const ContextApi = React.createContext();

export default ContextApi;

export const ContextProvider = ({children}) => {
  const [array, setArray] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    GetLocalData();
  }, []);

  const GetLocalData = async () => {
    try {
      const value = await AsyncStorage.getItem('localData');
      if (value !== null) {
        setArray(JSON.parse(value));
      }
    } catch (error) {
      console.log('Get Data error', error);
      ToastAndroid.show(error.message, ToastAndroid.SHORT);
    }
  };

  const SetLocalData = async data => {
    try {
      await AsyncStorage.setItem('localData', data);
    } catch (error) {
      // Error saving data
      console.log(error);
    }
  };

  const AxiosCall = async () => {
    setLoading(true);
    await axios
      .post(
        'https://qaadmin.onzway.com/apis/get-orders-v3.json',

        {restaurant_id: '1', status: 4, page: 1, search: 'abc'},
      )
      .then(function (response) {
        setArray(response.data?.data?.orderInfo?.orders);
        SetLocalData(JSON.stringify(response.data?.data?.orderInfo?.orders));
        setLoading(false);
      })
      .catch(function (error) {
        ToastAndroid.show(error.message, ToastAndroid.SHORT);
        setLoading(false);
      });
  };

  const DeleteData = id => {
    const newData = [...array];
    const prevIndex = array.findIndex(item => item.order_id === id);
    newData.splice(prevIndex, 1);
    setArray(newData);
    SetLocalData(JSON.stringify(newData));
  };

  return (
    <ContextApi.Provider
      value={{array, setArray, loading, setLoading, DeleteData, AxiosCall}}>
      {children}
    </ContextApi.Provider>
  );
};

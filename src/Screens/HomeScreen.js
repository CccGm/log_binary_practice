import {View, Text, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import ContextApi from '../context/ContextApi';

const HomeScreen = () => {
  const {loading} = useContext(ContextApi);
  const navigation = useNavigation();

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
        {loading ? (
          <Text
            style={{
              color: 'blue',
              fontSize: 16,
              marginTop: 30,
            }}>
            Data Is Loading .....
          </Text>
        ) : null}
      </View>
    </View>
  );
};

export default HomeScreen;

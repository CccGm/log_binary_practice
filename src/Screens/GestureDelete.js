import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import NoDataFound from '../common/NoDataFound';
import ReduceData from '../common/ReduceData';
import ContextApi from '../context/ContextApi';
import Indicator from '../common/ActivityIndicator';

const GestureDelete = () => {
  const {array, DeleteData, AxiosCall, loading} = useContext(ContextApi);

  return (
    <View style={{flex: 1}}>
      {loading == true ? (
        <Indicator />
      ) : array == null || '' ? (
        <NoDataFound />
      ) : (
        <FlatList
          data={array}
          renderItem={({item}) => (
            <ReduceData data={item} onSwipe={DeleteData} />
          )}
        />
      )}
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
    </View>
  );
};

export default GestureDelete;

import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import NoDataFound from '../common/NoDataFound';
import ReduceData from '../common/ReduceData';

const GestureDelete = ({array, buttonClick, DeleteData}) => {
  return (
    <View style={{flex: 1}}>
      {array == null || '' ? (
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
          onPress={() => buttonClick()}>
          <Text style={{fontSize: 18, color: 'white'}}>Api Call</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GestureDelete;

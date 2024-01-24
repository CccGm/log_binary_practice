import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import NoDataFound from '../common/NoDataFound';
import ReduceData from '../common/ReduceData';
import {SwipeListView} from 'react-native-swipe-list-view';
import ReduceHiddenData from '../common/ReduceHiddenData';

const Test = ({array, buttonClick, DeleteData}) => {
  return (
    <View style={{flex: 1}}>
      {array == null || '' ? (
        <NoDataFound />
      ) : (
        <SwipeListView
          data={array}
          renderItem={({item}) => <ReduceData data={item} />}
          keyExtractor={item => item.order_id}
          renderHiddenItem={(data, roadMap) => (
            <ReduceHiddenData
              data={data.item}
              onSwipe={DeleteData}
              roadMap={roadMap}
            />
          )}
          leftOpenValue={100}
          rightOpenValue={-100}
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

const styles = StyleSheet.create({
  rightAction: {
    marginHorizontal: 10,
    backgroundColor: 'white',
    elevation: 4,
    borderRadius: 10,
    padding: 5,
    paddingLeft: 20,
    paddingVertical: 10,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
  },
});

export default Test;

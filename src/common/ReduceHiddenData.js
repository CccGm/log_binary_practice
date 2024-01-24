import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';

const ReduceHiddenData = ({data, onSwipe, roadMap}) => {
  const close = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <TouchableOpacity
        style={[styles.rightAction, {backgroundColor: '#bfbfbf'}]}
        onPress={() => {
          Alert.alert('Info', JSON.stringify(data, null, 2));
          close(roadMap, data.order_id);
        }}>
        <Text style={styles.text}>Info</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{flex: 1}}></TouchableOpacity>
      <TouchableOpacity
        style={[styles.rightAction, {backgroundColor: 'red'}]}
        onPress={() => {
          close(roadMap, data.order_id);
          onSwipe(data.order_id);
        }}>
        <Text style={styles.text}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  rightAction: {
    marginHorizontal: 10,
    borderRadius: 10,
    padding: 5,
    paddingLeft: 20,
    paddingVertical: 10,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: 100,
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
});

export default ReduceHiddenData;

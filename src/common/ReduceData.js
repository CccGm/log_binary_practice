import {Text} from 'react-native';
import React from 'react';
import GestureRecognizer from 'react-native-swipe-gestures';

const ReduceData = ({data, onSwipe}) => {
  return (
    <GestureRecognizer
      onSwipeLeft={() => onSwipe(data.order_id)}
      onSwipeRight={() => onSwipe(data.order_id)}
      style={{
        marginHorizontal: 10,
        backgroundColor: 'white',
        elevation: 4,
        borderRadius: 10,
        padding: 5,
        paddingLeft: 20,
        paddingVertical: 10,
        marginVertical: 5,
      }}>
      <Text>ID : {data.order_id}</Text>
      <Text>Seq No :{data.sequence_no}</Text>
      <Text>Order Type :{data.order_type}</Text>
      <Text>Date : {data.expected_date}</Text>
    </GestureRecognizer>
  );
};

export default ReduceData;

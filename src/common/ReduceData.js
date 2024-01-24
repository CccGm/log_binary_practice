import {Text} from 'react-native';
import React from 'react';
import GestureRecognizer from 'react-native-swipe-gestures';

const ReduceData = ({data, onSwipe}) => {
  const DATE = date => {
    const today = new Date(date);
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const formattedToday = dd + '/' + mm + '/' + yyyy;
    return formattedToday;
  };

  function isPrime(number) {
    if (number < 2) {
      return 'false';
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return 'false';
      }
    }

    return 'true';
  }

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
      <Text>
        ID : {'               '}
        {data.order_id}
      </Text>
      <Text>
        Seq No :{'       '}
        {data.sequence_no} {'   -->   '}
        <Text style={{fontSize: 14, color: '#465315'}}>
          {' '}
          IsPrime : {isPrime(data.sequence_no)}
        </Text>
      </Text>
      <Text>
        Type :{'           '}
        {data.order_type}
      </Text>
      <Text>
        Date :{'           '} {DATE(data.expected_date)}
      </Text>
    </GestureRecognizer>
  );
};

export default ReduceData;

import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import axios from 'axios';
import ReduceData from './src/common/ReduceData';
import Indicator from './src/common/ActivityIndicator';
import NoDataFound from './src/common/NoDataFound';

function App() {
  const [onlineData, setOnlineData] = useState(null);
  const [array, setArray] = useState(null);
  const [loadind, setLoading] = useState(false);

  useEffect(() => {
    AxiosCall();
  }, []);

  const AxiosCall = async () => {
    setLoading(true);
    await axios
      .post(
        'https://qaadmin.onzway.com/apis/get-orders-v3.json',

        {restaurant_id: '1', status: 4, page: 1, search: 'abc'},
      )
      .then(function (response) {
        setOnlineData(response.data);
        setArray(response.data.data.orderInfo.orders);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);
      });
  };

  const DeleteData = id => {
    const newData = [...array];
    const prevIndex = array.findIndex(item => item.order_id === id);
    newData.splice(prevIndex, 1);
    setArray(newData);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#f3efef'}}>
      {loadind == true ? (
        <Indicator />
      ) : (
        <View style={{flex: 1}}>
          {onlineData == null || '' ? (
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
      )}
    </SafeAreaView>
  );
}

export default App;

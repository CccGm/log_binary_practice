import {View, FlatList} from 'react-native';
import React, {useContext} from 'react';
import NoDataFound from '../common/NoDataFound';
import ReduceData from '../common/ReduceData';
import ContextApi from '../context/ContextApi';
import Indicator from '../common/ActivityIndicator';
import BottomRow from '../common/BottomRow';

const GestureDelete = () => {
  const {array, DeleteData, loading} = useContext(ContextApi);

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
      <BottomRow />
    </View>
  );
};

export default GestureDelete;

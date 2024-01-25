import React, {useContext} from 'react';
import {View} from 'react-native';
import NoDataFound from '../common/NoDataFound';
import ReduceData from '../common/ReduceData';
import {SwipeListView} from 'react-native-swipe-list-view';
import ReduceHiddenData from '../common/ReduceHiddenData';
import ContextApi from '../context/ContextApi';
import Indicator from '../common/ActivityIndicator';
import BottomRow from '../common/BottomRow';

const SwipDelete = () => {
  const {array, DeleteData, loading} = useContext(ContextApi);

  return (
    <View style={{flex: 1}}>
      {loading == true ? (
        <Indicator />
      ) : array == null || '' ? (
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
          previewRowKey={'0'}
          previewOpenValue={-40}
          previewOpenDelay={2000}
        />
      )}
      <BottomRow />
    </View>
  );
};

export default SwipDelete;

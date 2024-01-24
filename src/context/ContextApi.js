import axios from 'axios';
import React, {useEffect, useState} from 'react';

const ContextApi = React.createContext();

export default ContextApi;

export const ContextProvider = ({children}) => {
  const [array, setArray] = useState(null);
  const [loading, setLoading] = useState(false);

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
    <ContextApi.Provider
      value={{array, setArray, loading, setLoading, DeleteData, AxiosCall}}>
      {children}
    </ContextApi.Provider>
  );
};

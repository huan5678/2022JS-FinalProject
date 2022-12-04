import React, {createContext, useContext} from 'react';
import useAxios from '../hooks/useAxios';
import {adminOrderAxios} from '../apis/adminOrderApi';

const BackEndContext = createContext();

export const BackendContextProvider = ({children}) => {

  const {data: orderData, error: orderDataError, loading: orderLoading, axiosFetch} = useAxios();

  const handleUpdateAdminOrder = (id, value, type = 'get') => {
    axiosFetch({
      axiosInstance: adminOrderAxios,
      method:
        type === 'get'
          ? 'GET'
          : type === 'delete'
          ? 'DELETE'
          : type === 'deleteAll'
          ? 'DELETE'
          : type === 'post'
          ? 'POST'
          : type === 'put'
          ? 'PUT'
          : 'PATCH',
      url: type === 'delete' ? id : null,
      requestConfig: {
        data: {
          id,
          quantity: type === 'add' ? (value += 1) : type === 'remove' ? (value -= 1) : value,
          productId: type === 'post' ? id : null,
          paid: type === 'put' ? value : null,
        },
      },
    });
  };

  return (
    <BackEndContext.Provider
      value={{
        handleUpdateAdminOrder,
        orderData,
        orderDataError,
        orderLoading,
      }}
    >
      {children}
    </BackEndContext.Provider>
  );
};

export const useBackEndContext = () => useContext(BackEndContext);

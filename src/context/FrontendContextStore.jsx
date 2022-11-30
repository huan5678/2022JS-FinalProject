import React, {createContext, useState, useContext} from 'react';
import useAxios from '../hooks/useAxios';
import {cartAxios} from '../apis/cartApi';

const frontEndContext = createContext();

export const FrontendContextProvider = ({children}) => {
  const [ cartData, setCartData ] = useState([]);
  const [ productsData, setProductsData ] = useState([]);
  const [ cartTotal, setCartTotal ] = useState(0);
  const [ cartFinalTotal, setCartFinalTotal ] = useState(0);
  const {data: updateCartData, error: cartDataError, loading: cartLoading, axiosFetch} = useAxios();

  const handleUpdateChart = (id, qty, type) => {
    axiosFetch({
      axiosInstance: cartAxios,
      method:
        type === 'get'
          ? 'GET'
          : type === 'delete'
          ? 'DELETE'
          : type === 'deleteAll'
          ? 'DELETE'
          : type === 'post'
          ? 'POST'
          : 'PATCH',
      url: type === 'delete' ? id : null,
      requestConfig: {
        data: {
          id,
          quantity: type === 'add' ? (qty += 1) : type === 'remove' ? (qty -= 1) : qty,
          productId: type === 'post' ? id : null,
        },
      },
    });
  };

  return (
    <frontEndContext.Provider
      value={{
        cartData,
        setCartData,
        productsData,
        setProductsData,
        cartTotal,
        setCartTotal,
        cartFinalTotal,
        setCartFinalTotal,
        handleUpdateChart,
        updateCartData,
        cartDataError,
        cartLoading,
      }}
    >
      {children}
    </frontEndContext.Provider>
  );
};

export const useFrontEndContext = () => useContext(frontEndContext);


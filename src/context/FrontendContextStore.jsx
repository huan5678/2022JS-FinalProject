import React, {createContext, useState, useContext} from 'react';
import useAxios from '../hooks/useAxios';
import {cartAxios} from '../apis/cartApi';
import {customOrderAxios} from '../apis/customOrderApi';

const FrontEndContext = createContext();

export const FrontendContextProvider = ({children}) => {
  const [ cartData, setCartData ] = useState([]);
  const [ productsData, setProductsData ] = useState([]);
  const [ cartTotal, setCartTotal ] = useState(0);
  const [ cartFinalTotal, setCartFinalTotal ] = useState(0);
  const {data: updateCartData, error: cartDataError, loading: cartLoading, axiosFetch: cartFetchAxios} = useAxios();
  const {data: customOrderData, error: customOrderDataError, loading: customOrderLoading, axiosFetch: axiosFetchCustomOrder} = useAxios();

  const handleUpdateChart = (id, qty, type = 'get') => {
    cartFetchAxios({
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

  const handlePostCustomOrder = (data) => {
    axiosFetchCustomOrder({
      axiosInstance: customOrderAxios,
      method: 'POST',
      requestConfig: {
        data,
      },
    });
  };

  return (
    <FrontEndContext.Provider
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
        handlePostCustomOrder,
        customOrderData,
        customOrderDataError,
        customOrderLoading,
      }}
    >
      {children}
    </FrontEndContext.Provider>
  );
};

export const useFrontEndContext = () => useContext(FrontEndContext);


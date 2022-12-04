import React, {useEffect} from 'react'
import Title from '../components/Title';
import {useFrontEndContext} from '../context/FrontendContextStore';
import {useNumberWithCommas} from '../hooks/useNumberWithCommas';
import CartButton from '../components/CartButton';

export const CartSection = () => {
  const {
    cartData,
    setCartData,
    cartFinalTotal,
    setCartFinalTotal,
    handleUpdateChart,
    updateCartData,
  } = useFrontEndContext();
  const title = '我的購物車';

  useEffect(() => {
    handleUpdateChart();
  }, []);
  useEffect(() => {
    handleUpdateChart();
    if (updateCartData) {
      setCartData(updateCartData.carts);
      setCartFinalTotal(updateCartData.finalTotal);
    }
  }, [ updateCartData ]);

  return cartData.length > 0 && (
    <section className="bg-light pt-12 pb-[4.375rem] select-none text-h3">
      <Title className="mb-8" content={title} />
      <div className="flex flex-col w-10/12 mx-auto">
        <table className="mb-5">
          <thead>
            <tr>
              <th className="pb-5 mr-auto font-normal text-left">品項</th>
              <th className="font-normal text-left">單價</th>
              <th className="font-normal text-left">數量</th>
              <th className="font-normal text-left">金額</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cartData?.map((list) => {
              return (
                <tr className="border-b border-[#BFBFBF]" key={list.product.id}>
                  <td className="pb-5 w-[25%]">
                    <div className="flex items-center gap-4 pt-5">
                      <img
                        className="object-cover h-20 aspect-square"
                        src={list.product.images}
                        alt={list.product.title}
                      />
                      <span>{list.product.title}</span>
                    </div>
                  </td>
                  <td className="w-[20%]">{useNumberWithCommas(list.product.price)}</td>
                  <td className="w-[20%]">{list.quantity}</td>
                  <td className="w-[20%]">
                    {useNumberWithCommas(list.product.price * list.quantity)}
                  </td>
                  <td className="w-4/12">
                    <div className="flex items-center justify-end gap-4">
                      <CartButton id={list.id} qty={list.quantity} type="add" icon="add" />
                      <CartButton
                        id={list.id}
                        qty={list.quantity}
                        type="remove"
                        icon="remove"
                      />
                      <CartButton id={list.id} qty={null} type="delete" icon="delete" />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="flex justify-between w-full">
          <CartButton
            className="outline outline-1 outline-black rounded transition duration-300 text-center py-2.5 px-5
            hover:bg-black hover:text-white"
            id={cartData?.id}
            type="deleteAll"
          >
            刪除所有品項
          </CartButton>
          <div className="flex items-center gap-14">
            <span>總金額</span>
            <span className="text-h2">NT${useNumberWithCommas(cartFinalTotal)}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CartSection;

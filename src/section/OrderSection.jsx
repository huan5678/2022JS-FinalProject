import React, {useEffect, useState, useMemo} from 'react';
import {useBackEndContext} from '../context/BackendContextStore';
import {useDate} from '../hooks/useDate';

export const OrderSection = () => {
  const {orderData, handleUpdateAdminOrder} = useBackEndContext();

  const tableLayout = useMemo(() => {
    return [
      '訂單編號',
      '聯絡人',
      '聯絡地址',
      '電子郵件',
      '訂單品項',
      '訂單日期',
      '訂單狀態',
      '操作',
    ];
  }, []);

  useEffect(() => {
    handleUpdateAdminOrder();
  }, []);

  return (
    orderData && (
      <div className="flex flex-col items-end gap-3 pb-[6.75rem]">
        <button
          className="outline outline-1 outline-black rounded transition duration-300 text-center py-2.5 px-5
            hover:bg-black hover:text-white"
          onClick={() => handleUpdateAdminOrder(null, null, 'deleteAll')}
        >
          清除全部訂單
        </button>
        <table>
          <thead>
            <tr>
              {tableLayout.map((item) => {
                return (
                  <th className="px-4 py-3 font-normal text-left border" key={item}>
                    {item}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {orderData.orders?.map((order) => {
              return (
                <tr className="border-b border-[#BFBFBF]" key={order.id}>
                  <td className="px-4 py-3 border">{order.id}</td>
                  <td className="px-4 py-3 border">
                    {order.user.name}
                    <br />
                    {order.user.tel}
                  </td>
                  <td className="px-4 py-3 border">{order.user.address}</td>
                  <td className="px-4 py-3 border">{order.user.email}</td>
                  <td className="px-4 py-3 border">
                    {order.products.map((item) => (
                      <p key={item.id}>{item.title}</p>
                    ))}
                  </td>
                  <td className="px-4 py-3 border">{useDate(order.createdAt * 1000)}</td>
                  <td className="px-4 py-3 border">
                    <p
                      className="cursor-pointer whitespace-nowrap"
                      onClick={() => handleUpdateAdminOrder(order.id, !order.paid, 'put')}
                    >
                      {order.paid ? '已處例' : '未處理'}
                    </p>
                  </td>
                  <td className="p-1 text-center border">
                    <button
                      className="p-2 text-center transition duration-300 rounded outline outline-1 outline-danger text-danger hover:bg-danger hover:text-white"
                      onClick={() => handleUpdateAdminOrder(order.id, null, 'delete')}
                    >
                      刪除
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    )
  );
};

export default OrderSection;

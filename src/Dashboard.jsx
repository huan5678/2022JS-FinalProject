import React, {useEffect} from 'react'
import ChartSection from './section/ChartSection'
import OrderSection from './section/OrderSection';
import NavBar from './section/NavBar';
import {useBackEndContext} from './context/BackendContextStore';

export default function Dashboard() {
  const {orderData, handleUpdateAdminOrder} = useBackEndContext();
    useEffect(() => {
      handleUpdateAdminOrder(null, null, 'get');
    }, []);

  return (
    <>
      <NavBar isAdmin="true" />
      <section className="pt-[3.75rem] container">
        <ChartSection />
        <OrderSection />
      </section>
    </>
  )
}

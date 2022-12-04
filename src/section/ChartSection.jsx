import React, {useEffect, useState, useMemo, useCallback} from 'react';
import {Pie} from 'react-chartjs-2';
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {useBackEndContext} from '../context/BackendContextStore';
import Title from '../components/Title';

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  responsive: true,
  maintainAspectRatio: true,
  devicePixelRatio: 1,
  width: '60%',
  height: '60%',
  plugins: {
    decimation: {
      enabled: true,
    },
    legend: {
      position: 'bottom',
      labels: {
        padding: 16,
        pointStyle: 'rect',
        usePointStyle: true,
      },
    },
    datalabels: {
      labels: {
        value: {
          align: 'bottom',
          backgroundColor: function (ctx) {
            return ctx.dataset.backgroundColor;
          },
          borderColor: 'white',
          borderWidth: 2,
          borderRadius: 4,
          color: '#F8F8F8',
          formatter: function (value, ctx) {
            let datasets = ctx.chart.data.datasets;
            let sum = datasets[0].data.reduce((a, b) => a + b, 0);
            return ctx.active
              ? Math.round(value * 1000) / 1000
              : `${Math.round((value / sum) * 100)} %`;
          },
          padding: 4,
        },
        name: {
          align: 'top',
          color: '#F8F8F8',
          padding: 4,
          font: {size: 24},
          formatter: function (value, ctx) {
            return ctx.chart.data.labels[ctx.dataIndex];
          },
        },
      },
    },
  },
};

export const ChartSection = () => {
  const {orderData} = useBackEndContext();
  const typeData = useMemo(() => [{type: '全產品類別營收比重'}, {type: '全品項營收比重'}], []);

  const chartBackgroundColor = useMemo(() => ['#DACBFF', '#9D7FEA', '#5434A7', '#301E5F'], []);

  const [selectChartType, setSelectChartType] = useState('全產品類別營收比重');
  const [pieData, setPieData] = useState({
    labels: [],
    data: [],
  });
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {},
    ],
  });

  const CountSalesData = (ordersList) => {
    let paidData = ordersList.filter((item) => item.paid == true).map((item) => item.products);
    let paidDataList = [];
    paidData.forEach((item) => {
      item.forEach((item2) => {
        paidDataList.push(item2);
      });
    });
    return paidDataList;
  };

  const setData = useCallback((labels, data) => {
    setPieData({labels, data});
  }, []);

  const handleChartData = (type, data) => {
    const productList = data.map((item) => item.category);
    let category = [];
    let priceData = [];
    if (type === '全產品類別營收比重') {
      let filterPaidData = {};
      category = [...new Set(productList)];
      data.forEach((item) => {
        if (filterPaidData[item.category]) {
          filterPaidData[item.category] += item.price;
        } else {
          filterPaidData[item.category] = item.price;
        }
      });
      Object.values(filterPaidData).forEach((item) => {
        priceData.push(item);
      });
    } else {
      let paidItems = {};
      data.forEach((item) => {
        paidItems[item.title] == undefined ? (paidItems[item.title] = 0) : null;
      });
      data.forEach((item) => {
        paidItems[item.title] === 0
          ? (paidItems[item.title] = item.price)
          : (paidItems[item.title] += item.price);
      });
      let priceArr = [];
      let result = Object.entries(paidItems).map(([key, value]) => {
        return {name: key, price: value};
      });
      result.forEach((item) => {
        priceArr.push(item.price);
      });
      priceArr.sort((a, b) => b - a);
      priceArr.length = 3;
      let otherPrice = 0;
      result.forEach((item) => {
        priceArr.forEach((item2) => {
          if (item.price === item2) {
            category.push(item.name);
            priceData.push(item.price);
          } else {
            otherPrice += item.price;
          }
        });
      });
      category.push('其他');
      priceData.push(otherPrice);
    }
    setData(category, priceData);
  };

  useEffect(() => {
    let paidData = orderData && CountSalesData(orderData.orders);
    orderData && handleChartData(selectChartType, paidData);
  }, [ selectChartType, orderData ]);
  useEffect(() => {
    pieData &&
      setChartData({
        labels: pieData.labels,
        datasets: [
          {
            data: pieData.data,
            backgroundColor: chartBackgroundColor,
            borderWidth: 0,
          },
        ],
      });
  }, [pieData]);

  return (
    <>
      <div className="relative flex items-end justify-center gap-2 mb-[6.125rem]">
        {typeData.map((item, index) =>
          item.type === selectChartType ? (
            <Title key={item.type} content={item.type} />
          ) : (
            <button
              key={item.type}
              className="absolute text-center transition duration-300 -translate-x-[125%] -translate-y-1/2 border-b left-3/4 w-max top-1/2 border-secondary text-secondary/50 hover:border-transparent hover:text-primary"
              onClick={() => setSelectChartType(item.type)}
            >
              {item.type}
            </button>
          )
        )}
      </div>
      <div className="grid place-content-center mb-14">
        <div className="h-96 w-96">
          <Pie data={chartData} options={options} plugins={[ChartDataLabels]} />
        </div>
      </div>
    </>
  );
};

export default ChartSection;

import React, { useEffect, useState } from 'react';
import * as echarts from 'echarts';
import { getPhoneTopListApi } from '../../api';

const PriceRangeChart = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    getPhoneTopListApi().then(res => {
      console.log(res.data)
      setData(res.data.map(item => ({
        phone: item['标题'].slice(0, 10),
        price: item['价格'] || item['信息1'],
        sales: item['销量']
      })))
    })
  }, [])

  useEffect(() => {
    const chartDom = document.getElementById('priceRangeChart');
    const myChart = echarts.init(chartDom);

    const phoneNames = data.map(item => item.phone);
    const prices = data.map(item => item.price);
    const sales = data.map(item => item.sales);

    const option = {
      title: {
        text: '销量和价格关系',
        textStyle: {
          color: '#333',
          fontSize: 18,
          fontWeight: 'bold'
        },
        left: 'center'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        },
        formatter: params => {
          const dataIndex = params[0].dataIndex;
          const phoneName = phoneNames[dataIndex];
          const price = prices[dataIndex];
          const sale = sales[dataIndex];
          return `${phoneName}<br>销量：${sale}<br>价格：${price}元`;
        }
      },
      legend: {
        data: ['价格'],
        top: 50
      },
      grid: {
        top: 100,
        left: '5%',
        right: '5%',
        bottom: 30
      },
      xAxis: {
        type: 'category',
        data: phoneNames,
        axisLine: {
          lineStyle: {
            color: '#999',
            width: 1.5
          }
        },
        axisLabel: {
          fontSize: 12,
          color: '#666',
          fontFamily: 'Arial',
        }
      },
      yAxis: {
        type: 'value',
        name: '价格',
        axisLine: {
          lineStyle: {
            color: '#999',
            width: 1.5
          }
        },
        axisLabel: {
          fontSize: 12,
          color: '#666',
          fontFamily: 'Arial',
        },
        splitLine: {
          lineStyle: {
            color: '#e5e5e5'
          }
        }
      },
      series: [
        {
          name: '价格',
          type: 'line',
          data: prices,
          itemStyle: {
            color: '#0062ff'
          },
          lineStyle: {
            width: 3,
            color: '#0062ff'
          },
          symbol: 'circle',
          symbolSize: 10,
          markPoint: {
            data: [
              { type: 'max', name: '最大值' },
              { type: 'min', name: '最小值' }
            ]
          }
        }
      ]
    };

    myChart.setOption(option);

    return () => {
      myChart.dispose();
    };
  }, [data]);

  return <div id="priceRangeChart" style={{ width: '100%', height: '400px', border: '1px solid #ccc', borderRadius: '4px' }} />;
};

export default PriceRangeChart;
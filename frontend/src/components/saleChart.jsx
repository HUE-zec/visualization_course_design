import React, { useEffect } from 'react';
import * as echarts from 'echarts';

const PhoneSalesChart = ({ data }) => {
  useEffect(() => {
    const chartDom = document.getElementById('phoneSalesChart');
    const myChart = echarts.init(chartDom);

    const myColor = ['#eb2100', '#eb3600', '#d0570e', '#d0a00e', '#34da62', '#00e9db', '#00c0e9', '#0096f3', '#33CCFF', '#33FFCC'];
    const option = {
      backgroundColor: '#0e2147',
      grid: {
        left: '11%',
        top: '12%',
        right: '0%',
        bottom: '8%',
        containLabel: true
      },
      xAxis: [{
        show: false,
      }],
      yAxis: [{
        axisTick: 'none',
        axisLine: 'none',
        offset: '124',
        axisLabel: {
          textStyle: {
            color: '#ffffff',
            fontSize: '16',
          }
        },
        data: data.map(item => item['标题'].slice(0, 40) + '...')
      }, {
        axisTick: 'none',
        axisLine: 'none',
        axisLabel: {
          textStyle: {
            color: '#ffffff',
            fontSize: '16',
          }
        },
        data: ['10', '9', '8', '7', '6', '5', '4', '3', '2', '1']
      }, {
        name: '手机销量TOP 10',
        nameGap: '50',
        nameTextStyle: {
          color: '#ffffff',
          fontSize: '16',
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(0,0,0,0)'
          }
        },
        data: [],
      }],
      series: [{
        name: '销量',
        type: 'bar',
        yAxisIndex: 0,
        data: data.map(item => item['销量']).toReversed(),
        label: {
          normal: {
            show: true,
            position: 'right',
            textStyle: {
              color: '#ffffff',
              fontSize: '16',
            }
          }
        },
        barWidth: 12,
        itemStyle: {
          normal: {
            color: function (params) {
              var num = myColor.length;
              return myColor[params.dataIndex % num]
            },
          }
        },
        z: 2
      }, {
        name: '白框',
        type: 'bar',
        yAxisIndex: 1,
        barGap: '-100%',
        data: [99, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5],
        barWidth: 20,
        itemStyle: {
          normal: {
            color: '#0e2147',
            barBorderRadius: 5,
          }
        },
        z: 1
      }, {
        name: '外框',
        type: 'bar',
        yAxisIndex: 2,
        barGap: '-100%',
        data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
        barWidth: 24,
        itemStyle: {
          normal: {
            color: function (params) {
              var num = myColor.length;
              return myColor[params.dataIndex % num]
            },
            barBorderRadius: 5,
          }
        },
        z: 0
      },
      {
        name: '外圆',
        type: 'scatter',
        hoverAnimation: false,
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        yAxisIndex: 2,
        symbolSize: 35,
        itemStyle: {
          normal: {
            color: function (params) {
              var num = myColor.length;
              return myColor[params.dataIndex % num]
            },
            opacity: 1,
          }
        },
        z: 2
      }
      ]
    };

    myChart.setOption(option);
  }, [data]);

  return <div id="phoneSalesChart" style={{ width: '100%', height: 600 }} />;
};

export default PhoneSalesChart;
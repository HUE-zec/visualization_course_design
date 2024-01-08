import React, { useState } from 'react'
import { useEffect, useRef } from 'react';
import * as echarts from 'echarts/core';
import { TitleComponent, TooltipComponent } from 'echarts/components';
import { ScatterChart, EffectScatterChart } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import 'echarts/extension/bmap/bmap';
import location from '../../public/location.png'
import { getLocationCounts } from '../../api';

const Chart = ({ data }) => {
  const chartRef = useRef();

  useEffect(() => {
    const myChart = echarts.init(chartRef.current);

    const option = {
      title: {
        text: '地理位置频次扇形图',
        left: 'center',
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
      },
      legend: {
        orient: 'vertical',
        left: 'left',
      },
      series: [
        {
          name: '地理位置',
          type: 'pie',
          radius: '55%',
          center: ['50%', '60%'],
          data: data.map(item => ({
            name: item['地理位置'],
            value: item['频次'],
          })),
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    };

    myChart.setOption(option);

    return () => {
      myChart.dispose();
    };
  }, [data]);

  return <div ref={chartRef} style={{ width: '100%', height: 600 }} />;
};

export default function Location () {
  const [data, setData] = useState([])
  useEffect(() => {
    getLocationCounts().then(res => {
      setData(res.data)
    })
  }, [])
  return (
    <div style={{ display: 'flex', gap: '16px' }}>
      <img src={location} style={{ borderRadius: '10px' }} />
      <div style={{ border: '1px solid #e1e2f2', width: '800px', height: '600px', borderRadius: '10px', padding: '24px' }}>
        <Chart data={data} />
      </div>
    </div>
  )
}

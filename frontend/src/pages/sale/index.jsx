import React from 'react'
import BarChart from '../../components/barChart'
import { Tabs } from 'antd';
import Phone from './phone';
import Computer from './computer';

export default function Sale () {
  const items = [
    {
      key: 'phone',
      label: '手机销量统计',
      children: <Phone />,
    },
    {
      key: 'computer',
      label: '电脑',
      children: <Computer />
    },
    {
      key: '3',
      label: 'Tab 3',
      children: 'Content of Tab Pane 3',
    },
  ];
  const onChange = () => { }
  return (
    <div style={{ minHeight: '400px' }}>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;

    </div>
  )
}

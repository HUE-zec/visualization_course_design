import React from 'react'
import BarChart from '../../components/barChart'
import { Tabs } from 'antd';

export default function Sale () {
  const items = [
    {
      key: 'phone',
      label: '销量统计',
      children: <BarChart />,
    },
    {
      key: '2',
      label: 'Tab 2',
      children: 'Content of Tab Pane 2',
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

import React from 'react'
import BarChart from '../../components/barChart'
import { Tabs } from 'antd';
import Phone from './phone';
import Computer from './computer';
import Nvzhuang from './nvzhuang';
import Food from './food'
import PriceRangeChart from './PriceRangeChart';

export default function Sale () {
  const items = [
    {
      key: 'phone',
      label: '手机',
      children: <Phone />,
    },
    {
      key: 'computer',
      label: '电脑',
      children: <Computer />
    },
    {
      key: 'nvzhuang',
      label: '女装',
      children: <Nvzhuang />,
    },
    {
      key: 'food',
      label: '食品',
      children: <Food />
    },
    {
      key: 'priceRange',
      label: '热销商品价格带',
      children: <PriceRangeChart />
    }
  ];
  const onChange = () => { }
  return (
    <div style={{ minHeight: '400px' }}>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  )
}

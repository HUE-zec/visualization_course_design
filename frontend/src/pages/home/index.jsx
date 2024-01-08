import React from 'react';
import { Layout, Menu } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom'
const { Header, Content, Footer } = Layout;

const items = [
  {
    label: '苏宁易购热销数据',
    key: 'suningSale',
  },
  {
    label: '淘宝首页数据',
    key: 'taobao'
  },
  {
    label: '商家地区分布',
    key: 'location'
  }
]

const Home = () => {
  const navigate = useNavigate()
  return (
    <Layout className="home" style={{ backgroundColor: '#f1f2f9', height: '150vh' }}>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          height: '87px',
          backgroundColor: '#fff',
          padding: '24px'
        }}
      >
        <div className="demo-logo" />
        <h1 style={{ color: '#0062FF', fontSize: '20px', fontWeight: '600', marginRight: '24px' }}>电商大数据可视化系统</h1>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['sale']}
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={(e) => {
            console.log(e.key)
            navigate(`${e.key}`)
          }}
        />
      </Header>
      <Content
        style={{
          margin: '24px',
          background: '#fff',
          borderRadius: '10px',
          padding: 24,
        }}
      >
        <Outlet />
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Created by zhouenchao & liziyi @数据分析与可视化课设
      </Footer>
    </Layout>
  );
};
export default Home;
import React, { useEffect, useState } from 'react'
import * as echarts from 'echarts'
import 'echarts-wordcloud';
import { getBottom100KeywordsListApi, getTop100KeywordsListApi, getTop20KeywordsListApi } from '../../api';
import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';

const WordCloud1 = ({ data, id }) => {
  useEffect(() => {
    // 初始化echarts实例
    const chartDom = document.getElementById('wordCloud1');
    const myChart = echarts.init(chartDom);

    // 配置词云图表
    const option = {
      series: [{
        type: 'wordCloud',
        shape: 'circle',
        left: 'center',
        top: 'center',
        width: '50%',
        height: '50%',
        right: null,
        bottom: null,
        sizeRange: [12, 60],
        rotationRange: [-90, 90],
        rotationStep: 45,
        gridSize: 8,
        drawOutOfBound: false,
        textStyle: {
          normal: {
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
            color: function () {
              return 'rgb(' + [
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160)
              ].join(',') + ')';
            }
          },
          emphasis: {
            shadowBlur: 10,
            shadowColor: '#333'
          }
        },
        data: data
      }]
    };

    // 使用 options 配置绘制词云
    myChart.setOption(option);

    // 组件销毁时，销毁echarts实例
    return () => {
      myChart.dispose();
    };
  }, [data]);

  return <div id="wordCloud1" style={{ width: '300px', height: '400px' }} />;
};

const WordCloud2 = ({ data, id }) => {
  console.log(2, data)
  useEffect(() => {
    // 初始化echarts实例
    const chartDom = document.getElementById('wordCloud2');
    const myChart = echarts.init(chartDom);

    // 配置词云图表
    const option = {
      series: [{
        type: 'wordCloud',
        shape: 'circle',
        left: 'center',
        top: 'center',
        width: '50%',
        height: '50%',
        right: null,
        bottom: null,
        sizeRange: [14, 16],
        rotationRange: [-90, 90],
        rotationStep: 45,
        gridSize: 8,
        drawOutOfBound: false,
        textStyle: {
          normal: {
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
            color: function () {
              return 'rgb(' + [
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160)
              ].join(',') + ')';
            }
          },
          emphasis: {
            shadowBlur: 10,
            shadowColor: '#333'
          }
        },
        data: data
      }]
    };

    // 使用 options 配置绘制词云
    myChart.setOption(option);

    // 组件销毁时，销毁echarts实例
    return () => {
      myChart.dispose();
    };
  }, [data]);

  return <div id="wordCloud2" style={{ width: '300px', height: '400px' }} />;
};

const WordCloud3 = ({ data, id }) => {
  useEffect(() => {
    // 初始化echarts实例
    const chartDom = document.getElementById('wordcloud3');
    const myChart = echarts.init(chartDom);

    // 配置词云图表
    const option = {
      series: [{
        type: 'wordCloud',
        shape: 'circle',
        left: 'center',
        top: 'center',
        width: '50%',
        height: '50%',
        right: null,
        bottom: null,
        sizeRange: [14, 16],
        rotationRange: [-90, 90],
        rotationStep: 45,
        gridSize: 8,
        drawOutOfBound: false,
        textStyle: {
          normal: {
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
            color: function () {
              return 'rgb(' + [
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160)
              ].join(',') + ')';
            }
          },
          emphasis: {
            shadowBlur: 10,
            shadowColor: '#333'
          }
        },
        data: data
      }]
    };

    // 使用 options 配置绘制词云
    myChart.setOption(option);

    // 组件销毁时，销毁echarts实例
    return () => {
      myChart.dispose();
    };
  }, [data]);

  return <div id="wordcloud3" style={{ width: '300px', height: '400px' }} />;
};

const WordCloud4 = ({ data, id }) => {
  useEffect(() => {
    // 初始化echarts实例
    const chartDom = document.getElementById('wordcloud4');
    const myChart = echarts.init(chartDom);

    // 配置词云图表
    const option = {
      series: [{
        type: 'wordCloud',
        shape: 'circle',
        left: 'center',
        top: 'center',
        width: '50%',
        height: '50%',
        right: null,
        bottom: null,
        sizeRange: [12, 60],
        rotationRange: [-90, 90],
        rotationStep: 45,
        gridSize: 8,
        drawOutOfBound: false,
        textStyle: {
          normal: {
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
            color: function () {
              return 'rgb(' + [
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160)
              ].join(',') + ')';
            }
          },
          emphasis: {
            shadowBlur: 10,
            shadowColor: '#333'
          }
        },
        data: data
      }]
    };

    // 使用 options 配置绘制词云
    myChart.setOption(option);

    // 组件销毁时，销毁echarts实例
    return () => {
      myChart.dispose();
    };
  }, [data]);

  return <div id="wordcloud4" style={{ width: '300px', height: '400px' }} />;
};

export default function Recommend () {
  const [top20Data, setTop20Data] = useState([])
  useEffect(() => {
    getTop20KeywordsListApi().then(res => {
      console.log(res.data)
      setTop20Data(res.data.map(item => ({ name: item[0], value: item[1] })))
    })
  }, [])

  const [bottom100Data, setBottom100Data] = useState([])
  useEffect(() => {
    getBottom100KeywordsListApi().then(res => {
      console.log(res.data)
      setBottom100Data(res.data.map(item => ({ name: item[0], value: item[1] })))
    })
  }, [])

  const [top100Data, setTop100Data] = useState([])
  useEffect(() => {
    getTop100KeywordsListApi().then(res => {
      console.log(res)
      console.log(res.data)
      setTop100Data(res.data.map(item => ({ name: item[0], value: item[1] })))
    })
  }, [])

  const [bottom20Data, setBottom20Data] = useState([])
  useEffect(() => {
    getBottom100KeywordsListApi().then(res => {
      setBottom20Data(res.data.map(item => ({ name: item[0], value: item[1] })))
    })
  }, [])


  return (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Card
        hoverable
        style={{
          width: 348,
        }}
        cover={<WordCloud1 data={top20Data} />}
      >
        <Meta title="首页推荐前20关键词" description="www.taobao.com" />
      </Card>
      <Card
        hoverable
        style={{
          width: 348,
        }}
        cover={<WordCloud2 data={bottom100Data} />}
      >
        <Meta title="首页推荐后100关键词" description="www.taobao.com" />
      </Card>
      <Card
        hoverable
        style={{
          width: 348,
        }}
        cover={<WordCloud3 data={top100Data} />}
      >
        <Meta title="首页推荐前100关键词" description="www.taobao.com" />
      </Card>
      <Card
        hoverable
        style={{
          width: 348,
        }}
        cover={<WordCloud4 data={bottom20Data} />}
      >
        <Meta title="首页推荐后20关键词" description="www.taobao.com" />
      </Card>
    </div>
  )
}

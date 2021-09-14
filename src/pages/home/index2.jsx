import React, { useState,useEffect } from 'react';
import { Layout} from 'antd';
import {MySide} from './components/mySide'
import {MyHeader} from './components/myHeader'
import styles from './css/index.less'

export default function IndexPage(props) {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKeys,setSelectedKeys]=useState([])
  const [openKeys,setOpenKeys]=useState([])

  useEffect(() => {
    const {route,location,}=props.route
    setSelectedKeys([route.name])
    setOpenKeys([location])
  },[]);

  const toggle = () => {
    setCollapsed(!collapsed)
  };
  const menu=[
    {
      title:'巡检规则管理',
      key:'patrol',
      children:[
        {
          title:'问题项管理',
          key:'items',
        },
        {
          title:'问题分类管理',
          key:'type',
        },
      ]
    },
    {
      title:'其他',
      key:'aa',
      children:[
        {
          title:'a',
          key:'aaaaa',
        },
        {
          title:'b',
          key:'bbbbb',
        },
      ]
    },
  ]

  return (
  <Layout className={styles.page}>
    <MySide collapsed={collapsed} menu={menu} selectedKeys={selectedKeys} openKeys={openKeys}/>
    <Layout className="site-layout">
      <MyHeader collapsed={collapsed} toggle={toggle}/>
      <div className={styles.content}>{props.children}</div>
      <footer className={styles.footer} >技术支持：移通科技（杭州）有限公司</footer>
    </Layout>
  </Layout>
  );
}
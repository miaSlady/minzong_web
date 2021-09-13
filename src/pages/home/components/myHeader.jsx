import React from 'react';
import { Layout} from 'antd';
import styles from '../css/myHeader.less'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';

const { Header } = Layout;
export const MyHeader = (props)=> {
  return (
    <Header className='site-layout-background' style={{ padding: 0,background:'#fff' }}>
      {React.createElement(props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: `trigger ${styles.collap}`,
        onClick: props.toggle,
      })}
    </Header>
  )
}
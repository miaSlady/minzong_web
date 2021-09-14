import React, { useState,useEffect } from 'react';
import {  Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import ProLayout, { PageContainer, SettingDrawer } from '@ant-design/pro-layout';
import defaultProps,{breadcrumbList} from './_defaultProps';
import { history} from 'umi';


export default (props) => {
  const [settings, setSetting] = useState({ fixSiderbar: true });
  const [breadcrumb, setBreadcrumb] = useState({});
  const [pathname, setPathname] = useState('/');

  useEffect(() => {
    const str=props.location.pathname
    setPathname(`/${str.split("/").slice(-1)}`)
    const routes=[]
    if(breadcrumbList[str]){
      breadcrumbList[str].forEach(item => {
        routes.push({
          path: '',
          breadcrumbName: item,
        },)
      });
    }
    setBreadcrumb({
      routes,
    })
  },[props]);

  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        {...props}
        {...settings}
        {...defaultProps}
        siderWidth="230"
        title="移通民宗管理平台"
        logo={require("./img/logo.png")}
        location={{
          pathname,
        }}
        waterMarkProps={{
          content: 'Pro Layout',
        }}
        onMenuHeaderClick={(e) => console.log(e)}
        subMenuItemRender={(item, dom) =>{
          return(
            <div><img src={require(`${item.img}`)} style={{width:'17px',height:'17px'}} /> {dom}</div>
          )
        } }
        menuItemRender={(item, dom) => (
          <a
            onClick={() => {
              const {pro_layout_parentKeys,path}=item
              history.push(pro_layout_parentKeys+path)
              setPathname(item.path || '/');
            }}
          >
            {dom}
          </a>
        )}
        rightContentRender={() => (
          <div>
            <Avatar shape="square" size="small" icon={<UserOutlined />} />
          </div>
        )}
      >
        <PageContainer
          content={props.children}
          header={{
            title:'',
            breadcrumb
          }}
          footer={'技术支持：移通科技（杭州）有限公司'}
         />
      </ProLayout>
      <SettingDrawer
        pathname={pathname}
        getContainer={() => document.getElementById('test-pro-layout')}
        settings={settings}
        onSettingChange={(changeSetting) => {
          setSetting(changeSetting);
        }}
        disableUrlParams
      />
    </div>
  );
};
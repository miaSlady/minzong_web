import { Layout, Menu } from 'antd';
import mySide from '../css/mySide.less'
import { history } from 'umi';

const { Sider} = Layout;
const { SubMenu } = Menu;

export const MySide = (props)=> {
  const changeMenu=(e)=>{
    console.log('click',e)
    history.push(`/${e.key}`)
  }
  return (
    <Sider trigger={null} collapsible collapsed={props.collapsed}>
      <div className={mySide.name}>
        {!props.collapsed && (<span>移通民宗管理平台</span>)}
      </div>
      <Menu className={mySide.side} onClick={changeMenu} defaultSelectedKeys={props.selectedKeys} defaultOpenKeys={props.openKeys} theme="dark" mode="inline">
          {
            props.menu && props.menu.map(submenu=>
              <SubMenu key={submenu.key} title={submenu.title}>
                {
                  submenu.children.map(item=>
                    <Menu.Item key={item.key}>{item.title}</Menu.Item>
                  )
                }
              </SubMenu>
            )
          }
      </Menu>
    </Sider>
  )
}
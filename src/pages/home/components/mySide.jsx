import { Layout, Menu } from 'antd';
import mySide from '../css/mySide.less'

const { Sider} = Layout;
const { SubMenu } = Menu;

export const MySide = (props)=> {
  const changeMenu=(e)=>{
    console.log('click',e)
  }
  return (
    <Sider trigger={null} collapsible collapsed={props.collapsed} onClick={changeMenu}>
      <div className={mySide.name}>
        {!props.collapsed && (<span>移通民宗管理平台</span>)}
      </div>
      <Menu className={mySide.side} theme="dark" mode="inline" defaultSelectedKeys={['7']} defaultOpenKeys={['sub3']}>
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
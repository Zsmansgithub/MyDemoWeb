import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'umi';
import { Redirect } from 'umi';
import UserHeader from './components/header/header';

import styles from './index.less';

const { Header, Sider, Content, Footer } = Layout;
const { SubMenu } = Menu;

const menuData = [
  {
    route: '',
    name: 'dashboard', 
    children: [
      {route: '/dashboard', name: 'dashboard'},
    ]
  },
  {
    route: '',
    name: '基础表格',
    children: [
      {route: '/tableDef', name: '基础表格'},
    ]
  },
]
function menuList(menus: any) {
  if(!(menus && menus instanceof Array)) {
    return (<></>)
  }
  return (
    <>
      {menus.map((menu) => {
        if(menu.children?.length) {
          return <SubMenu key={`sub_${menu.name}`} title={menu.name}>
            {menuList(menu.children)}
          </SubMenu>
        } else {
          return <Menu.Item key={`menu_${menu.route}`}><Link to={`${menu.route}`}>{menu.name}</Link></Menu.Item>
        }
      })}
    </>
  )
}
function BasicLayout(props: any) {
  const location = props.location;
  const pathname = location.pathname;
  if(pathname === '/') {
    return <Redirect to="/dashboard" />
  }
  return (
    <Layout style={{height: '100%'}}>
      <Sider>
        <div className={styles.menuLogo}></div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[pathname]}
          style={{ lineHeight: '64px' }}
        >
          {menuList(menuData)}
        </Menu>
      </Sider>
      <Layout>
      <Header className={styles['site-layout-background']}>
        <div>
          <UserHeader data={{user: 'zs'}}/>
        </div>
      </Header>
      <Content>
        <div style={{ background: '#fff',padding: 24,minHeight: 280 }}>
          {props.children}
        </div>
      </Content>
      <Footer style={{textAlign: 'center'}}>Umi admin demo</Footer>
    </Layout>
    </Layout>
  )
}

export default BasicLayout

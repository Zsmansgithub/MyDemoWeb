import React from 'react';
import { Layout, Menu } from 'antd';
import { Redirect, Link, getDvaApp } from 'umi';
import UserHeader from './components/header/header';
import TagsView from './components/tags/tags';

import styles from './index.less';

const { Header, Sider, Content, Footer } = Layout;
const { SubMenu } = Menu;

const menuData = [
  {
    path: '',
    title: 'dashboard',
    children: [
      {path: '/dashboard', title: 'dashboard'},
    ]
  },
  {
    path: '',
    title: '基础表格',
    children: [
      {path: '/tableDef', title: '基础表格'},
    ]
  },
]
function menuList(menus: any) {
  if(!(menus && menus instanceof Array)) {
    return (<></>)
  }
  const addTag = (menu: any) => {
      getDvaApp()._store.dispatch({type:"tagsview/addTags", payload: menu})
  }
  return (
    <>
      {menus.map((menu) => {
        if(menu.children?.length) {
          return <SubMenu key={`sub_${menu.title}`} title={menu.title}>
            {menuList(menu.children)}
          </SubMenu>
        } else {
          return <Menu.Item key={`menu_${menu.path}`} onClick={() => addTag(menu)}><Link to={`${menu.path}`}>{menu.title}</Link></Menu.Item>
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
          <UserHeader data={{user: 'zs'}}/>
          <TagsView />
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

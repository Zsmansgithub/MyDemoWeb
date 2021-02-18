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
          return <SubMenu key={menu.title} title={menu.title}>
            {menuList(menu.children)}
          </SubMenu>
        } else {
          return <Menu.Item key={menu.path} onClick={() => addTag(menu)}><Link to={`${menu.path}`}>{menu.title}</Link></Menu.Item>
        }
      })}
    </>
  )
}
function BasicLayout(props: any) {
  const { location } = props;
  const pathname = location.pathname;
  if(pathname === '/') {
    return <Redirect to="/dashboard" />
  }
  const rootSubmenuKeys = ['dashboard', '基础表格'];
  let rootName: string;
  let activeMenu: any;
  function findPathName(data: any, title: string) {
    data.forEach((item: any) => {
      if(item.path === pathname) {
        rootName = title;
        activeMenu = item;
        return;
      }
      if(item.children) {
        findPathName(item.children, title)
      }
    });
  }
  menuData.forEach((item) => {
    const title = item.title;
    if(!rootName) findPathName(item.children, title)
  })
  getDvaApp()._store.dispatch({type:"tagsview/addTags", payload: activeMenu})
  const [openKeys, setOpenKeys] = React.useState([rootName]);
  const onOpenChange = (keys: any) => {
    const latestOpenKey = keys.find((key: string) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  return (
    <Layout style={{height: '100%'}}>
      <Sider>
        <div className={styles.menuLogo}></div>
        <Menu
          theme="dark"
          mode="inline"
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          defaultSelectedKeys={pathname}
          style={{ lineHeight: '64px' }}
        >
          {menuList(menuData)}
        </Menu>
      </Sider>
      <Layout>
      <Header className={styles['site-layout-background']}>
          <UserHeader data={{user: 'zs', pathname}}/>
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

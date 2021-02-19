import React, { FC } from 'react';
import { activeMenuState } from '@/models/activeMenu';
import { Layout, Menu } from 'antd';
import { connect, ConnectProps, Redirect, Link, getDvaApp } from 'umi';
import UserHeader from './components/header/header';
import TagsView from './components/tags/tags';
import { menuData, rootSubmenuKeys } from '@/utils/tools.js';
import styles from './index.less';

const { Header, Sider, Content, Footer } = Layout;
const { SubMenu } = Menu;
interface PageProps extends ConnectProps {
  activeMenu: activeMenuState;
}

function menuList(menus: any) {
  if(!(menus && menus instanceof Array)) {
    return (<></>)
  }
  const addTag = (menu: any) => {
      getDvaApp()._store.dispatch({type:"tagsview/addTags", payload: menu});
      getDvaApp()._store.dispatch({type:"activeMenu/saveMenu", payload: {activePath: menu.key}});
  }
  return (
    <>
      {menus.map((menu) => {
        if(menu.routes?.length) {
          return <SubMenu key={menu.key} title={menu.title}>
            {menuList(menu.routes)}
          </SubMenu>
        } else {
          return menu.path && menu.path !== '/' && !menu.hidden && <Menu.Item key={menu.key} onClick={() => addTag(menu)}><Link to={`${menu.path}`}>{menu.title}</Link></Menu.Item>
        }
      })}
    </>
  )
}

const BasicLayout: FC<PageProps> = ({ location, children, activeMenu, dispatch}) => {
  const pathname = location.pathname;
  if(pathname === '/') {
    return <Redirect to="/dashboard" />
  }
  const { openKeys = [], activePath = [] } = activeMenu;
  const onOpenChange = (keys: any) => {
    const latestOpenKey = keys.find((key: string) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      dispatch && dispatch({type: 'activeMenu/saveMenu', payload: {openKeys: keys}})
    } else {
      dispatch && dispatch({type: 'activeMenu/saveMenu', payload: {openKeys: latestOpenKey ? [latestOpenKey] : []}})
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
          selectedKeys={activePath}
          style={{ lineHeight: '64px' }}
        >
          {menuList(menuData)}
        </Menu>
      </Sider>
      <Layout>
        <Header className={styles['site-layout-background']}>
            <UserHeader data={{user: 'Zs', pathname}}/>
            <TagsView />
        </Header>
        <Content>
          <div style={{ background: '#fff',padding: 24,minHeight: 280 }}>
            {children}
          </div>
        </Content>
        <Footer style={{textAlign: 'center'}}>Umi admin demo</Footer>
      </Layout>
    </Layout>
  )
}

export default connect(({ activeMenu } : { activeMenu: activeMenuState }) => ({ activeMenu }))(BasicLayout)

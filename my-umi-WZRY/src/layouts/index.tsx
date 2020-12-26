import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'umi';

import styles from './index.less';

const { Header, Content, Footer } = Layout;
const menuData = [
  {route: '/hero', name: '英雄'},
  {route: '/item', name: '局内道具'},
  {route: '/summoner', name: '召唤师技能'},
]
// function BasicLayout(props: { children: React.ReactNode; }) {
function BasicLayout(props: any) {
  const location = props.location;
  const pathname = location.pathname;
  return (
    <Layout>
      <Header>
        <div className={styles.logo}>王者荣耀资料库</div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[pathname]}
          style={{ lineHeight: '64px' }}
        >
          {/*<Menu.Item key="/hero"><Link to="hero">英雄</Link></Menu.Item>*/}
          {/*<Menu.Item key="/item"><Link to="item">局内道具</Link></Menu.Item>*/}
          {/*<Menu.Item key="/summoner"><Link to="summoner">召唤师技能</Link></Menu.Item>*/}
          {menuData.map((menu) => {
            return <Menu.Item key={`${menu.route}`}><Link to={`${menu.route}`}>{menu.name}</Link></Menu.Item>
          })}
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div style={{ background: '#fff',padding: 24,minHeight: 280 }}>
          {props.children}
        </div>
      </Content>
      <Footer style={{textAlign: 'center'}}>Umi 入门教程</Footer>
    </Layout>
  )
}

export default BasicLayout

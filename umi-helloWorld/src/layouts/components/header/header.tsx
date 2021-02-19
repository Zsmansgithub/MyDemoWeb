import React from 'react';
import { Menu, Dropdown, Avatar, Breadcrumb } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { breadcrumbData } from  '@/utils/tools.js';
import styles from './index.less';
const menuClick = ({ key }) => {
  console.log(key)
};
const menu = (
  <Menu onClick={menuClick}>
    <Menu.Item key="layout">
        退出登录
    </Menu.Item>
  </Menu>
);
export default function UserHeader({ data }) {
  if (!data || !data.user) return null;
  const { pathname, user} = data;
  const breadcrumbs = breadcrumbData[pathname] || [];
  return (
    <div className={styles.wrapper}>
      <Breadcrumb className={styles.breadcrumb}>
        {breadcrumbs.map((title: any) => (<Breadcrumb.Item key={title}>{title}</Breadcrumb.Item>))}
      </Breadcrumb>
      <div className={styles.content}>
          <Avatar icon={<UserOutlined />}  className={styles.avatar}/>
          <Dropdown arrow={true} overlay={menu} overlayStyle={{top: '-35px'}} className={styles.text}>
              <span>{data.user}</span>
          </Dropdown>
      </div>
    </div>
  );
}

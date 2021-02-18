import { Menu, Dropdown, Avatar, Breadcrumb } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import breadcrumbData from  '@/utils/BreadcrumbData.js';
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
        {breadcrumbs.map(title => (<Breadcrumb.Item key={title}>{title}</Breadcrumb.Item>))}
      </Breadcrumb>
      <div className={styles.content}>
          <Avatar icon={<UserOutlined />}  className={styles.avatar}/>
          <Dropdown overlay={menu}  className={styles.text}>
              {/* <span>{data.user}</span> */}
              <span>Aa中</span>
          </Dropdown>
      </div>
    </div>
  );
}

import { Menu, Dropdown, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

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

  return (
    <div className={styles.wrapper}>
        <Avatar icon={<UserOutlined />}  className={styles.avatar}/>
        <Dropdown overlay={menu}  className={styles.text}>
            {/* <span>{data.user}</span> */}
            <span>aa</span>
        </Dropdown>
    </div>
  );
}
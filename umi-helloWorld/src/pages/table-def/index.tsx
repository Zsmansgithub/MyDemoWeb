import React, { FC } from 'react';
import { connect, ConnectProps } from 'umi';
import { TableModelState } from './models/tabdef';
import styles from './index.less';
import { Table, Tag, Space, Pagination } from 'antd';
import Demo from './components/search.tsx';
interface PageProps extends ConnectProps {
  data: TableModelState;
}

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const TableDef: FC<PageProps> = ({tableDef, dispatch}) => {
  const { data } = tableDef;
  return (
    <div>
      <Demo query={tableDef.query}></Demo>
      <Table columns={columns} dataSource={data.data} />
      <Pagination defaultCurrent={1} total={data.total} />
    </div>
  );
}

export default connect(({ tableDef } : { tableDef: TableModelState }) => ({ tableDef }) )(TableDef)
import React, { FC } from 'react';
import styles from './item.less';
import { connect, ItemModelState, ConnectProps } from 'umi';

interface PageProps extends ConnectProps {
  item: ItemModelState;
}

const Item: FC<PageProps> = (props) => {
  return (
    <div>
      <h2>this id {props.item.name}</h2>
    </div>
  )
}

export default connect(({ item } : { item: ItemModelState }) => ({ item }))(Item)

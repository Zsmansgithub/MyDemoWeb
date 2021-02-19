import React, { FC } from 'react';
import styles from './tags.less';
import { connect, ConnectProps, history } from 'umi';
import { visitedViewState } from '@/models/tags';
import { Tag } from 'antd';

interface PageProps extends ConnectProps {
  tagsview: visitedViewState;
}

const TagList: FC<PageProps> = ({ tagsview, dispatch }) => { // herocopy 为绑定model的namespace
  const { visitedViews = [], activeRoute = '/' } = tagsview;
  const onClick = (idx: number) => {
    history.push(visitedViews[idx].path)
  }
  const removeTags = (idx: number) => {
    dispatch && dispatch({type:"tagsview/removeTags", payload: visitedViews[idx]})
  }
  return (
    <div className={styles['tag-list']}>
      {visitedViews.map((item, idx) => {
        const color = ((activeRoute === item.path) || (activeRoute === '/' && item.path === '/dashboard')) ? 'volcano' : 'green';
        return(<Tag closable={idx === 0 ? false  : true}
        visible={true}
        key={item.key}
        color={color}
        onClick={() => onClick(idx)}
        onClose={() => removeTags(idx)}>
            {item.title}
          </Tag>)
      })}
    </div>
  )
}
// conect 用于将model和视图关联起来 参数为model的namspace(本页面为herocopy) Hero为组件 组件内部接受state参数名称保持余namespace一致
export default connect(({ tagsview } : { tagsview: visitedViewState }) => ({ tagsview }))(TagList)

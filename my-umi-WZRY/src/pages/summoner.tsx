import React, { FC } from 'react';
import styles from './item.less';
import { connect, SummonerModelState, ConnectProps } from 'umi';

interface PageProps extends ConnectProps {
  summoner: SummonerModelState;
}

const Summoner: FC<PageProps> = (props) => {
  return (
    <div>
      <h2>this id {props.summoner.name}</h2>
      <div>{JSON.stringify(props.summoner)}</div>
    </div>
  )
}

export default connect(({ summoner } : { summoner: SummonerModelState }) => ({ summoner }))(Summoner)

import React, { FC } from 'react';
import styles from './summoner.less';
console.log(styles);
import { connect, SummonerModelState, ConnectProps } from 'umi';
import { Row, Col } from 'antd';

interface PageProps extends ConnectProps {
  summoner: SummonerModelState;
}

const Summoner: FC<PageProps> = ({ summoner }) => {
  const { summoners = [] } = summoner;
  return (
    <Row>
      {summoners.map((item) => (
        <Col key={item.summoner_name} span={3} className={styles["summoner-item"]} >
          <img
            src={`https://game.gtimg.cn/images/yxzj/img201606/summoner/${item.summoner_id}.jpg`}
          />
          <p>{item.summoner_name}</p>
        </Col>
      ))}
    </Row>
  )
}

export default connect(({ summoner } : { summoner: SummonerModelState }) => ({ summoner }))(Summoner)

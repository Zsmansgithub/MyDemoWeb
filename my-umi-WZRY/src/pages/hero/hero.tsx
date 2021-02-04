import React, { FC } from 'react';
import styles from './hero.less';
import { connect, HeroModelState, ConnectProps, Link } from 'umi';
import { Row, Col, Radio, Card } from 'antd';
import FreeHeroItem from './components/heroItem';

interface PageProps extends ConnectProps {
  hero: HeroModelState;
}
const heroType = [
  { key: 0, value: '全部' },
  { key: 1, value: '战士' },
  { key: 2, value: '法师' },
  { key: 3, value: '坦克' },
  { key: 4, value: '刺客' },
  { key: 5, value: '射手' },
  { key: 6, value: '辅助' },
];

const Hero: FC<PageProps> = ({ hero, dispatch }) => {
  const { heros = [], filterKey = 0, freeheros = [], itemHover = 0 } = hero;
  const onChange = (e: any) => {
    dispatch && dispatch({type:"hero/save", payload:{
            filterKey:e.target.value
      }})
  }
  const onItemHover= (e: any) =>{
    dispatch && dispatch({
      type: 'hero/save',
      payload: {
        itemHover: e
      },
    });
  }
  const id = '123';
  return (
    <div className={styles.normal}>
      <div className={styles.info}>
        <Row className={styles.freehero}>
          <Col span={24}>
            <p>周免英雄</p>
            {/* <Link to={{pathname: 'heroDetail', params: {id: id}}}> */}
            <Link to={`/heroDetail/${id}`}>
              <div>
                {freeheros.map((data, index) => (
                  <FreeHeroItem
                    data={data}
                    itemHover={itemHover}
                    onItemHover={onItemHover}
                    thisIndex={index}
                    key={index}
                  />
                ))}
              </div>
            </Link>
          </Col>
        </Row>
      </div>
      <Card className={styles.radioPanel}>
        <Radio.Group onChange={onChange} value={filterKey}>
          {heroType.map((item) => (
                <Radio key={`hero-rodio-${item.key}`} value={item.key}>{item.value}</Radio>
              )
            )}
        </Radio.Group>
      </Card>
      <Row>
        {heros
          .filter(item => filterKey === 0 || item.hero_type === filterKey)
          .reverse()
          .map(item => (
          <Col key={item.ename} span={3} className={styles.heroitem}>
            <img
              src={`https://game.gtimg.cn/images/yxzj/img201606/heroimg/${item.ename}/${item.ename}.jpg`}
            />
            <p>{item.cname}</p>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default connect(({ hero } : { hero: HeroModelState }) => ({ hero }))(Hero)

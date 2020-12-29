import React, { FC } from 'react';
import styles from './hero.less';
import { connect, HeroModelState, ConnectProps } from 'umi';
import { Row, Col, Radio, Card } from 'antd';
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
  const { heros = [], filterKey = 0 } = hero;
  const onChange = (e) => {
    dispatch({type:"hero/save",payload:{
             filterKey:e.target.value
       }})
  }
  return (
    <div>
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
    // <Row>
    //   {heros.map(item => (
    //     <Col key={item.ename} span={3} className={styles.heroitem} >
    //       <img src="`https://game.gtimg.cn/images/yxzj/img201606/heroimg/${item.ename}/${item.ename}.jpg`"/>
    //       <p>{item.cname}</p>
    //     </Col>
    //   ))}
    // </Row>
  )
}

export default connect(({ hero } : { hero: HeroModelState }) => ({ hero }))(Hero)

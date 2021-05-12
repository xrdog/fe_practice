/**
 * 404页面
 */
import React, { FC } from 'react';
import { Typography, Button, Space, Image } from 'antd';
import NoMathImg from '../common/imgs/404.png';

import { useHistory } from 'react-router';

const { Text } = Typography;
const NoMatch: FC = () => {
  const history = useHistory();
  const handleClickBack= () => {
    history.push('/deal/deal-record');
  };
  return (
    <div className="page-box">
      <Space
        className="no-match-box"
        direction="vertical"
        style={{ height: 'calc(100vh - 96px)' }}
      >
        <Image src={NoMathImg} alt="404图片" preview={false} width={200} />
        <Text type="secondary">对不起，您访问的页面不存在！</Text>
        <Button type="primary" onClick={handleClickBack}>
          回首页
        </Button>
      </Space>
    </div>
  );
};

export default NoMatch;

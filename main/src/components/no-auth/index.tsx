/**
 * 403页面
 */
import React, { FC, useEffect, ReactElement } from 'react';
import { Result, Image, message } from 'antd';
import NoAuthImg from '../common/imgs/403.png';

interface INoAuthProps {
  title?: string;
  subTitle?: string;
}
const NoAuth: FC<INoAuthProps> = (props) => {
  const { title = '', subTitle = '' } = props;
  return (
    <Result
      icon={<Image width={360} src={NoAuthImg} preview={false} />}
      title={title || '无权限'}
      subTitle={subTitle || '对不起，您没有权限访问当前页面'}
    />
  );
};

/**
 * 前一个页面没有权限，定位到新页面后展示提示信息
 */
export const LazyWarningWrap: FC = ({ children }) => {
  useEffect(() => {
    message.warning('对不起，您没有权限编辑当前页面');
  }, []);
  return children as ReactElement;
};

export default NoAuth;

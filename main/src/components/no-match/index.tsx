/**
 * 404页面
 */
import React, { FC } from "react";
import { Typography, Button, Space, Image, Result } from "antd";
import { useHistory } from "react-router";

const { Text } = Typography;
const NoMatch: FC = () => {
  const history = useHistory();
  const handleClickBack = () => {
    history.push("/deal/deal-record");
  };
  return (
    <div className="page-box">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button type="primary" onClick={()=>history.push('/home')}>Back Home</Button>}
      />
    </div>
  );
};

export default NoMatch;

import { Button, Space } from "antd";
import React, { FC } from "react";
import { Link } from "react-router-dom";

const Home: FC = () => {
  console.log("this is home");
  return (
    <div className="flex-space-between flex-direction-clomu flex-justify-content-center">
      <h1>xrdog</h1>
      <Space size="middle">
        <Button type="primary">
          <Link to="/csscomponents">CssComponents</Link>
        </Button>
      </Space>
    </div>
  );
};

export default Home;

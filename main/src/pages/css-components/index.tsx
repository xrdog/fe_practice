import { Button, Layout, Menu } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import React, { FC } from "react";
import Tick from "./tick/index";
const { Header, Footer, Sider, Content } = Layout;
const CssComponents: FC = () => {
  console.log("this is CssComponents");

  const handleMenuChange = (e: any) => {
    console.log("e", e);
  };

  return (
    <Layout style={{height:'100%'}}>
      <Sider width={200}>
        <Menu
          onClick={handleMenuChange}
          style={{ height: "100%" }}
          defaultSelectedKeys={["1"]}
          mode="inline"
        >
          <SubMenu key="sub1" title="Navigation One">
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>

      <Content className="site-layout">
        <Tick></Tick>
      </Content>
    </Layout>
  );
};

export default CssComponents;

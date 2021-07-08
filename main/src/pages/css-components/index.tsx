import { Button, Layout, Menu } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import React, { FC, useState } from "react";
import Tick from "./tick/index";
import { components } from "./config";
const { Header, Footer, Sider, Content } = Layout;
const CssComponents: FC = () => {

  const [renderComponent,setRenderComponent]=useState<any>(<></>)
  console.log("this is CssComponents", components);
  const handleMenuChange = (e: any) => {
    console.log("e", e);
  };

  return (
    <Layout style={{ height: "100%" }}>
      <Sider width={200}>
        <Menu
          onClick={handleMenuChange}
          style={{ height: "100%" }}
          defaultSelectedKeys={[components[0].key]}
          mode="inline"
          defaultOpenKeys={['sub1']}
        >
          <SubMenu key="sub1" title="sub1">
            {components.map((item) => {
              console.log('item',item)
              return (
                <Menu.Item
                  onClick={(record) => {console.log("record", record); setRenderComponent(item.component)}}
                  key={item.key}
                >
                  {item.breadcrumbName}
                </Menu.Item>
              );
            })}
          </SubMenu>
        </Menu>
      </Sider>

      <Content className="site-layout">
       {renderComponent}
      </Content>
    </Layout>
  );
};

export default CssComponents;

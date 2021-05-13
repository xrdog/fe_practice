import React from "react";

//主页
const Home = React.lazy(() => import("./pages/home"));

const CssComponents = React.lazy(() => import("./pages/css-components/index"));

// 首页
export const defaultRoute = "/home";

// 路由配置
const routes: F.Route[] = [
  {
    path: "/home",
    key: "home",
    show: true,
    showPageHeader: true,
    breadcrumbName: "主页",
    breadcrumbPath: ["/home"],
    component: Home,
  },
  {
    path: "/csscomponents",
    key: "csscomponents",
    show: true,
    showPageHeader: true,
    breadcrumbName: "css组件",
    breadcrumbPath: ["/csscomponents"],
    component: CssComponents,
  },
];

export default routes;

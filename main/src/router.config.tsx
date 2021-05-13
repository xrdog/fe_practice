import React from "react";

//主页
const Home = React.lazy(() => import("./pages/home"));

// 首页
export const defaultRoute = "/deal/deal-record";

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
];

export default routes;

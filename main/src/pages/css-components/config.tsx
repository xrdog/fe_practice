import React from "react";
import Tick from './tick/index'

export const components: F.Route[] = [
  {
    path: "/tick",
    key: "tick",
    show: true,
    showPageHeader: true,
    breadcrumbName: "打钩",
    breadcrumbPath: ["/home"],
    component: Tick,
  },
];

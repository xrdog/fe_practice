import React, { ReactElement, ReactNode, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router";
import NoMatch from "./components/no-match";
import routes, { defaultRoute } from "./router.config";
import { BrowserRouter } from 'react-router-dom';

// 生成独立的一条路由
function genRoute(item: F.Route): ReactElement {
  return (
    <Route key={item.key} path={item.path} component={item.component} exact />
  );
}

function genRoutes(info: F.Route[]): ReactNode[] {
  return info.map((item: F.Route) => {
    if (!item.children) {
      return genRoute(item);
    } else {
      return [genRoute(item), ...genRoutes(item.children)];
    }
  });
}

export default function Router(): ReactElement {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div />}>
          <Switch>
            <Redirect from="/" to={defaultRoute} exact />
            {genRoutes(routes)}
            <Route key="404" path="*" component={NoMatch} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

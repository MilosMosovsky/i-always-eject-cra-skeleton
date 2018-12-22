import * as React from "react";
import { routeNode } from "react-router5";
import { Route } from "router5";

export { default as createRouter } from "./createRouter";

// pages import

import { MainPage } from "../components/pages";

interface IRouteRenderProps {
  route: Route;
  name: string;
  node: React.ComponentType;
}

const RouteRender = ({
  route,
  name,
  node: NodeRenderer,
}: IRouteRenderProps): any => {
  if (!route || route.name === "@@router5/UNKNOWN_ROUTE") {
    return "Page not found";
  }

  if (route.name === name) {
    return <NodeRenderer />;
  } else {
    return null;
  }
};

interface IBootloaderProps {
  route: Route;
}

const Bootloader: React.SFC<IBootloaderProps> = ({ route }) => {
  return (
    <>
      <RouteRender route={route} name="main" node={MainPage} />
      <RouteRender route={route} name="404" node={() => <>Page not found</>} />
    </>
  );
};

export default routeNode("")(Bootloader);

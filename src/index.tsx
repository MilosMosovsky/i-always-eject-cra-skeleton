import * as React from "react";
import * as ReactDOM from "react-dom";
import { Route, RouterProvider } from "react-router5";

import BootLoader, { createRouter } from "./bootloader";
const router = createRouter();

// initialize theme
import { GlobalStyle } from "./components/themes/default";

// @ts-ignore Error in typings
const GetProvider = (props) => <RouterProvider {...props} />;

router.start(() => {
  ReactDOM.render(
      <>
        <GlobalStyle />
        <GetProvider router={router}>
          <Route>{({ route }) => <BootLoader route={route} />}</Route>
        </GetProvider>
      </>,
    document.getElementById("root"),
  );
});

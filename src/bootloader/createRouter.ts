import createRouter, { Plugin, PluginFactory, Router } from "router5";
import createBrowserPlugin from "router5-plugin-browser";
import loggerPlugin from "router5-plugin-logger";
import routes from "./../config/routes";

const browserPlugin = createBrowserPlugin();

const notFoundRedirectPlugin: PluginFactory = (router: Router): Plugin => {
  return {
    onTransitionError: (toState, fromState, e) => {
      if (e.code === "ROUTE_NOT_FOUND") {
        router.navigate("404");
      }
    },
  };
};

export default function configureRouter() {
  const router = createRouter(routes, {
    allowNotFound: true,
  });

  router.usePlugin(loggerPlugin);
  router.usePlugin(notFoundRedirectPlugin);
  router.usePlugin(browserPlugin);

  return router;
}

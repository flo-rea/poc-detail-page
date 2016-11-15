import Bootstrap from './bootstrap/bootstrap';
import PageRouterAdapter from './router/page-router-adapter';
import routeConfig from './router/routes.config';

// Preboot
const pageAdapter = new PageRouterAdapter();

// Boot
const app = new Bootstrap();

app
  .initializeRouters({ default: pageAdapter })
  .setDefaultRouter('default')
  .start(routeConfig)
  .then(() => {
    (app.Router.Router as PageRouterAdapter).start();
    console.log('gogogo');
  });

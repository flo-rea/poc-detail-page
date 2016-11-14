import * as Reaptor from 'reaptor';
import * as React from 'react';
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
    // app.Router.redirect('home');
    // (app as any).Router.start();
    (app as any).Router.Router.start();
    console.log('gogogo');
  });

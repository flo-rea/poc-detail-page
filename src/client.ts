import * as Reaptor from 'reaptor';
import * as React from 'react';
import Bootstrap from './bootstrap/bootstrap';
import * as express from 'express';
import PageRouterAdapter from './router/page-router-adapter';
import routeConfig from './router/routes.config';

// Preboot
const expressAdapter = new PageRouterAdapter();

// Boot
const app = new Bootstrap();

app
  .initializeRouters({ default: expressAdapter })
  .setDefaultRouter('default')
  .start(routeConfig)
  .then(() => {
    console.log('gogogo');
  });

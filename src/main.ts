import Bootstrap from './bootstrap/bootstrap';
import * as express from 'express';
import ExpressRouterAdapter from './router/express-router-adapter';
import routeConfig from './router/routes.config';

// Preboot
const expressServer = express();
const expressAdapter = new ExpressRouterAdapter(expressServer);

// Boot
const app = new Bootstrap();

app
  .initializeRouters({ default: expressAdapter })
  .setDefaultRouter('default')
  .start(routeConfig)
  .then(() => {
    expressServer.use(express.static('build'));
    expressServer.listen(8080, () => {
      console.log('listening on 8080');
    });
  });

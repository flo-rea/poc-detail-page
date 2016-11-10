"use strict";
const bootstrap_1 = require('./bootstrap/bootstrap');
const express = require('express');
const express_router_adapter_1 = require('./router/express-router-adapter');
const routes_config_1 = require('./router/routes.config');
const expressServer = express();
const expressAdapter = new express_router_adapter_1.default(expressServer);
const app = new bootstrap_1.default();
app
    .initializeRouters({ default: expressAdapter })
    .setDefaultRouter('default')
    .start(routes_config_1.default)
    .then(() => {
    expressServer.use(express.static('build'));
    expressServer.listen(8080, () => {
        console.log('listening on 8080');
    });
});
//# sourceMappingURL=main.js.map
"use strict";
const bootstrap_1 = require('./bootstrap/bootstrap');
const page_router_adapter_1 = require('./router/page-router-adapter');
const routes_config_1 = require('./router/routes.config');
const expressAdapter = new page_router_adapter_1.default();
const app = new bootstrap_1.default();
app
    .initializeRouters({ default: expressAdapter })
    .setDefaultRouter('default')
    .start(routes_config_1.default)
    .then(() => {
    console.log('gogogo');
});
//# sourceMappingURL=client.js.map
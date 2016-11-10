"use strict";
const Reaptor = require('reaptor');
class Bootstrap extends Reaptor.Bootstrap.ABootstrap {
    constructor(routerAdapter) {
        super();
        Bootstrap._instance = this;
    }
    initializeRouters(routers) {
        Object.keys(routers).forEach((routerId) => {
            this.addRouter(routerId, new Reaptor.Router.Router(routers[routerId]));
        });
        return this;
    }
    static get instance() {
        return Bootstrap._instance;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Bootstrap;
//# sourceMappingURL=bootstrap.js.map
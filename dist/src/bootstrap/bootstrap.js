"use strict";
const Reaptor = require('reaptor');
class Bootstrap extends Reaptor.Bootstrap.ABootstrap {
    constructor(routerAdapter) {
        super();
        if (routerAdapter) {
            this.addRouter('default', new Reaptor.Router.Router(routerAdapter));
        }
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Bootstrap;
//# sourceMappingURL=bootstrap.js.map
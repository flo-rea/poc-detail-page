"use strict";
const plop_1 = require('./plop');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    routers: {
        default: {
            routes: {
                home: {
                    path: '/',
                    name: 'home',
                    requiredParameters: [],
                    optionalParamters: [],
                    callback: () => plop_1.Plop.home()
                },
                listing: {
                    path: '/list',
                    name: 'listing',
                    requiredParameters: [],
                    optionalParamters: [],
                    callback: () => plop_1.Plop.listing()
                },
                detail: {
                    path: '/details',
                    name: 'details',
                    requiredParameters: ['id'],
                    optionalParamters: [],
                    callback: () => { }
                }
            }
        }
    }
};
//# sourceMappingURL=routes.config.js.map
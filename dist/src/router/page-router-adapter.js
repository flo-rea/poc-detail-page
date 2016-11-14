"use strict";
const page = require('page');
const action_handler_1 = require('./action-handler');
class PageRouterAdapter {
    constructor() {
        this._pageApp = page;
        this._routes = {};
    }
    start() {
        this._pageApp.start();
    }
    add(route) {
        const fullpath = this.getFullPath(route.path, route.requiredParameters, route.optionalParamters);
        this._routes[route.name] = route;
        const cb = (ctx) => {
            action_handler_1.ActionHandler.action(route.callback, null, null);
        };
        this._pageApp(fullpath, cb);
        return Promise.resolve();
    }
    getUrl(routeName, params) {
        const route = this._routes[routeName];
        if (!route) {
            throw new Error('Unknown route');
        }
        const urlPlaceholderParam = this.getFullPath(route.path, route.requiredParameters, route.optionalParamters);
        return this.replaceParamByValueInUrl(urlPlaceholderParam, params);
    }
    redirectUrl(url) {
        this._pageApp(url);
    }
    getFullPath(path, reqParam = [], optParam = []) {
        if (reqParam.length === 0 && optParam.length === 0) {
            return path;
        }
        const noTrailingSlashPath = path.replace(/\/$/, '');
        const reqParamString = reqParam
            .map((p) => `:${p}`)
            .join('/');
        const optParamString = optParam
            .map((p) => `:${p}?`)
            .join('/');
        return [noTrailingSlashPath, reqParamString, optParamString]
            .filter(Boolean)
            .join('/');
    }
    replaceParamByValueInUrl(url, params) {
        if (!params) {
            return url;
        }
        const paramsKeys = Object.keys(params);
        if (paramsKeys.length === 0) {
            return url;
        }
        let finalUrl = url;
        paramsKeys.forEach((param) => {
            finalUrl = finalUrl.replace(RegExp(`:${param}(\\(.*\\))?(\\?|$)?`), params[param]);
        });
        const sanitizedUrl = finalUrl.replace(/:\w+(\(.*\))?(\?\/|\?|\/)?/g, '');
        return sanitizedUrl;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PageRouterAdapter;
//# sourceMappingURL=page-router-adapter.js.map
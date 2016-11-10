import * as reaptor from 'reaptor';

import * as page from 'page';

import { ActionHandler } from './action-handler';

export default class PageRouterAdapter implements reaptor.Router.IAdapterRouter {
  private _pageApp: PageJS.Static;
  private _routes: reaptor.Router.IRoutes;

  constructor() {
    this._pageApp = page;
    this._routes = {};
  }

  public add(route: reaptor.Router.IRoute): Promise<void> {
    const fullpath = this.getFullPath(route.path, route.requiredParameters, route.optionalParamters);
    this._routes[route.name!] = route;

    const cb: PageJS.Callback = (ctx: PageJS.Context) => {
      ActionHandler.action(route.callback, null, null);

      // let hasTimedOut = false;
      // const idTimeout = setTimeout(() => {
      //   hasTimedOut = true;
      //   page('/404');
      // }, 10000); // TODO: put the timeout value in config file.

      // if (typeof (route.callback) === 'function') {
      //   if (!hasTimedOut) {
      //     clearTimeout(idTimeout);
      //     route.callback();
      //   }
      // }
    };

    this._pageApp(fullpath, cb);

    return Promise.resolve();
  }

  public getUrl(routeName: string, params?: {}): string {
    const route = this._routes[routeName];

    if (!route) {
      throw new Error('Unknown route');
    }

    const urlPlaceholderParam = this.getFullPath(route.path, route.requiredParameters, route.optionalParamters);

    return this.replaceParamByValueInUrl(urlPlaceholderParam, params);
  }

  public redirectUrl(url: string): void {
    this._pageApp(url);
  }

  private getFullPath(path: string, reqParam: string[] = [], optParam: string[] = []): string {

    if (reqParam.length === 0 && optParam.length === 0) {
      return path;
    }

    const noTrailingSlashPath = path.replace(/\/$/, '');

    const reqParamString = reqParam
      .map((p: string) => `:${p}`)
      .join('/');

    const optParamString = optParam
      .map((p: string) => `:${p}?`)
      .join('/');

    return [noTrailingSlashPath, reqParamString, optParamString]
      .filter(Boolean) // Remove empty string from array
      .join('/');
  }

  private replaceParamByValueInUrl(url: string, params?: { [key: string]: string }): string {
    if (!params) {
      return url;
    }

    const paramsKeys = Object.keys(params);

    if (paramsKeys.length === 0) {
      return url;
    }

    // To understand the regex : https://regex101.com/r/iB8iH2/2
    let finalUrl = url;
    paramsKeys.forEach((param: string) => {
      finalUrl = finalUrl.replace(RegExp(`:${param}(\\(.*\\))?(\\?|$)?`), params[param]);
    });

    // Remove all non-replaced parameters with it's slash if he has one to avoid a '//' in url
    const sanitizedUrl = finalUrl.replace(/:\w+(\(.*\))?(\?\/|\?|\/)?/g, '');

    return sanitizedUrl;
  }
}

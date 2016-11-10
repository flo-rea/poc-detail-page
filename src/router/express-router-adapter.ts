import * as reaptor from 'reaptor';
import * as express from 'express';
import { ActionHandler } from './action-handler';

export default class ExpressRouterAdapter implements reaptor.Router.IAdapterRouter {
  private _routes: reaptor.Router.IRoutes;
  private _expressApp: express.Application;

  constructor(expressApp: express.Application) {
    this._expressApp = expressApp;
    this._routes = {};
  }

  public add(route: reaptor.Router.IRoute): Promise<void> {
    const fullpath = this.getFullPath(route.path, route.requiredParameters, route.optionalParamters);
    this._routes[route.name!] = route;

    this._expressApp.get(fullpath, (req: express.Request, res: express.Response) => {
      ActionHandler.action(route.callback, req, res);
    });

    return Promise.resolve(void 0);
  }

  public getUrl(routeName: string, params: {}): string {
    const route = this._routes[routeName];

    if (!route) {
      throw new Error('Unknown route');
    }

    const urlPlaceholderParam = this.getFullPath(route.path, route.requiredParameters, route.optionalParamters);

    return this.replaceParamByValueInUrl(urlPlaceholderParam, params);
  }

  public redirectUrl(url: string): Promise<any> {
    return Promise.resolve();
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

  private replaceParamByValueInUrl(url: string, params: { [key: string]: string }): string {
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

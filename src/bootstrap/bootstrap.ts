import * as Reaptor from 'reaptor';

export default class Bootstrap extends Reaptor.Bootstrap.ABootstrap {
  private static _instance: Bootstrap;
  constructor(routerAdapter?: Reaptor.Router.IAdapterRouter) {
    super();
    Bootstrap._instance = this;
  }

  /*
   * Here you can write your custom init.
   * This file is to be used by both client and server side.
   * This is the first "universal" file of your application.
   */

  public initializeRouters(routers: { [routeId: string]: Reaptor.Router.IAdapterRouter }): Bootstrap {
    Object.keys(routers).forEach((routerId) => {
      this.addRouter(routerId, new Reaptor.Router.Router(routers[routerId]));
    });

    return this;
  }

  public static get Application() {
    return Bootstrap._instance;
  }

}

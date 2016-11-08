import * as Reaptor from 'reaptor';

export default class Bootstrap extends Reaptor.Bootstrap.ABootstrap {
  constructor(routerAdapter?: Reaptor.Router.IAdapterRouter) {
    super();

    if (routerAdapter) {
      this.addRouter('default', new Reaptor.Router.Router(routerAdapter));
    }
  }

  /*
   * Here you can write your custom init.
   * This file is to be used by both client and server side.
   * This is the first "universal" file of your application.
   */
}

import * as Reaptor from 'reaptor';
import { Plop } from './plop';

export default {
  routers: {
    default: {
      routes: {
        home: {
          path: '/',
          name: 'home',
          requiredParameters: [],
          optionalParamters: [],
          callback: () => Plop.home()
        },
        listing: {
          path: '/list',
          name: 'listing',
          requiredParameters: [],
          optionalParamters: [],
          callback: () => Plop.listing()
        },
        detail: {
          path: '/details',
          name: 'details',
          requiredParameters: ['id'],
          optionalParamters: [],
          callback: () => {}
        }
      }
    }
  }
};

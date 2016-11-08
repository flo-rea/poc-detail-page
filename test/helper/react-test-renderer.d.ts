declare module 'react/lib/ReactTestRenderer' {
  export function create(nextElement: any): {
    getInstance: () => any;
    update: (nextElement: any) => void;
    unmount: (nextElement: any) => void;
    toJSON: () => any;
  };
  export function unstable_batchedUpdates(callback: any, a: any, b: any, c: any, d: any, e: any): void;
  export function unstable_renderSubtreeIntoContainer(parentComponent: any, nextElement: any, container: any, callback: () => any): any;
}

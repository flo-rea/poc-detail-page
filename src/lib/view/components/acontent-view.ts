import * as React from 'react';
import { AComponentView, IComponentProps, IComponentState } from '../acomponent-view';

export interface IContentViewProps extends IComponentProps { }

export interface IContentViewState extends IComponentState { }

  export abstract class AContentView<P extends IContentViewProps, S extends IContentViewState> extends AComponentView<P, S> {
  constructor(props?: P, context?: any) {
    super(props, context);
  }

  public open(e: any) {
    this.interactive(e);
  }

  public interactive(e: any): any {

  }

  public close(e: any): any {

  }
}

import * as React from 'react';
import { AContentView, IContentViewProps, IContentViewState } from './acontent-view';

export interface IBackdropProps extends IContentViewProps {
  close?(e: any): void;
  onClick?(e: any): void;
}

export interface IBackdropState extends IContentViewState { }

const backdropStyle = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: '0px',
  left: '0px',
  zIndex: 9998,
  background: 'rgba(112, 128, 144, 0.4)'
};

export class Backdrop<P extends IBackdropProps, S extends IBackdropState> extends AContentView<P, S> {
  constructor(props: P) {
    super(props);
  }

  public getInitialState(): S | Promise<S> {
    return {} as S;
  }

  public close(e: any): void {
  }

  render() {
    return <div ref={ref => console.log(ref)} style={backdropStyle} {...this.props}> </div>;
  }
}

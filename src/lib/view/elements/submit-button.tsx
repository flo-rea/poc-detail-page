import * as React from 'react';
import { AElementView } from '../aelement-view';
import { IButtonProps, IButtonState } from './button';

export type formMethod = 'get' | 'post';

export interface IButtonSubmitProps extends IButtonProps {
  formaction?: string;
  formenctype?: string;
  formmethod?: formMethod;
  formvalidate?: boolean;
  formtarget?: string;
}

export interface IButtonSubmitState extends IButtonState { }

export class ButtonSubmit<P extends IButtonSubmitProps, S extends IButtonSubmitState> extends AElementView<P, S> {
  constructor(props: P, context?: any) {
    super(props, context);
  }

  getInitialState(): S | Promise<S> {
    return {} as S;
  }

  render() {
    return (
      <span>
        <button
          {...this.props}
          type="submit">
          {this.props.children}
        </button>
      </span>
    );
  }
}

export default ButtonSubmit;

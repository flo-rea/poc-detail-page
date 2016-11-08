import * as React from 'react';
import { AElementView, IElementProps, IElementState } from '../aelement-view';

export interface IButtonProps extends IElementProps {
  autofocus?: boolean;
  disabled?: boolean;
  form?: string;
  value?: string;
  onClick?(e: any): void;
}

export interface IButtonState extends IElementState { }

export class Button<P extends IButtonProps, S extends IButtonState> extends AElementView<P, S> {
  constructor(props: P, context?: any) {
    super(props, context);
  }

  getInitialState(): S | Promise<S> {
    return {} as S;
  }

  click(e: any) {
    return this.props.onClick!(e);
  }

  render() {
    return (
      <span>
        <button
          {...this.props}
          type="button">
          {this.props.children}
        </button>
      </span>
    );
  }
}

export default Button;

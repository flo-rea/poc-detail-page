import * as React from 'react';
import * as FormElement from '../form-element-view';

export interface ITextProps extends FormElement.IFormElementProps {
  for?: string;
}

export interface ITextState extends FormElement.IFormElementState {
  [key: string]: any;
}

export class Text<P extends ITextProps, S extends ITextState> extends FormElement.AFormElementView<P, S> {
  getInitialState(): S | Promise<S> {
    return {} as S;
  }

  render() {
    return (
      <label {...this.props}>
        {this.props.children}
      </label>
    );
  }
}

export default Text;

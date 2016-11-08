import * as React from 'react';
import * as FormElement from '../form-element-view';

export type wrapType = 'hard'|'soft';

export interface ITextBoxProps extends FormElement.ITextElementProps {
  cols?: number;
  rows?: number;
  wrap?: wrapType;
}

export interface ITextBoxState extends FormElement.IFormElementState {
  [key: string]: any;
}

export class TextBox<P extends ITextBoxProps, S extends ITextBoxState> extends FormElement.AFormElementView<P, S> {
  getInitialState(): S | Promise<S> {
    return {} as S;
  }

  render() {
    return (
      <textarea {...this.props}>
        {this.props.children}
      </textarea>
    );
  }
}

export default TextBox;

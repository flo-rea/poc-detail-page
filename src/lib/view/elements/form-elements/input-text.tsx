import * as React from 'react';
import * as FormElement from '../form-element-view';

export interface IInputTextProps extends FormElement.ITextElementProps { }

export interface IInputTextState extends FormElement.IFormElementState {
  [key: string]: any;
}

export class InputText<P extends IInputTextProps, S extends IInputTextState> extends FormElement.AFormElementView<P, S> {
  getInitialState(): S | Promise<S> {
    return {} as S;
  }

  render() {
    return (
      <input {...this.props}
        type="text" />
    );
  }
}

export default InputText;

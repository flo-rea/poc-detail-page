import * as React from 'react';
import * as FormElement from '../form-element-view';

export interface IInputNumberProps extends FormElement.INumericElementProps {
  placeholder?: string;
}

export interface IInputNumberState extends FormElement.IFormElementState {
  [key: string]: any;
}

export class InputNumber<P extends IInputNumberProps, S extends IInputNumberState> extends FormElement.AFormElementView<P, S> {
  getInitialState(): S | Promise<S> {
    return {} as S;
  }

  render() {
    return (
      <input {...this.props}
        type="number" />
    );
  }
}

export default InputNumber;

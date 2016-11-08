import * as React from 'react';
import * as FormElement from '../form-element-view';

export interface ICheckboxProps extends FormElement.ICheckeableElementProps { }

export interface ICheckboxState extends FormElement.IFormElementState {
  [key: string]: any;
}

export class Checkbox<P extends ICheckboxProps, S extends ICheckboxState> extends FormElement.AFormElementView<P, S> {
  getInitialState(): S | Promise<S> {
    return {} as S;
  }

  render() {
    return (
      <input {...this.props}
        type="checkbox" />
    );
  }
}

export default Checkbox;

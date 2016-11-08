import * as React from 'react';
import * as FormElement from '../form-element-view';

export interface ISelectOptionProps extends FormElement.IFormElementProps {
  label?: string;
  selected?: boolean;
}

export interface ISelectOptionState extends FormElement.IFormElementState {
  [key: string]: any;
}

export class Option<P extends ISelectOptionProps, S extends ISelectOptionState> extends FormElement.AFormElementView<P, S> {
  getInitialState(): S | Promise<S> {
    return {} as S;
  }

  render() {
    return (
      <option {...this.props} >
        {this.props.children}
      </option>
    );
  }
}

export default Option;

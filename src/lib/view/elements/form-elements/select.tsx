import * as React from 'react';
import * as FormElement from '../form-element-view';

export interface ISelectProps extends FormElement.IFormElementProps {
  length?: number;
  multiple?: boolean;
  selectedIndex?: number;
  size?: number;
  type?: string;
  add?: (optionElement: HTMLOptionElement, index?: number) => void;
  remove?: (index: number) => void;
}

export interface ISelectState extends FormElement.IFormElementState {
  [key: string]: any;
}

export class Select<P extends ISelectProps, S extends ISelectState> extends FormElement.AFormElementView<P, S> {
  getInitialState(): S | Promise<S> {
    return {} as S;
  }

  render() {
    return (
      <select {...this.props} >
        {this.props.children}
      </select>
    );
  }
}

export default Select;

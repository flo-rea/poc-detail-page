import * as React from 'react';
import * as FormElement from '../form-element-view';

export interface IRadioProps extends FormElement.ICheckeableElementProps { }

export interface IRadioState extends FormElement.IFormElementState {
  [key: string]: any;
}

export class Radio<P extends IRadioProps, S extends IRadioState> extends FormElement.AFormElementView<P, S> {
  getInitialState(): S | Promise<S> {
    return {} as S;
  }

  render() {
    return (
      <input {...this.props}
        type="radio" />
    );
  }
}

export default Radio;

import { AAthomeView, IAAthomeViewProps, IAAthomeViewState } from '../aathome-view';

export interface IComponentProps extends IAAthomeViewProps {
  class?: string;
  id?: string;
}

export interface IComponentState extends IAAthomeViewState {
  [key: string]: any;
}

export abstract class AComponentView<P extends IComponentProps, S extends IComponentState> extends AAthomeView<P, S> {
  constructor(props?: P, context?: any) {
    super(props, context);
  }
}

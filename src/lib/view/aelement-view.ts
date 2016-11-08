import * as React from 'react';

import { AAthomeView, IAAthomeViewProps, IAAthomeViewState } from '../aathome-view';

export interface IElementProps extends IAAthomeViewProps {
  className?: string;
  id?: string;
  name?: string;
}

export interface IElementState extends IAAthomeViewState {
  [key: string]: any;
}

export abstract class AElementView<P extends IElementProps, S extends IElementState> extends AAthomeView<P, S> {
  constructor(props: P, context?: any) {
    super(props, context);
  }
}

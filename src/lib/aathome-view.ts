import 'react';
import * as Reaptor from 'reaptor';


export interface IAAthomeViewProps extends Reaptor.View.IProps {

}

export interface IAAthomeViewState extends Reaptor.View.IState {

}

export abstract class AAthomeView<P extends IAAthomeViewProps, S extends IAAthomeViewState> extends Reaptor.View.AView<P, S> {
  constructor(props?: P, context?: any) {
    // TODO: put AView props not mandatory and remove the '!'
    super(props!);
  }
}

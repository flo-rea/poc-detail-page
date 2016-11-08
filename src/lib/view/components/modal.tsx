import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AContentView, IContentViewProps, IContentViewState } from './acontent-view';
import { Backdrop } from './backdrop';
import { Button } from '../elements/button';

export interface IModalProps extends IContentViewProps {
  isOpen: boolean;
}

export interface IModalState extends IContentViewState { }

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 9999,
  background: '#fff'
};

export class Modal<P extends IModalProps, S extends IModalState> extends AContentView<P, S> {
  constructor(props: P) {
    super(props);

    // this.closeModal = this.closeModal.bind(this);
    // this.handleClick = this.handleClick.bind(this);
  }

  getInitialState(): S | Promise<S> {
    // this.handleClick = this.handleClick.bind(this);
    return {} as S;
  }

  handleClick(index: any) {
    console.log('CLICKCC');
  };

  closeModal(e: any): void {
    console.log('plop');
    console.log(document.getElementById('myBackdrop'));
    ReactDOM.unmountComponentAtNode(document.getElementById('myBackdrop')!);
    // ReactDOM.findDOMNode(this.refs['myBackdrop']).remove();
    // console.log(this.refs['myBackdrop']);
    // console.log(ReactDOM.findDOMNode(this.refs['myBackdrop']));
  }

  render() {
    if (this.props.isOpen === false) {
      return (
        <div> </div>
      );
    }

    return (
      <div>
        <Backdrop ref="myBackdrop" id="myBackdrop" onClick={this.closeModal} />
        <div style={modalStyle}>
          {this.props.children}
          <Button onClick={this.handleClick}>Close me</Button>
        </div>
      </div>
    );
  }
}

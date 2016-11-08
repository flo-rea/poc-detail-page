"use strict";
const React = require('react');
const ReactDOM = require('react-dom');
const acontent_view_1 = require('./acontent-view');
const backdrop_1 = require('./backdrop');
const button_1 = require('../elements/button');
const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 9999,
    background: '#fff'
};
class Modal extends acontent_view_1.AContentView {
    constructor(props) {
        super(props);
    }
    getInitialState() {
        return {};
    }
    handleClick(index) {
        console.log('CLICKCC');
    }
    ;
    closeModal(e) {
        console.log('plop');
        console.log(document.getElementById('myBackdrop'));
        ReactDOM.unmountComponentAtNode(document.getElementById('myBackdrop'));
    }
    render() {
        if (this.props.isOpen === false) {
            return (React.createElement("div", null, " "));
        }
        return (React.createElement("div", null, 
            React.createElement(backdrop_1.Backdrop, {ref: "myBackdrop", id: "myBackdrop", onClick: this.closeModal}), 
            React.createElement("div", {style: modalStyle}, 
                this.props.children, 
                React.createElement(button_1.Button, {onClick: this.handleClick}, "Close me"))));
    }
}
exports.Modal = Modal;
//# sourceMappingURL=modal.js.map
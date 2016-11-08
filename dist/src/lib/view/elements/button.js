"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
const React = require('react');
const aelement_view_1 = require('../aelement-view');
class Button extends aelement_view_1.AElementView {
    constructor(props, context) {
        super(props, context);
    }
    getInitialState() {
        return {};
    }
    click(e) {
        return this.props.onClick(e);
    }
    render() {
        return (React.createElement("span", null, 
            React.createElement("button", __assign({}, this.props, {type: "button"}), this.props.children)
        ));
    }
}
exports.Button = Button;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Button;
//# sourceMappingURL=button.js.map
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
const FormElement = require('../form-element-view');
class Radio extends FormElement.AFormElementView {
    getInitialState() {
        return {};
    }
    render() {
        return (React.createElement("input", __assign({}, this.props, {type: "radio"})));
    }
}
exports.Radio = Radio;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Radio;
//# sourceMappingURL=radio.js.map
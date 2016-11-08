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
class Option extends FormElement.AFormElementView {
    getInitialState() {
        return {};
    }
    render() {
        return (React.createElement("option", __assign({}, this.props), this.props.children));
    }
}
exports.Option = Option;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Option;
//# sourceMappingURL=select-option.js.map
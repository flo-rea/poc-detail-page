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
const acontent_view_1 = require('./acontent-view');
const backdropStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '0px',
    left: '0px',
    zIndex: 9998,
    background: 'rgba(112, 128, 144, 0.4)'
};
class Backdrop extends acontent_view_1.AContentView {
    constructor(props) {
        super(props);
    }
    getInitialState() {
        return {};
    }
    close(e) {
    }
    render() {
        return React.createElement("div", __assign({ref: ref => console.log(ref), style: backdropStyle}, this.props), " ");
    }
}
exports.Backdrop = Backdrop;
//# sourceMappingURL=backdrop.js.map
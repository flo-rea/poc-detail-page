"use strict";
const React = require('react');
const renderer = require('react/lib/ReactTestRenderer');
const button_1 = require('../../../src/lib/view/elements/button');
jest.mock('react-dom');
describe('Button', () => {
    it('has correct default options', () => {
        const component = renderer.create(React.createElement(button_1.default, {id: "button"}, "click-me."));
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
//# sourceMappingURL=button.test.js.map
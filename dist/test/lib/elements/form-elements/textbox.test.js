"use strict";
const React = require('react');
const renderer = require('react/lib/ReactTestRenderer');
const textbox_1 = require('../../../../src/lib/view/elements/form-elements/textbox');
jest.mock('react-dom');
describe('Textbox', () => {
    const component = renderer.create(React.createElement(textbox_1.TextBox, {id: "textbox1", name: "item2"}, "This is a sample textbox."));
    it('has correct default options', () => {
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
//# sourceMappingURL=textbox.test.js.map
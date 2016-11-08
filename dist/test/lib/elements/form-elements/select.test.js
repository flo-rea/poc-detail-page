"use strict";
const React = require('react');
const renderer = require('react/lib/ReactTestRenderer');
const select_1 = require('../../../../src/lib/view/elements/form-elements/select');
const select_option_1 = require('../../../../src/lib/view/elements/form-elements/select-option');
jest.mock('react-dom');
describe('Select', () => {
    const component = renderer.create(React.createElement(select_1.Select, {id: "item2", name: "item2"}, 
        React.createElement(select_option_1.Option, null, "My first option"), 
        React.createElement(select_option_1.Option, null, "My second option"), 
        React.createElement(select_option_1.Option, null, "My third option")));
    it('has correct default options', () => {
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
//# sourceMappingURL=select.test.js.map
"use strict";
const React = require('react');
const renderer = require('react/lib/ReactTestRenderer');
const checkbox_1 = require('../../../../src/lib/view/elements/form-elements/checkbox');
jest.mock('react-dom');
describe('Checkbox', () => {
    it('has correct default options', () => {
        const component = renderer.create(React.createElement(checkbox_1.Checkbox, {id: "item2", name: "item2", checked: true}));
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
//# sourceMappingURL=checkbox.test.js.map
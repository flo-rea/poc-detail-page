"use strict";
const React = require('react');
const renderer = require('react/lib/ReactTestRenderer');
const input_number_1 = require('../../../../src/lib/view/elements/form-elements/input-number');
jest.mock('react-dom');
describe('InputNumber', () => {
    it('has correct default options', () => {
        const component = renderer.create(React.createElement(input_number_1.default, {id: "item2", name: "item2", value: "10", disabled: true}));
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
//# sourceMappingURL=input-number.test.js.map
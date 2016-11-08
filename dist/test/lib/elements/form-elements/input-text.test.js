"use strict";
const React = require('react');
const renderer = require('react/lib/ReactTestRenderer');
const input_text_1 = require('../../../../src/lib/view/elements/form-elements/input-text');
jest.mock('react-dom');
describe('InputText', () => {
    it('has correct default options', () => {
        const component = renderer.create(React.createElement(input_text_1.InputText, {id: "item2", name: "item2", value: "10", disabled: true}));
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
//# sourceMappingURL=input-text.test.js.map
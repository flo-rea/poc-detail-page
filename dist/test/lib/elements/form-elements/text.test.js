"use strict";
const React = require('react');
const renderer = require('react/lib/ReactTestRenderer');
const text_1 = require('../../../../src/lib/view/elements/form-elements/text');
jest.mock('react-dom');
describe('Text (label)', () => {
    const component = renderer.create(React.createElement(text_1.Text, {id: "item2", for: "item2"}));
    it('has correct default options', () => {
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
//# sourceMappingURL=text.test.js.map
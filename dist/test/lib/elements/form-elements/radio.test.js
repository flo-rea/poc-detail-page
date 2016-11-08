"use strict";
const React = require('react');
const renderer = require('react/lib/ReactTestRenderer');
const radio_1 = require('../../../../src/lib/view/elements/form-elements/radio');
jest.mock('react-dom');
describe('Radio', () => {
    const component = renderer.create(React.createElement(radio_1.Radio, {id: "item2", name: "item2", checked: true}));
    it('has correct default options', () => {
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
//# sourceMappingURL=radio.test.js.map
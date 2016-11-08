"use strict";
const React = require('react');
const renderer = require('react/lib/ReactTestRenderer');
const submit_button_1 = require('../../../src/lib/view/elements/submit-button');
jest.mock('react-dom');
describe('SubmitButton', () => {
    it('has correct default options', () => {
        const component = renderer.create(React.createElement(submit_button_1.default, {id: "button"}, "submit-me!"));
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
//# sourceMappingURL=submit-button.test.js.map
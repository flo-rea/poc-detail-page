import * as React from 'react';
import * as renderer from 'react/lib/ReactTestRenderer';

import SubmitButton from '../../../src/lib/view/elements/submit-button';

jest.mock('react-dom');

describe('SubmitButton', () => {
  it('has correct default options', () => {
    const component = renderer.create(
       <SubmitButton id="button">
        submit-me!
       </SubmitButton>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

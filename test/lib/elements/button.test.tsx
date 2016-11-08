import * as React from 'react';
import * as renderer from 'react/lib/ReactTestRenderer';

import Button from '../../../src/lib/view/elements/button';

jest.mock('react-dom');

describe('Button', () => {
  it('has correct default options', () => {
    const component = renderer.create(
       <Button id="button">
        click-me.
       </Button>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

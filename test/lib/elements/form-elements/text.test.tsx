import * as React from 'react';
import * as renderer from 'react/lib/ReactTestRenderer';

import { Text } from '../../../../src/lib/view/elements/form-elements/text';

jest.mock('react-dom');

describe('Text (label)', () => {
  const component = renderer.create(
       <Text id="item2" for="item2" />
    );

  it('has correct default options', () => {
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

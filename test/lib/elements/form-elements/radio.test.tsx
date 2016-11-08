import * as React from 'react';
import * as renderer from 'react/lib/ReactTestRenderer';

import { Radio } from '../../../../src/lib/view/elements/form-elements/radio';

jest.mock('react-dom');

describe('Radio', () => {
  const component = renderer.create(
       <Radio id="item2" name="item2" checked={true} />
    );

  it('has correct default options', () => {
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

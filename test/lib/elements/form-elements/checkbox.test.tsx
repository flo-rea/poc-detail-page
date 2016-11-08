import * as React from 'react';
import * as renderer from 'react/lib/ReactTestRenderer';

import { Checkbox } from '../../../../src/lib/view/elements/form-elements/checkbox';

jest.mock('react-dom');

describe('Checkbox', () => {
  it('has correct default options', () => {
    const component = renderer.create(
       <Checkbox id="item2" name="item2" checked={true} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

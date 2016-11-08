import * as React from 'react';
import * as renderer from 'react/lib/ReactTestRenderer';

import InputNumber from '../../../../src/lib/view/elements/form-elements/input-number';

jest.mock('react-dom');

describe('InputNumber', () => {
  it('has correct default options', () => {
    const component = renderer.create(
       <InputNumber id="item2" name="item2" value="10" disabled={true} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

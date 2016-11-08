import * as React from 'react';
import * as renderer from 'react/lib/ReactTestRenderer';

import { Select } from '../../../../src/lib/view/elements/form-elements/select';
import { Option } from '../../../../src/lib/view/elements/form-elements/select-option';

jest.mock('react-dom');

describe('Select', () => {
  const component = renderer.create(
       <Select id="item2" name="item2">
        <Option>My first option</Option>
        <Option>My second option</Option>
        <Option>My third option</Option>
       </Select>
    );

  it('has correct default options', () => {
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

import * as React from 'react';
import * as renderer from 'react/lib/ReactTestRenderer';

import { InputText } from '../../../../src/lib/view/elements/form-elements/input-text';

jest.mock('react-dom');

describe('InputText', () => {
  it('has correct default options', () => {
    const component = renderer.create(
       <InputText id="item2" name="item2" value="10" disabled={true} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

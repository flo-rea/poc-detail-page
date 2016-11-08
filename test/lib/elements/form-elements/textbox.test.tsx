import * as React from 'react';
import * as renderer from 'react/lib/ReactTestRenderer';

import { TextBox } from '../../../../src/lib/view/elements/form-elements/textbox';

jest.mock('react-dom');

describe('Textbox', () => {
  const component = renderer.create(
       <TextBox id="textbox1" name="item2">
        This is a sample textbox.
       </TextBox>
    );  

  it('has correct default options', () => {
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

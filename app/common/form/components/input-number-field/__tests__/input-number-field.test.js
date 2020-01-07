import { shallow } from 'enzyme';
import React from 'react';

import InputNumberField from '../input-number-field';

describe('<InputNumberField />', () => {
  it('Renders correctly', () => {
    // Act
    const wrapper = shallow(
      <InputNumberField
        id="test_id"
        label="test_label"
        placeholder="test_placeholder"
      />,
    );

    // Assert
    expect(wrapper.getElement()).not.toBeNull();
  });
});

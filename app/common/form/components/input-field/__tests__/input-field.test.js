import { shallow } from 'enzyme';
import React from 'react';

import InputField from '../input-field';

describe('<InputField />', () => {
  it('Renders correctly', () => {
    // Act
    const wrapper = shallow(
      <InputField
        id="test_id"
        label="test_label"
        placeholder="test_placeholder"
      />,
    );

    // Assert
    expect(wrapper.getElement()).not.toBeNull();
  });
});

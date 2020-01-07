import { shallow } from 'enzyme';
import React from 'react';

import SelectField from '../select-field';

const SELECT_OPTIONS = {
  lorem: 'Lorem Text',
  ipsum: 'Ipsum Text',
  dolor: 'Dolor Text',
};

describe('<SelectField />', () => {
  it('Renders correctly', () => {
    // Act
    const wrapper = shallow(
      <SelectField
        id="test_id"
        label="test_label"
        options={SELECT_OPTIONS}
        placeholder="test_placeholder"
      />,
    );

    // Assert
    expect(wrapper.getElement()).not.toBeNull();
  });
});

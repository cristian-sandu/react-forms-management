import { Input } from 'antd';
import FormProvider from 'common/form/provider/form-provider';
import { shallow } from 'enzyme';
import React from 'react';

import FormField from '../form-field';

describe('<FormField />', () => {
  // Arrange
  const form = {
    getFieldDecorator: jest.fn(),
  };

  it('Renders correctly', () => {
    // Act
    const wrapper = shallow(
      <FormProvider value={form}>
        <FormField id="test_field">
          <Input />
        </FormField>
      </FormProvider>,
    );

    // Assert
    expect(wrapper.getElement()).toMatchSnapshot();
  });
});

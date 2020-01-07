import { mockForm, mockFormFieldsValue } from 'common/form/mocks';

import { getFormFieldsValue } from '../form-selectors';

describe('Form selectors', () => {
  it('Should return form fields value', () => {
    // Act
    const formFieldsValue = getFormFieldsValue({}, { form: mockForm });

    // Assert
    expect(formFieldsValue).toEqual(mockFormFieldsValue);
  });
});

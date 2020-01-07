import { useSelector } from 'react-redux';

import useFormContext from '../consumer/form-consumer';

const useFormSelector = (selector, customProps) => {
  const form = useFormContext();
  return useSelector(state => selector(state, { form, ...customProps }));
};

export default useFormSelector;

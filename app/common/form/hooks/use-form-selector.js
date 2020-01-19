import { useSelector } from 'react-redux';

import useForm from '../consumer/form-consumer';

const useFormSelector = (selector, customProps) => {
  const form = useForm();
  return useSelector(state => selector(state, { form, ...customProps }));
};

export default useFormSelector;

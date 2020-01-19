import invariant from 'invariant';
import { useContext } from 'react';

import FormContext from '../context/form-context';

function useForm() {
  const form = useContext(FormContext);

  if (process.env.NODE_ENV !== 'production') {
    invariant(
      form,
      'Please provide `form` details by wrapping your `Form` in `<FormProvider value={form}/>`',
    );
  }

  return form;
}

export default useForm;

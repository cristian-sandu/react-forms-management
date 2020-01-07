import invariant from 'invariant';
import { useContext } from 'react';

import FormContext from '../context/form-context';

function useFormContext() {
  const form = useContext(FormContext);

  if (process.env.NODE_ENV !== 'production') {
    invariant(
      form,
      'You must provide `form` details to component via context, wrap your `Form` in `<FormProvider value={form}/>`',
    );
  }

  return form;
}

export default useFormContext;

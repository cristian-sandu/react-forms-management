import invariant from 'invariant';
import { useContext } from 'react';

import TextDirectionContext from '../context/text-direction-context';

function useTextDirection() {
  const textDirection = useContext(TextDirectionContext);

  if (process.env.NODE_ENV !== 'production') {
    invariant(
      textDirection,
      'You must provide `textDirection` details to component via context, wrap your component tree in `<TextDirectionProvider value={textDirection}/>`',
    );
  }

  return textDirection;
}

export default useTextDirection;

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import authReducer from 'redux/reducers/auth-reducer';

import { REDUCER_KEYS } from 'common/constants/reducer-keys';
import history from 'utils/history';
import languageProviderReducer from 'containers/LanguageProvider/reducer';

const createReducer = (injectedReducers = {}) =>
  combineReducers({
    language: languageProviderReducer,
    router: connectRouter(history),
    [REDUCER_KEYS.AUTHENTICATION]: authReducer,
    ...injectedReducers,
  });

export default createReducer;

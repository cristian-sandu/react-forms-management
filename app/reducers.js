import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import authReducer from 'redux/reducers/auth-reducer';

import { REDUCER_KEYS } from 'common/constants/reducer-keys';
import history from 'utils/history';
import languageProviderReducer from 'containers/LanguageProvider/reducer';
import entitiesReducer from './containers/AdminDashboard/components/Entities/reducer';

const createReducer = (injectedReducers = {}) =>
  combineReducers({
    language: languageProviderReducer,
    router: connectRouter(history),
    [REDUCER_KEYS.AUTHENTICATION]: authReducer,
    [REDUCER_KEYS.ENTITIES]: entitiesReducer,
    ...injectedReducers,
  });

export default createReducer;

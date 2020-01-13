import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import authReducer from 'redux/reducers/auth-reducer';

import { REDUCER_KEYS } from 'common/constants/reducer-keys';
import history from 'utils/history';
import languageProviderReducer from 'containers/LanguageProvider/reducer';
import entitiesReducer from './containers/AdminDashboard/components/Entities/reducer';
import associationsReducer from './containers/AdminDashboard/components/Associations/reducer';
import entityByNameReducer from './containers/AdminDashboard/components/EntityByName/reducers';
import entityByIdReducer from './containers/AdminDashboard/components/EntityById/reducers';
import associationByName from './containers/AdminDashboard/components/AssociationByName/reducers';

const createReducer = (injectedReducers = {}) =>
  combineReducers({
    language: languageProviderReducer,
    router: connectRouter(history),
    [REDUCER_KEYS.AUTHENTICATION]: authReducer,
    [REDUCER_KEYS.ENTITIES]: entitiesReducer,
    [REDUCER_KEYS.ENTITY_BY_NAME]: entityByNameReducer,
    [REDUCER_KEYS.ENTITY_BY_ID]: entityByIdReducer,
    [REDUCER_KEYS.ASSOCIATIONS]: associationsReducer,
    [REDUCER_KEYS.ASSOCIATION_BY_NAME]: associationByName,
    ...injectedReducers,
  });

export default createReducer;

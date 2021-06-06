import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ProfileReducer from './ProfileReducer';
import UserReducer from './UserReducer';
import RoleReducer from './RoleReducer';
import SpaceReducer from './SpaceReducer';
import SiteReducer from './SiteReducer';

export default combineReducers({
  authorization: AuthReducer,
  profile: ProfileReducer,
  user: UserReducer,
  role: RoleReducer,
  space: SpaceReducer,
  site: SiteReducer,
});

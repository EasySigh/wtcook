import { Action, createReducer, on} from '@ngrx/store';
import { createUser, loginUser } from '../actions/user.actions';
import { UserData } from '../../models/interfaces/user';

export const initialState: UserData = {
  email: ''
};

const _userReducer = createReducer(
  initialState,
  on(createUser, (state) => ({...state, name: createUser.name})),
  on(loginUser, (state) => state)
);

export function userReducer(state: UserData | unknown, action: Action) {
  return _userReducer(state as UserData, action);
}

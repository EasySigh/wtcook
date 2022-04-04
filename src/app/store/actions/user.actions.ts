import { createAction, props } from '@ngrx/store';
import { UserData } from '../../models/interfaces/user';

export const createUser = createAction('REGISTER_USER', props<UserData>());
export const loginUser = createAction('LOGIN_USER', props<UserData>());

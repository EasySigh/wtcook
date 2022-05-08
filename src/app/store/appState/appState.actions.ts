import { createAction, props } from '@ngrx/store';
import { UITheme } from '@shared/data/models/ui';
import { UserData, UserRight } from '@shared/data/models';

export const setUser    = createAction('[APP STATE] update User', props<{ user: Partial<UserData> }>() );
export const setTheme   = createAction('[APP STATE] update Theme', props<{ theme: UITheme }>() );
export const setFilter  = createAction('[APP STATE] update Filter', props<{ filter: UserRight }>() );
export const setLoading = createAction('[APP STATE] update Loading', props<{ isLoading: boolean }>() );

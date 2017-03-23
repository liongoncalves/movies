import { Action } from '@ngrx/store';
import { Movie } from '../../models';
import { type } from '../../shared';

export const ActionTypes = {
    SEARCH: type('[Movie] Search'),
    SEARCH_COMPLETE: type('[Movie] Search Complete'),
    LOAD_PAGE: type('[Movie] Load page'),
    LOAD_PAGE_SUCCESS: type('[Movie] Load page success'),
};

export class LoadPageAction implements Action {
    type = ActionTypes.LOAD_PAGE;
    constructor() { }
}

export class LoadPageSuccessAction implements Action {
    type = ActionTypes.LOAD_PAGE_SUCCESS;
    constructor(public payload: Movie[]) { }
}

export type Actions = LoadPageAction | LoadPageSuccessAction;
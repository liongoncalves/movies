import { createSelector } from 'reselect';
import { ActionReducer, Action } from '@ngrx/store';

import { Movie } from '../../models';
import * as movies from '../actions';

export interface State {
    page: number;
    movies: Movie[];
    totalResult: number;
    totalPages: number;
    loading: boolean;
};

const initialState: State = {
    page: 0,
    movies: [],
    totalResult: 0,
    totalPages: 0,
    loading: false
};

export function reducer(state = initialState, action: Action): State {
    switch (action.type) {
        case movies.ActionTypes.LOAD_PAGE_SUCCESS: {
            return { ...action.payload, loading: false };
        }
        default: {
            return state;
        }
    }
};

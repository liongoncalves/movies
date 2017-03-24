import { createSelector } from 'reselect';
import { ActionReducer, Action } from '@ngrx/store';

import { Movie } from '../../models';
import * as movies from '../actions';

export interface State {
    page: number;
    movies: Movie[];
    totalMovies: number;
    totalPages: number;
    loading: boolean;
};

const initialState: State = {
    page: 0,
    movies: [],
    totalMovies: 0,
    totalPages: 0,
    loading: false
};

export function reducer(state = initialState, action: Action): State {
    switch (action.type) {
        case movies.ActionTypes.LOAD_PAGE_SUCCESS: {
            return {
                page: action.payload.page,
                movies: action.payload.results,
                totalMovies: action.payload.totalResult,
                totalPages: action.payload.totalPages,
                loading: false
            };
        }
        default: {
            return state;
        }
    }
};

const getMoviesState = state => state.movies;

const getMovies = (state: State) => {
    debugger;
    return state.movies;
}

export const getEntities = createSelector(getMoviesState, getMovies);

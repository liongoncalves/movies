import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';

import * as movies from '../actions';

import { Movie } from '../../models';
const API_KEY = 'api_key=b0a010ae892037fde9f28abac94d6012';
const API_URL = 'https://api.themoviedb.org/3/discover/movie';
@Injectable()
export class MovieEffects {

    @Effect()
    loadPage$: Observable<any> = this.action$
        .ofType(movies.ActionTypes.LOAD_PAGE)
        .startWith(new movies.LoadPageAction())
        .switchMap(() => {
            return this.http.get('https://api.themoviedb.org/3/discover/movie?' + API_KEY)
                .map(res => {
                    return new movies.LoadPageSuccessAction(res.json());
                });
        });

    constructor(private action$: Actions, private http: Http) {
    }
}
import React from 'react';
import { setMovieString, receiveMovies } from '../../src/actions';

describe('actions', () => {
  it('setMovieString returns expected action', () =>{
    const action = setMovieString('hello');

    const expectedAction = {
      type: 'SET_MOVIE_STRING',
      movieString: 'hello'
    };

    expect(action).toEqual(expectedAction);
  });
});

describe('actions', () => {
  it('receive movies returns expected action', () =>{
    const action = receiveMovies({Search:"TEST"});

    const expectedAction = {
      type: 'RECEIVE_MOVIES',
      movies: "TEST"
    };

    expect(action).toEqual(expectedAction);
  });
});

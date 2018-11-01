import React from 'react';
import movieResults from '../../src/reducers/movieResults';

describe('movieResults', () => {
  it("Executes RECEIVE_MOVIES action", () => {
    const initialState = [];
    const action = {
      type: "RECEIVE_MOVIES",
      movies: [
        {
          Title: "Batman Begins",
          Year: "2005",
          imdbID: "tt0372784",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BZmUwNGU2ZmItMmRiNC00MjhlLTg5YWUtODMyNzkxODYzMmZlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
        }
      ]
    };

    const expectedState = [
      {
        Title: "Batman Begins",
        Year: "2005",
        imdbID: "tt0372784",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BZmUwNGU2ZmItMmRiNC00MjhlLTg5YWUtODMyNzkxODYzMmZlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
      }
    ];

    const outputState = movieResults(initialState, action);

    expect(outputState).toEqual(expectedState);
  });

  it ('executes default case', () => {
    const action = {
        type:'xxx',
        movies: []
  }

  const expectedState = [];

  const outputState = movieResults(undefined, action);

  expect(outputState).toEqual(expectedState);

  })
});





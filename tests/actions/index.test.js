import React from "react";
import { setMovieString, receiveMovies } from "../../src/actions";

describe("actions", () => {
  it("setMovieString returns expected action", () => {
    const action = setMovieString("hello");

    const expectedAction = {
      type: "SET_MOVIE_STRING",
      movieString: "hello"
    };

    expect(action).toEqual(expectedAction);
  });
});

describe("actions", () => {
  it("receiveMovies returns expected action", () => {
    const mockResult = {
      Search: [
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

    const action = receiveMovies(mockResult);

    const expectedAction = {
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

    expect(action).toEqual(expectedAction);
  });
});

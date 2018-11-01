import React from "react";
import { mapStateToProps } from "../../src/containers/MovieResultsContainer";

describe("mapStateToProps", () => {
  it("extracts movieResults from state", () => {
    const reduxState = {
      movieResults: {
        Title: "Batman Begins",
        Year: "2005",
        imdbID: "tt0372784",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BZmUwNGU2ZmItMmRiNC00MjhlLTg5YWUtODMyNzkxODYzMmZlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
      }
    };

    const expectedOutput = {
        
      movies: {
        Title: "Batman Begins",
        Year: "2005",
        imdbID: "tt0372784",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BZmUwNGU2ZmItMmRiNC00MjhlLTg5YWUtODMyNzkxODYzMmZlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
      }
    };

    const output = mapStateToProps(reduxState);

    expect(output).toEqual(expectedOutput);
  });
});

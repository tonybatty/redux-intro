import { mapStateToProps } from '../../src/containers/MovieResultsContainer.js'

describe('mapStateToProps', () => {
  it('extracts movie results from state', () => {
      const reduxState = {
        movieResults: "test"
      };

      const expectedOutput = {
        movies: "test"
      };

  const output = mapStateToProps(reduxState);

  expect(output).toEqual(expectedOutput);

  });
});

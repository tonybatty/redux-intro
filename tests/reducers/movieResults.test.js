import movieResults from '../../src/reducers/movieResults';


describe('movieResults', () => {
  it('executes RECEIVE_MOVIES action', () => {
    const initialState = "hello"

      const action = {
        type: 'RECEIVE_MOVIES',
        movies: "test"
      };
      const expectedState = "test"

      const outputState = movieResults(initialState, action);

      expect(outputState).toEqual(expectedState);
  });

  it('executes RECEIVE_MOVIES action', () => {
    const initialState = "hello"

      const action = {
        type: 'NOTHING',
        movies: "test"
      };
      const expectedState = "hello"

      const outputState = movieResults(initialState, action);

      expect(outputState).toEqual(expectedState);
  });
});

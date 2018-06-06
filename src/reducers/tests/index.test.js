import rootReducer from '.././index';

describe('rootReducer', () => {
  it('should match the snapshot', () => {
    expect(rootReducer).toMatchSnapshot();
  });
});

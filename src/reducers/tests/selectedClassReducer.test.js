import selectedClassReducer from '../selectedClassReducer';
import * as actions from '../../actions';

describe("Selected Class Reducers", () => {
  it("should return a default state", () => {
    const expected = "";
    expect(selectedClassReducer(undefined, "")).toEqual(expected);
  });

  it("should add class to state", () => {
    const expected = "Cragheart";

    expect(selectedClassReducer(undefined, actions.addSelectedClass("Cragheart"))).toEqual(expected);
  });

});

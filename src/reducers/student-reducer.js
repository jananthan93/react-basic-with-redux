import { NEW_STUDENT } from "../actions/types";

const initialState = {
  students: [
    {
      id: 1,
      sname: "karan",
      grade: "12",
      dob: "2012-02-23",
    },
  ],
};

export default function (state = initialState, action) {
  console.log(state.students);
  switch (action.type) {
    case NEW_STUDENT:
      return {
        ...state,
        students: state.students.concat(action.payload),
      };
    default:
      return state;
  }
}

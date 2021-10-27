import createDataContext from "./createDataContext";
import employees from "../api/employees";

const dataReducer = (state, action) => {
  switch (action.type) {
    case "GET_EMPLOYEES":
      return {
        ...state,
        employeeList: action.payload.employeeList,
        randomEmployee: action.payload.randomEmployee,
      };
    case "CORRECT_EMPLOYEE_MATCH":
      return {
        ...state,
        employeeMatch: action.payload.employeeMatch,
      };
    case "INCORRECT_EMPLOYEE_MATCH":
      return {
        ...state,
        incorrectEmployees: [
          ...state.incorrectEmployees,
          action.payload.incorrectEmployeeMatch,
        ],
      };
    default:
      return state;
  }
};

const getEmployees = (dispatch) => {
  return async () => {
    const response = await employees.get();
    const { data } = response;
    // select random 6 employee list from main data response
    const employeeList = data.sort(() => 0.5 - Math.random()).slice(0, 6);
    // randomly select one employee id and name
    const randomEmployee =
      employeeList[Math.floor(Math.random() * employeeList.length)];
    dispatch({
      type: "GET_EMPLOYEES",
      payload: {
        employeeList,
        randomEmployee,
      },
    });
  };
};

const setEmployee =
  (dispatch) =>
  ({ selectedEmployeeId, randomEmployeeId }) => {
    console.log(selectedEmployeeId, randomEmployeeId);
    if (selectedEmployeeId === randomEmployeeId) {
      console.log("match");
      dispatch({
        type: "CORRECT_EMPLOYEE_MATCH",
        payload: {
          employeeMatch: selectedEmployeeId,
        },
      });
    } else {
      console.log("No match");
      dispatch({
        type: "INCORRECT_EMPLOYEE_MATCH",
        payload: {
          incorrectEmployeeMatch: selectedEmployeeId,
        },
      });
    }
  };

export const { Provider, Context } = createDataContext(
  dataReducer,
  { getEmployees, setEmployee },
  {
    employeeList: [],
    selectedEmployee: "",
    randomEmployee: "",
    employeeMatch: "",
    incorrectEmployees: [],
  }
);
